import supportsColor from 'supports-color';
import fs from 'fs';

let output = '';

const addMessage = (message) => {
    output += message + '\n';
};

if (supportsColor.stdout) {
    addMessage('Terminal stdout supports color');
}

if (supportsColor.stdout.has256) {
    addMessage('Terminal stdout supports 256 colors');
}

if (supportsColor.stderr.has16m) {
    addMessage('Terminal stderr supports 16 million colors (truecolor)');
}

fs.writeFileSync('output.log', output, 'utf8');

