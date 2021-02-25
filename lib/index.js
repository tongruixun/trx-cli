const program = require('commander');
const generate = require('./order/generate');
const newPost = require('./order/new');

program.version('0.0.1').option('-c, --config <path>\', \'set config path\', \'./deploy.conf');

program
    .command('generate [postsPath] [ymlPath] [targetPath]')
    .alias('g')
    .description('generate a new project data')
    .action(generate);

program
    .command('new <title>')
    .alias('n')
    .description('new post')
    .action(newPost);

program
    .command('init')
    .alias('i')
    .description('build init views')
    .action(init);

program.parse(process.argv);


function init() {
    console.log('this is trx-cli init order');
    console.log(process.cwd())
}

