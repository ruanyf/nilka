const sizeof = require('image-size');
const fs = require('fs');
const CONFIG = require('../config/index.js');

function resize(fileArr) {
  const fileInfoArr = fileArr.map(f => {
    const fileInfo = {};
    fileInfo.path = f;

    const dimensions = sizeof(f);
    const originHeight = dimensions.height;
    const originWidth = dimensions.width;
    const ratio = originHeight / originWidth;

    const statsObj = fs.statSync(f);
    const originSize = statsObj.size;

    fileInfo.originHeight = originHeight;
    fileInfo.originWidth = originWidth;
    fileInfo.ratio = ratio;
    fileInfo.originSize = originSize;

    let height = originHeight;
    let width = originWidth;

    if (ratio >= 0.9 && width >= 500) {
      width = 500;
      height = Math.floor(ratio * width);
    }

    if (width >= CONFIG.WIDTH) {
      width = CONFIG.WIDTH;
      height = Math.floor(ratio * width);
    }

    fileInfo.height = height;
    fileInfo.width = width;

    return fileInfo;
  });

  return fileInfoArr;
}

module.exports = resize;
