const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require("./api"); // 引入接口文件

// 解决跨域问题
app.use(cors());
// post传参body体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(8888, () => {
    console.log('server success,本地服务器已经启动在8888端口！');
});
app.use("/nodeApi", api); // 使用接口文件并给一个访问地址
