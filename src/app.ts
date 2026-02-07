import { Server } from "@hapi/hapi";
import routes from "./routes";
import { connectDB } from "./config/database";

const init = async () => {
  // 先连接数据库
  await connectDB();

  const server = new Server({
    port: 5000,
    host: 'localhost'
  })
  // 注册所有路由
  server.route([...routes]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();