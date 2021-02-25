const path = require('path');
const {generateData} = require('trx-util');

module.exports = function (postsPath = 'source/_posts', ymlPath = '_config.yml', targetPath = 'src/db') {
    const curPath = process.cwd();
    const pPath = path.join(curPath,postsPath);
    const yPath = path.join(curPath,ymlPath);
    const tPath = path.join(curPath,targetPath);
    console.log('defaultPath:source/_posts current postsPath ', pPath);
    console.log('defaultPath:_config.yml current configPath ', yPath);
    console.log('defaultPath:src/db current targetPath ', tPath);
    generateData(pPath, yPath, tPath);
}