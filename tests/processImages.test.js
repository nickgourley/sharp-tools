
const { doesNotMatch } = require('assert');
const {test, expect, mock} = require('@jest/globals');
const {processImages} = require('../dist/processImages.js');

// import fs from 'fs';
const path = require('path');

test('Arguments are defined.', async () => {
    await processImages({
        file: path.join(__dirname, 'test-images', 'galaxy.png'),
        output: './tmp',
        ext: 'png,webp,jpg',
        sizes: '480,720,1080,1440,2160',
        dir: path.join(__dirname, './test-images'),
    });
    expect(true).toBeDefined();
});

