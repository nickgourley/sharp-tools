
const { doesNotMatch } = require('assert');
const {test, expect} = require('@jest/globals');
const {parseArgs, validateArgs} = require('../dist/argParser.js');

test('Arguments are defined.', () => {
    process.argv = ['node', 'index.js', '-f', '../nickgourley-node/src/static/galaxy.jpg', '-o', './tmp', '-e', 'png', '-s', '480'];
    const args = parseArgs();
    expect(args).toBeDefined();
    validateArgs(args);
    expect(true).toBeDefined();
});

// test('Arguments are not defined.', () => {
//     process.argv = ['node', 'index.js'];
//     const args = parseArgs();
//     expect(args).not.toBeDefined();
//     validateArgs(args);
//     expect(true).not.toBeDefined();
// });
