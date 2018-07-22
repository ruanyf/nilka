const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const logger = require('../util/logger.js');
const CONFIG = require('../config/index.js');

function convert(fileInfoArr) {
  fileInfoArr.forEach(f => {
    logger.info(f.path);
    logger.info('origin: ', f.originWidth + ' x ' + f.originHeight);
    // logger.info('resized: ', f.width + ' x ' + f.height);

    const pathObj = path.parse(f.path);
    const outputPath = path.resolve(pathObj.dir, CONFIG.OUTPUT);
    const output = path.resolve(outputPath, pathObj.name + '.jpg');

    if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);

    sharp(f.path)
      .resize(f.width, f.height)
      .jpeg({ quality: CONFIG.QUALITY })
      .toFile(output, (err, info) => {
        if(err) {
          logger.error(err);
          process.exit(1);
        }

        logger.info('output: ', info);
      })
  });
}

module.exports = convert;
