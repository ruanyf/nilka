const find = require('./find.js');
const resize = require('./resize.js');
const convert = require('./convert.js');

function handler(pathArr) {
  const fileArr = find(pathArr);
  const fileInfoArr = resize(fileArr);
  convert(fileInfoArr);
}

module.exports = handler;
