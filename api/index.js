const express = require('express');
const router = express?.Router()  // 创建路由对象

// 编写一个测试接口
router.get('/userList', (req, res) => {
    res.send([
        {
            name: '张三',
            age: 32,
            sex: '男',
            job: '程序员'
        },
        {
            name: '李四',
            age: 62,
            sex: '女',
            job: '视频教程师'
        },
        {
            name: '王五',
            age: 42,
            sex: '男',
            job: '自由职业者'
        }
    ]);
});

module.exports = router;
