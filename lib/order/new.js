const path = require('path');
const {generatePost} = require('trx-util');

module.exports = function (title) {
    const curPath = process.cwd();
    const templatePath = path.join(curPath,'template/post.md');
    const targetPath = path.join(curPath,'source/_posts');
    generatePost(templatePath, targetPath, title)
}