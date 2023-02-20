
const { doesNotMatch } = require('assert');
const { default: test } = require('node:test');
const {parseArgs, validateArgs} = require('../dist/argParser.js');

test('Arguments are defined.', () => {
    process.argv = ['node', 'index.js', '-f', '../nickgourley-node/src/static/galaxy.jpg'];
    const args = parseArgs();
    expect(args).toBeDefined();
    validateArgs(args);
    expect(true).toBeDefined();
});

test('Arguments are not defined.', () => {
    process.argv = ['node', 'index.js'];
    const args = parseArgs();
    expect(args).not.toBeDefined();
    validateArgs(args);
    expect(true).not.toBeDefined();
});
