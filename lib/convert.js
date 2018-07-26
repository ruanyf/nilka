const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const logger = require('../util/logger.js');
const CONFIG = require('../config/index.js');
const bytes2kb = require('../util/bytes2kb.js');

let originTotal = 0;
let total = 0;
let count = 0;

function convert(fileInfoArr) {
  fileInfoArr.forEach((f, i) => {
    const pathObj = path.parse(f.path);
    const outputPath = path.resolve(pathObj.dir, CONFIG.OUTPUT);
    const output = path.resolve(outputPath, pathObj.name + '.jpg');

    if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);

    sharp(f.path)
      .resize(f.width, f.height)
      .background('white')
      .flatten()
      .jpeg({ quality: CONFIG.QUALITY })
      .toFile(output, (err, info) => {
        if(err) {
          logger.error(err);
          process.exit(1);
        }

        originTotal += f.originSize;
        total += info.size;
        count += 1;

        logger.info(f.path);
        logger.info(`${f.originWidth}x${f.originHeight} to ${f.width}x${f.height}`);
        logger.info(`${f.originSize} to ${info.size} bytes`);
        logger.info('- - - - - - - - - - - ');

        if (count === fileInfoArr.length) {
          logger.info(`Total: ${bytes2kb(originTotal)}KB to ${bytes2kb(total)}KB`);
        }
      })
  });
  
}

module.exports = convert;
