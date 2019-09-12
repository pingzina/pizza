//低耦合，把数据库链接和数据查询放到这里
const mysql = require("mysql");

let connection = mysql.createConnection({
  host: 'localhost', //数据库的地址
  user: 'root', //用户名字
  password: "123456", //密码
  database: 'user' //数据库的名字
})

//查看连接状态
connection.connect((err) => {
  if (err) {
    console.log("error connection:" + err.stack);
    return
  }
  //如果连接正确的时候执行
  console.log('数据库连接成功' + connection.threadId)
})

// `SELECT * FROM user WHERE USERNAME='pingzi';`
//定义错误信息
// 状态码：
module.exports = {
  select(sql, password) {
    //执行查询语句
    return new Promise((resolve, reject) => {
        connection.query(sql, password, (err, res) => {
          if (err) {
            resolve({
              resultCode: -2,
              res: {},
              error: err,
            })
          } else {
            if (res.length == 0) {
              resolve({
                resultCode: -1,
                res: {},
                errorMessage: '账号不存在'
              })
            } else if ((res.length == 1) && (res[0].password == password)) {
              resolve({
                resultCode: 0,
                res: res[0],
                errorMessage: '登录成功'
              })
            } else if ((res.length == 1) && (res[0].password != password)){
              resolve({
                resultCode: -1,
                res: {},
                errorMessage: '密码错误，请重新输入'
              })
            }
          }
        })
      })
      .then(res => {
        console.log(res);
        return res;
        // success
      })
      .catch(err => {
        console.log(err);
        // err
        return err
      })
  }
}
