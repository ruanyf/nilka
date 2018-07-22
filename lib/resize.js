const sizeof = require('image-size');
const CONFIG = require('../config/index.js');

function resize(fileArr) {
  const fileInfoArr = fileArr.map(f => {
    const fileInfo = {};
    fileInfo.path = f;

    const dimensions = sizeof(f);
    const originHeight = dimensions.height;
    const originWidth = dimensions.width;
    const ratio = originHeight / originWidth;

    fileInfo.originHeight = originHeight;
    fileInfo.originWidth = originWidth;
    fileInfo.ratio = ratio;

    let height = originHeight;
    let width = originWidth;

    if (ratio >= 1.3 && width >= 500) {
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
