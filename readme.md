# 从0-1利用hapi框架搭建node项目，实现登陆注册功能
- npm init -y
- npm i @hapi/hapi --registry=https://registry.npmmirror.com
- npm i -D typescript ts-node-dev @types/node
- npx tsc --init
- 编辑tsconfig.json文件

## 安装的库
typescript:
- TypeScript编译器
- 把.ts文件编译为.js文件
- 提供类型检查

ts-node-dev:
- 专门为typescript设计
- 直接运行.ts文件，不需要先编译
- 整合了 ts-node 和文件监控功能
  
@types/node:
- Node.js的类型定义文件
- 让TypeScript认识process、console等Node内置对象
- 提供类型提示和检查

## 创建基础文件 
  - src/routers 
  - src/controllers
  - src/services
  - src/utils
  - src/config
  - src/app.ts: 写初始化代码

