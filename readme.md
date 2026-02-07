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
