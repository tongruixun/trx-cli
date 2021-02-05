# trx-cli
命令行工具

## 指令
#### 一、使用
在项目中使用trx-cli
##### 一、安装
`npm install trx-cli -S`
##### 二、使用
`trx generate`
#### 二、generate解析meakdown文件，解析ymal文件 

解析目标项目下`source/_posts`中的markdown文件，在 src/db 下 生成 posts.json
解析项目根目录下的 _config.yml文件, 在 src/db 下 生成 config.json

postsPath  默认值  `source/_posts`
ymlPath    默认值  `_config.yml`
targetPath 默认值  `src/db`
```shell
trx generate [postsPath] [ymlPath] [targetPath]
```
