import supportsColor from 'supports-color';
import fs from 'fs';

const pkg = fs.readFileSync('./package.json', 'utf-8');

console.log('Version:', JSON.parse(pkg).version)

let output = 'Do we support colors?\n';
const addMessage = (message) => output += message + '\n';

addMessage('Terminal stdout supports color: ' + !!supportsColor.stdout);
addMessage('Terminal stdout supports 256 colors: ' + !!supportsColor.stdout.has256);
addMessage('Terminal stderr supports 16 million colors (truecolor): ' + !!supportsColor.stderr.has16m);

fs.writeFileSync('output.log', output, 'utf8');
