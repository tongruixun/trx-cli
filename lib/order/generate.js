const path = require('path');
const {generateData} = require('trx-util');

const rootPath = path.resolve(__dirname, '../../../../');

module.exports = function (postsPath = 'source/_posts', ymlPath = '_config.yml', targetPath = 'src/db') {
    const pPath = `${rootPath}/${postsPath}`;
    const yPath = `${rootPath}/${ymlPath}`;
    const tPath = `${rootPath}/${targetPath}`;
    console.log('defaultPath:source/_posts current postsPath ', pPath);
    console.log('defaultPath:_config.yml current configPath ', yPath);
    console.log('defaultPath:src/db current targetPath ', tPath);
    generateData(pPath, yPath, tPath);
}