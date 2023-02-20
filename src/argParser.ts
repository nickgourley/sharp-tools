import { ArgumentParser, Namespace } from 'argparse';
 
const parser = new ArgumentParser({
  description: 'Sharp Tools, a CLI tool for image processing.',
});
 
const parseArgs = () => {
    parser.add_argument('-f', '--file', { help: 'Source file/directory.' });
    parser.add_argument('-o', '--output', { help: 'Destination directory' });
    parser.add_argument('-d', '--dir', { help: 'Process all files in directory' });
    parser.add_argument('-e', '--ext', { help: 'Output format' });
    parser.add_argument('-w', '--width', { help: 'Output width' });
    // parser.add_argument('-h', '--height', { help: 'Output height' });
    parser.add_argument('-q', '--quality', { help: 'Output quality' });
    parser.add_argument('-p', '--progressive', { help: 'Output progressive' });
    parser.add_argument('-t', '--tile', { help: 'Output tile' });
    parser.add_argument('-c', '--compression', { help: 'Output compression' });
    parser.add_argument('-b', '--blur', { help: 'Output blur' });
    parser.add_argument('-r', '--rotate', { help: 'Output rotate' });
    parser.add_argument('-v', '--version', { help: 'Output version' });
    return parser.parse_args();
}

const validateArgs = (args: Namespace) => {
  console.log({...args});
    if (!args.file) {
        console.log('Please provide a source file or directory.');
        process.exit(1);
    }
    if (!args.output) {
        console.log('Please provide a destination directory.');
        process.exit(1);
    }
    if (!args.ext) {
        console.log('Please provide an output format.');
        process.exit(1);
    }
    // if (!args.width) {
    //     console.log('Please provide an output width.');
    //     process.exit(1);
    // }
    // if (!args.height) {
    //     console.log('Please provide an output height.');
    //     process.exit(1);
    // }
    // if (!args.quality) {
    //     console.log('Please provide an output quality.');
    //     process.exit(1);
    // }
    // if (!args.progressive) {
    //     console.log('Please provide an output progressive.');
    //     process.exit(1);
    // }
    // if (!args.tile) {
    //     console.log('Please provide an output tile.');
    //     process.exit(1);
    // }
    // if (!args.compression) {
    //     console.log('Please provide an output compression.');
    //     process.exit(1);
    // }
    // if (!args.blur) {
    //     console.log('Please provide an output blur.');
    //     process.exit(1);
    // }
    // if (!args.rotate) {
    //     console.log('Please provide an output rotate.');
    //     process.exit(1);
    // }
    // if (!args.output) {
    //     console.log('Please provide an output file.');
    //     process.exit(1);
    // }
    // if (!args.version) {
    //     console.log('Please provide an output version.');
    //     process.exit(1);
    // }
}

export {parseArgs, validateArgs}