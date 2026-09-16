# Organizes podcast episode files on the Desktop for two shows.
#
# Explicit Measures (file name contains "ep.544", is already
# ep.{NNN}-emp-{YYYY-MM-DD}, or is a drafted EMP-{NNN} name):
#   ep.544-emp-2026-09-15.m4a
#   ep.544-emp-2026-09-15.mp4              (portrait video - no suffix)
#   ep.544-emp-2026-09-15-landscape.mp4    (landscape video)
#   Moved to D:\<current year>  (e.g. D:\2026)
#
# Agentic Thinking (file name contains "agentic thinking", spaces,
# hyphens, or underscores between the words all match; already-renamed
# NNN-slug names; drafted AG-{NNN} names; or already-short
# ep.{NNN}-ag-{YYYY-MM-DD} names):
#   ep.029-ag-2026-09-11.m4a
#   ep.029-ag-2026-09-11.mp4               (portrait video - no suffix)
#   ep.029-ag-2026-09-11-landscape.mp4     (landscape video)
#   The episode number is pulled from the file name (e.g. "Ep 29", "#29",
#   "029-agentic-thinking", "AG-029", "ep.029-ag-...") and zero-padded
#   to three digits.
#   Moved to D:\<current year> AT  (e.g. D:\2026 AT)
#
# {YYYY-MM-DD} is the episode/air/Restream date. Restream stamps like
# Sep-15-2026 are parsed from the file name when present. If the name
# has no date (old NNN-slug / drafted EMP-NNN / AG-NNN), LastWriteTime
# is used.
#
# Supported extensions: .m4a, .mp4, .mkv
#
# Landscape is detected from the video's frame width/height properties
# and from an existing "(landscape)" or "-landscape" token in the name.
# Duplicate-download markers like " (1)" are stripped from the name.
# Long Restream stems, older organized names (ep.544 - ..., 029-slug),
# and drafted EMP-{NNN} / AG-{NNN} names are migrated to the short form.
# Files already on the ep.{NNN}-{emp|ag}-{YYYY-MM-DD}[-landscape] pattern
# are just moved, so the script is safe to run repeatedly.
#
# The taskbar shortcut launches this file with powershell.exe -File and no
# extra arguments. Keep that invocation working: same path, no required params.

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

function Get-BaseNameWithoutDuplicateMarker {
    param([string]$BaseName)
    return ($BaseName -replace '\s*\(\d+\)\s*$', '')
}

# Episode id only: strip duplicate markers and landscape tokens so
# ep.563-emp-2026-09-15-landscape / AG-039 (1) / 029-slug (landscape)
# share one core.
function Get-NameCore {
    param([string]$BaseName)
    $n = Get-BaseNameWithoutDuplicateMarker $BaseName
    $n = $n -replace '\s*\(landscape\)\s*$', ''
    $n = $n -replace '-landscape$', ''
    return $n
}

function Test-HasLandscapeToken {
    param([string]$BaseName)
    $stripped = Get-BaseNameWithoutDuplicateMarker $BaseName
    return [bool]($stripped -match '(?:\s*\(landscape\)|-landscape)$')
}

function Get-ShowTag {
    param([string]$ShowKind)
    if ($ShowKind -eq 'AG') { return 'ag' }
    return 'emp'
}

function Test-IsCanonicalShortName {
    param(
        [string]$Name,
        [string]$ShowTag
    )
    return [bool]($Name -match "^ep\.\d{3}-$ShowTag-\d{4}-\d{2}-\d{2}(?:-landscape)?\.(?:m4a|mp4|mkv)$")
}

function ConvertTo-IsoDate {
    param(
        [int]$Year,
        [int]$Month,
        [int]$Day
    )
    try {
        return (Get-Date -Year $Year -Month $Month -Day $Day).ToString('yyyy-MM-dd')
    } catch {
        return $null
    }
}

function Get-EpisodeDateStamp {
    param(
        [string]$BaseName,
        [System.IO.FileInfo]$File
    )
    $core = Get-NameCore $BaseName

    if ($core -match 'ep\.\d{1,3}-(?:emp|ag)-(\d{4}-\d{2}-\d{2})$') {
        return $Matches[1]
    }

    # Restream stamps: Sep-15-2026, Jul_14_2026, "Sep 15 2026"
    if ($core -match '(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\s_-]+(\d{1,2})[\s_-]+(\d{4})') {
        $monthMap = @{
            jan = 1; feb = 2; mar = 3; apr = 4; may = 5; jun = 6
            jul = 7; aug = 8; sep = 9; oct = 10; nov = 11; dec = 12
        }
        $monthName = $Matches[1].ToLower()
        $iso = ConvertTo-IsoDate -Year ([int]$Matches[3]) -Month ([int]$monthMap[$monthName]) -Day ([int]$Matches[2])
        if ($iso) { return $iso }
    }

    if ($core -match '(?<!\d)(\d{4}-\d{2}-\d{2})(?!\d)') {
        return $Matches[1]
    }

    if ($File) {
        return $File.LastWriteTime.ToString('yyyy-MM-dd')
    }
    return $null
}

function Get-ExplicitMeasuresEpisodeNumber {
    param([string]$BaseName)
    $core = Get-NameCore $BaseName
    if ($core -match '^ep\.(\d{1,3})-emp-') {
        return $Matches[1]
    }
    if ($core -match '^EMP-(\d{1,3})$') {
        return $Matches[1]
    }
    if ($core -match 'ep\.(\d+)') {
        return $Matches[1]
    }
    return $null
}

function Get-AgenticThinkingEpisodeNumber {
    param([string]$BaseName)
    $core = Get-NameCore $BaseName
    if ($core -match '^ep\.(\d{1,3})-ag-') {
        return $Matches[1]
    }
    if ($core -match '^AG-(\d{1,3})$') {
        return $Matches[1]
    }
    if ($core -match '^(\d{3})-') {
        return $Matches[1]
    }

    # Strip export junk first so it can't confuse number extraction:
    # Restream date stamps like "Jul-14-2026" and a trailing "restream"
    # marker. Landscape tokens are already gone via Get-NameCore.
    $cleanBase = $core -replace '[\s_-]*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\s_-]*\d{1,2}[\s_-]*\d{4}', ''
    $cleanBase = $cleanBase -replace '[\s_-]*restream\s*$', ''

    # Pull the episode number: "Ep 29", "ep.29", "#29", a number next to
    # the show name ("029-agentic-thinking" or "agentic thinking 29"),
    # or a bare number as a fallback.
    if ($cleanBase -match '(?:ep(?:isode)?\s*\.?\s*#?\s*|#\s*)(\d+)') {
        return $Matches[1]
    }
    if ($cleanBase -match '(\d+)[\s_-]*agentic[\s_-]*thinking') {
        return $Matches[1]
    }
    if ($cleanBase -match 'agentic[\s_-]*thinking[\s_-]*(\d+)') {
        return $Matches[1]
    }
    if ($cleanBase -match '(?<!\d)(\d{1,3})(?!\d)') {
        return $Matches[1]
    }
    return $null
}

function Get-ShowKind {
    param([string]$BaseName)
    $core = Get-NameCore $BaseName

    # AG short form must win before the EMP "ep.NNN" check — both start with ep.
    if (
        $core -match '^ep\.\d{1,3}-ag-\d{4}-\d{2}-\d{2}$' -or
        $core -match '^AG-\d{1,3}$' -or
        $BaseName -match 'agentic[\s_-]*thinking' -or
        $BaseName -match '^\d{3}-'
    ) {
        return 'AG'
    }
    if (
        $core -match '^ep\.\d{1,3}-emp-\d{4}-\d{2}-\d{2}$' -or
        $core -match '^EMP-\d{1,3}$' -or
        $BaseName -match 'ep\.\d+'
    ) {
        return 'EMP'
    }
    return $null
}

function Get-LandscapeSuffix {
    param([System.IO.FileInfo]$File)
    if ($File.Extension -notin '.mp4', '.mkv') {
        return ''
    }
    if (Test-HasLandscapeToken $File.BaseName) {
        return '-landscape'
    }
    $orientation = Get-VideoOrientation -FileName $File.Name
    if ($null -eq $orientation) {
        return $null
    }
    if ($orientation -eq 'landscape') {
        return '-landscape'
    }
    return ''
}

function Get-CanonicalEpisodeFileName {
    param(
        [System.IO.FileInfo]$File,
        [string]$ShowKind,
        [string]$EpisodeNumber
    )
    $epNum = '{0:D3}' -f [int]$EpisodeNumber
    $showTag = Get-ShowTag -ShowKind $ShowKind
    $date = Get-EpisodeDateStamp -BaseName $File.BaseName -File $File
    if (-not $date) {
        return $null
    }

    if (Test-IsCanonicalShortName -Name $File.Name -ShowTag $showTag) {
        $suffix = ''
        if (Test-HasLandscapeToken $File.BaseName) {
            $suffix = '-landscape'
        }
        return "ep.$epNum-$showTag-$date$suffix$($File.Extension)"
    }

    $suffix = Get-LandscapeSuffix -File $File
    if ($null -eq $suffix) {
        return $null
    }
    return "ep.$epNum-$showTag-$date$suffix$($File.Extension)"
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

    $showKind = Get-ShowKind -BaseName $file.BaseName
    if ($showKind -eq 'AG') {
        $destination = $atDestination
        $epNum = Get-AgenticThinkingEpisodeNumber -BaseName $file.BaseName
        if (-not $epNum) {
            $skipped += "$($file.Name) (Agentic Thinking file but no episode number found)"
            continue
        }
        $newName = Get-CanonicalEpisodeFileName -File $file -ShowKind 'AG' -EpisodeNumber $epNum
        if ($null -eq $newName) {
            $problems += "$($file.Name) (could not read video dimensions or episode date - left unrenamed)"
            continue
        }
    }
    elseif ($showKind -eq 'EMP') {
        $destination = $emDestination
        $epNum = Get-ExplicitMeasuresEpisodeNumber -BaseName $file.BaseName
        if (-not $epNum) {
            $skipped += "$($file.Name) (Explicit Measures file but no episode number found)"
            continue
        }
        $newName = Get-CanonicalEpisodeFileName -File $file -ShowKind 'EMP' -EpisodeNumber $epNum
        if ($null -eq $newName) {
            $problems += "$($file.Name) (could not read video dimensions or episode date - left unrenamed)"
            continue
        }
    }
    else {
        $skipped += "$($file.Name) (no episode number or show name in file name)"
        continue
    }

    if ($newName -ne $file.Name) {
        $desktopTarget = Join-Path $desktop $newName
        $sameDesktopFile = [string]::Equals($file.FullName, $desktopTarget, [StringComparison]::OrdinalIgnoreCase)
        if ((Test-Path -LiteralPath $desktopTarget) -and -not $sameDesktopFile) {
            $problems += "$($file.Name) (target already exists: $newName)"
            continue
        }
        if (-not $sameDesktopFile) {
            Rename-Item -LiteralPath $file.FullName -NewName $newName
            $sourcePath = $desktopTarget
        }
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
