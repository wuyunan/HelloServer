"use strict";
// 引用 app 和数据库
const app = require("../server");
const ds = app.dataSources.mongoDs;

// 重置数据库，只能在开发和测试环境被执行
// if (app.get('env') === Enums.ENV.DEVELOPMENT || app.get('env') === Enums.ENV.TESTING) {
//   ds.automigrate(function(error) {
//     if (error) throw error;
//     console.log('数据库已被重置！');

//     // 断开链接，退出进程
//     ds.disconnect();
//     process.exit();
//   });
// } else {
//   console.log('重置数据库，只能在开发和测试环境被执行!');

//   // 断开链接，退出进程
//   ds.disconnect();
//   process.exit();
// }
