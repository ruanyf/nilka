#!/usr/bin/env node

const yargs = require('yargs');
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';

const handler = require('../lib/index.js');

const argv = yargs.argv;

if (!argv._ || !argv._.length) {
  argv._ = ['.'];
}

handler(argv._);
