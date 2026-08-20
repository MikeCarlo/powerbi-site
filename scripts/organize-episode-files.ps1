# Organizes podcast episode files on the Desktop for two shows.
#
# Explicit Measures (file name contains "ep.544"):
#   ep.544 - <original name>.m4a
#   ep.544 - <original name>.mp4               (portrait video - no suffix)
#   ep.544 - <original name> (landscape).mp4   (landscape video)
#   Moved to D:\<current year>  (e.g. D:\2026)
#
# Agentic Thinking (file name contains "agentic thinking", spaces,
# hyphens, or underscores between the words all match):
#   029-<episode name>.mp4                     (portrait video - no suffix)
#   029-<episode name> (landscape).mp4         (landscape video)
#   The episode number is pulled from the file name (e.g. "Ep 29", "#29",
#   "029-agentic-thinking") and zero-padded to three digits. The show
#   name, episode-number token, Restream date stamps (Jul-14-2026), and
#   a trailing "restream" marker are stripped from the episode name.
#   Moved to D:\<current year> AT  (e.g. D:\2026 AT)
#
# Supported extensions: .m4a, .mp4, .mkv
#
# Landscape is detected from the video's frame width/height properties.
# Duplicate-download markers like " (1)" are stripped from the name.
# Files already renamed (starting with "ep." or "NNN-") are just moved,
# so the script is safe to run repeatedly.

$ErrorActionPreference = 'Stop'

$desktop = [Environment]::GetFolderPath('Desktop')
$year = (Get-Date).Year
$emDestination = "D:\$year"
$atDestination = "D:\$year AT"
Write-Host "Scanning $desktop" -ForegroundColor Cyan
Write-Host "Explicit Measures destination: $emDestination" -ForegroundColor Cyan
Write-Host "Agentic Thinking destination:  $atDestination" -ForegroundColor Cyan

foreach ($dest in $emDestination, $atDestination) {
    if (-not (Test-Path $dest)) {
        New-Item -ItemType Directory -Path $dest | Out-Null
        Write-Host "Created $dest" -ForegroundColor Cyan
    }
}

$shell = New-Object -ComObject Shell.Application
$folder = $shell.Namespace($desktop)

function Get-VideoOrientation {
    param([string]$FileName)
    $item = $folder.ParseName($FileName)
    if (-not $item) { return $null }
    $width  = $item.ExtendedProperty('System.Video.FrameWidth')
    $height = $item.ExtendedProperty('System.Video.FrameHeight')
    if (-not $width -or -not $height) { return $null }
    if ([int]$width -gt [int]$height) { return 'landscape' } else { return 'portrait' }
}

# Moves a file to its destination folder, streaming the copy in chunks so a
# progress bar can show transfer status. The source is deleted only after the
# copy completes successfully.
function Move-FileWithProgress {
    param(
        [string]$SourcePath,
        [string]$TargetPath
    )
    $fileName = Split-Path $TargetPath -Leaf
    $destFolder = Split-Path $TargetPath -Parent
    $source = [IO.File]::OpenRead($SourcePath)
    try {
        $target = [IO.File]::Create($TargetPath)
        try {
            $buffer = New-Object byte[] (4MB)
            $totalBytes = $source.Length
            $copiedBytes = 0
            while (($read = $source.Read($buffer, 0, $buffer.Length)) -gt 0) {
                $target.Write($buffer, 0, $read)
                $copiedBytes += $read
                $percent = if ($totalBytes) { [int](($copiedBytes / $totalBytes) * 100) } else { 100 }
                Write-Progress -Activity "Moving to $destFolder" -Status "$fileName ($percent%)" -PercentComplete $percent
            }
        } finally {
            $target.Dispose()
        }
    } catch {
        # Clean up a partial copy so a re-run doesn't see a corrupt target
        if (Test-Path $TargetPath) { Remove-Item -LiteralPath $TargetPath -Force }
        throw
    } finally {
        $source.Dispose()
    }
    Remove-Item -LiteralPath $SourcePath -Force
    Write-Progress -Activity "Moving to $destFolder" -Completed
}

$moved = @()
$skipped = @()
$problems = @()

$files = Get-ChildItem -Path $desktop -File |
    Where-Object { $_.Extension -in '.m4a', '.mp4', '.mkv' }

foreach ($file in $files) {
    $newName = $null
    $sourcePath = $file.FullName
    $destination = $null

    if ($file.BaseName -match '(?i)agentic[\s_-]*thinking' -or $file.BaseName -match '^\d{3}-') {
        # ----- Agentic Thinking -----
        $destination = $atDestination

        if ($file.Name -match '^\d{3}-') {
            # Already renamed (e.g. by a previous run) - just move it
            $newName = $file.Name
        }
        else {
            # Strip export junk first so it can't confuse number extraction:
            # duplicate markers " (1)", Restream date stamps like "Jul-14-2026",
            # and a trailing "restream" marker.
            $cleanBase = $file.BaseName -replace '\s*\(\d+\)\s*$', ''
            $cleanBase = $cleanBase -replace '(?i)[\s_-]*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\s_-]*\d{1,2}[\s_-]*\d{4}', ''
            $cleanBase = $cleanBase -replace '(?i)[\s_-]*restream\s*$', ''

            # Pull the episode number: "Ep 29", "ep.29", "#29", a number next to
            # the show name ("029-agentic-thinking" or "agentic thinking 29"),
            # or a bare number as a fallback.
            $epNum = $null
            if ($cleanBase -match '(?i)(?:ep(?:isode)?\s*\.?\s*#?\s*|#\s*)(\d+)') {
                $epNum = $Matches[1]
            }
            elseif ($cleanBase -match '(?i)(\d+)[\s_-]*agentic[\s_-]*thinking') {
                $epNum = $Matches[1]
            }
            elseif ($cleanBase -match '(?i)agentic[\s_-]*thinking[\s_-]*(\d+)') {
                $epNum = $Matches[1]
            }
            elseif ($cleanBase -match '(?<!\d)(\d{1,3})(?!\d)') {
                $epNum = $Matches[1]
            }
            if (-not $epNum) {
                $skipped += "$($file.Name) (Agentic Thinking file but no episode number found)"
                continue
            }
            $epNum = '{0:D3}' -f [int]$epNum

            # Build the episode name: strip the show name with any attached
            # episode number, plus other episode-number tokens, then trim
            # leftover separators.
            $cleanBase = $cleanBase -replace '(?i)[\s_-]*\d*[\s_-]*agentic[\s_-]*thinking[\s_-]*\d*', ''
            $cleanBase = $cleanBase -replace '(?i)(?:ep(?:isode)?\s*\.?\s*#?\s*|#\s*)\d+', ''
            $cleanBase = $cleanBase -replace '\s{2,}', ' ' -replace '-{2,}', '-' -replace '_{2,}', '_'
            $cleanBase = $cleanBase.Trim(' ', '-', '_', ':', '.', '|')
            if (-not $cleanBase) {
                $skipped += "$($file.Name) (no episode name left after cleaning)"
                continue
            }

            $suffix = ''
            if ($file.Extension -in '.mp4', '.mkv') {
                $orientation = Get-VideoOrientation -FileName $file.Name
                if ($null -eq $orientation) {
                    $problems += "$($file.Name) (could not read video dimensions - left unrenamed)"
                    continue
                }
                if ($orientation -eq 'landscape') { $suffix = ' (landscape)' }
            }

            $newName = "$epNum-$cleanBase$suffix$($file.Extension)"
        }
    }
    elseif ($file.BaseName -match 'ep\.(\d+)') {
        # ----- Explicit Measures -----
        $destination = $emDestination
        $epNum = $Matches[1]

        if ($file.Name -match '^ep\.\d+') {
            # Already renamed (e.g. by a previous run) - just move it
            $newName = $file.Name
        }
        else {
            # Strip duplicate-download markers like " (1)" from the end of the base name
            $cleanBase = $file.BaseName -replace '\s*\(\d+\)\s*$', ''

            $suffix = ''
            if ($file.Extension -in '.mp4', '.mkv') {
                $orientation = Get-VideoOrientation -FileName $file.Name
                if ($null -eq $orientation) {
                    $problems += "$($file.Name) (could not read video dimensions - left unrenamed)"
                    continue
                }
                if ($orientation -eq 'landscape') { $suffix = ' (landscape)' }
            }

            $newName = "ep.$epNum - $cleanBase$suffix$($file.Extension)"
        }
    }
    else {
        $skipped += "$($file.Name) (no episode number or show name in file name)"
        continue
    }

    if ($newName -ne $file.Name) {
        if (Test-Path (Join-Path $desktop $newName)) {
            $problems += "$($file.Name) (target already exists: $newName)"
            continue
        }
        Rename-Item -LiteralPath $file.FullName -NewName $newName
        $sourcePath = Join-Path $desktop $newName
    }

    $targetPath = Join-Path $destination $newName
    if (Test-Path $targetPath) {
        $problems += "$newName (already exists in $destination - left on Desktop)"
        continue
    }

    try {
        Move-FileWithProgress -SourcePath $sourcePath -TargetPath $targetPath
        $moved += "$($file.Name)`n    -> $targetPath"
    } catch {
        $problems += "$newName (move failed: $($_.Exception.Message))"
    }
}

Write-Host ''
if ($moved.Count) {
    Write-Host "Moved $($moved.Count) file(s):" -ForegroundColor Green
    $moved | ForEach-Object { Write-Host "  $_" }
}
if ($skipped.Count) {
    Write-Host "Skipped:" -ForegroundColor Yellow
    $skipped | ForEach-Object { Write-Host "  $_" }
}
if ($problems.Count) {
    Write-Host "Problems:" -ForegroundColor Red
    $problems | ForEach-Object { Write-Host "  $_" }
}
if (-not $moved.Count -and -not $skipped.Count -and -not $problems.Count) {
    Write-Host 'No episode files found on the Desktop.' -ForegroundColor Yellow
}

Write-Host ''
Read-Host 'Press Enter to close'
