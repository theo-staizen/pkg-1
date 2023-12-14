import supportsColor from 'supports-color';
import fs from 'fs';

const pkg = fs.readFileSync('./package.json', 'utf-8');

let output = `
Version: ${JSON.parse(pkg).version}
Do we support colors?
Terminal stdout supports color: ${!!supportsColor.stdout}
Terminal stdout supports 256 colors: ${!!supportsColor.stdout.has256}
Terminal stderr supports 16 million colors (truecolor): ${!!supportsColor.stderr.has16m}
`;

fs.writeFileSync('output.log', output, 'utf8');
