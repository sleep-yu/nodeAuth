# 从0-1利用hapi框架搭建node项目，实现登陆注册功能
- npm init -y
- npm i @hapi/hapi --registry=https://registry.npmmirror.com
- npm i -D typescript tsx @types/node
- npm i mongoose
- npm i -D @types/mongoose
- npm i dotenv
- npx tsc --init
- 编辑tsconfig.json文件

## 安装的库
typescript:
- TypeScript编译器
- 把.ts文件编译为.js文件
- 提供类型检查

tsx:
- 直接运行.ts文件，不需要先编译
- 不生成.js文件
- 启动速度非常快
  
@types/node:
- Node.js的类型定义文件
- 让TypeScript认识process、console等Node内置对象
- 提供类型提示和检查

dotenv:
- 读取环境变量

## 创建基础文件 
  - src/routers 
  - src/controllers
  - src/services
  - src/utils
  - src/config
  - src/app.ts: 写初始化代码

## 连接数据库
  - src/config/database.ts

## 加密
npm i bcrypt
npm i -D @types/bcrypt

## 部署 docker + github actions
1.根目录创建Dockerfile 设置打镜像包要执行的命令，用的node版本
2.创建.dockerignore文件
3.创建docker-compose.yml文件 设置数据库连接地址，端口号等
4.创建.github/workflows文件夹，然后此文件夹下创建deploy.yml文件：github actions工作流文件
5.在服务器中安装docker,安装完成后：docker --version可以看是否安装成功
6.在服务器上生成ssh密钥：ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions
然后按两次回车
7.将公钥添加到授权列表：cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

8.cat ~/.ssh/github_actions，复制ssh私钥内容

9.在github仓库页面，进入Settings->Secret and variables -> Actions -> New repository secret，添加下面的secret
  - Name: SSH_PRIVATE_KEY Value: 私钥内容
  - Name: SERVER_HOST value:8.129.26.149(服务器ip)
  - Name: SERVER_USER value: root

10.服务器安装git:yum install git -y
11.cd /www/wwwroot && git clone https://github.com/sleep-yu/nodeAuth.git

12.配置反向代理：宝塔面板->网站->反向代理，安装nginx
13.aliyun放行端口号5000+数据库端口号27017 - 防火墙 添加规则

## jwt生成token
npm install jsonwebtoken
npm install -D @types/jsonwebtoken