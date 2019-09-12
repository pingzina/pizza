const express = require("express");
const app = express();
const bodyParse = require("body-parser");

//引入数据库链接和查询数据
const SqlSelect = require('./sql');

//设置响应状态
const respons = {
  error: {
    errorMessage: "参数错误",
    resultCode: '-1',
  },
  success: {
    errorMessage: "操作成功",
    resultCode: '0',
  }
}

//添加静态模板
// app.use(express.static(''))
//使用中间件
app.use(bodyParse.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.send({
    req: req.query,
    ...respons.error
  })
})

app.all('/login', (req, res) => {
  if (req.method == "GET") {
    res.send({
      ...respons.error
    })
  } else if (req.method == "POST") {
    let user = req.body;
    if (user.mobile && user.password) {
      let login_res= SqlSelect.select(`SELECT * FROM user WHERE MOBILE=${user.mobile}`,user.password);
      login_res.then(data=>{
          console.log(data);
          res.send(data);
      });
    }
  } else {
    res.send(
      respons.error
    );
  }
})
//添加用户信息语句
// INSERT INTO user(USERNAME,PASSWORD) VALUES('LIZHI','334455');

//删除用户数据
// DELETE FROM user WHERE USERNAME='LIZHI';

//查询用户信息
// SELECT * FROM user WHERE USERNAME="zhangsan";
const port = 2000;
app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('your application is running:' + `http://localhost:${port}`)
  }
})
