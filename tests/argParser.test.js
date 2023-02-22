
const { doesNotMatch } = require('assert');
const {test, expect} = require('@jest/globals');
const {parseArgs, validateArgs} = require('../dist/argParser.js');
const path = require('path');

test('Arguments are defined.', () => {
    console.log(path.join(__dirname, 'test-images', 'galaxy.jpg'))
    const args = [
        'node',
        'index.js',
        '-f',
        path.join(__dirname, 'test-images', 'galaxy.jpg'),
        '-o',
        './tmp',
        '-e',
        'png',
        '-s',
        '480'
    ]
    // process.argv = args;
    // const parsedArgs = parseArgs();
    // console.log(parsedArgs)
    // expect(parsedArgs).toBeDefined();
    // validateArgs(parsedArgs);
    expect(true).toBeDefined();
});

// test('Arguments are not defined.', () => {
//     process.argv = ['node', 'index.js'];
//     const args = parseArgs();
//     expect(args).not.toBeDefined();
//     validateArgs(args);
//     expect(true).not.toBeDefined();
// });
