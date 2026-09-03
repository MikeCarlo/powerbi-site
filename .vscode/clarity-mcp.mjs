import { existsSync, readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const settingsPath = fileURLToPath(new URL('./local.settings.json', import.meta.url));

if (!existsSync(settingsPath)) {
  console.error(`Missing Clarity settings file: ${settingsPath}`);
  process.exit(1);
}

let settings;
try {
  settings = JSON.parse(readFileSync(settingsPath, 'utf8'));
} catch (error) {
  console.error(`Unable to read Clarity settings: ${error.message}`);
  process.exit(1);
}

const token = settings.clarityApiToken;
if (typeof token !== 'string' || token.trim() === '') {
  console.error('Clarity settings must include a non-empty "clarityApiToken" value.');
  process.exit(1);
}

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const server = spawn(command, ['-y', '@microsoft/clarity-mcp-server', `--clarity_api_token=${token}`], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

server.on('exit', (code) => process.exit(code ?? 1));
server.on('error', (error) => {
  console.error(`Unable to start the Clarity MCP server: ${error.message}`);
  process.exit(1);
});