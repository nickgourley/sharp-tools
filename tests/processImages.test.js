
const { doesNotMatch } = require('assert');
const {test, expect} = require('@jest/globals');
const {processImages} = require('../dist/processImages.js');
// import fs from 'fs';

test('Arguments are defined.', () => {
    processImages({
        file: './tests/test-images',
        output: './tmp',
        ext: 'png,webp,jpg',
        sizes: '480,720,1080,1440,2160',
        dir: 1
    });
    expect(true).toBeDefined();
});

