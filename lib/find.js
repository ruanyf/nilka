const glob = require('glob');
const path = require('path');

const CONFIG = require('../config/index.js');

function find(pathArr) {
  const patternArr = [];

  pathArr.forEach(p => {
    CONFIG.PATTERNS.forEach(c => {
      patternArr.push(path.resolve(p, c));
    })
  });

  const pattern = '{' + patternArr.join(',') + '}';

  const fileArr = glob.sync(pattern, { nocase: true });
  return fileArr;
}

module.exports = find;
