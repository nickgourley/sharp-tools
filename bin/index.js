#!/usr/bin/env node

const {processImages} = require('../dist/processImages.js');
const {parseArgs, validateArgs} = require('../dist/argParser.js');

const args = parseArgs();

validateArgs(args);

processImages(args);