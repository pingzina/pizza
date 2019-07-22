const express=require("express");
const app=express();
const mysql=require("mysql");
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     // if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
//     // else  next();
// });

app.get("/",(req,res)=>{
    console.log(req.query);
    // res.send("this is home");
    res.send({
        code:200
    })
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.end({
        code:200,
        body:req.body
    })
})

//配置连接本地数据库
let connection=mysql.createConnection({
    host:'localhost',//数据库的地址
    user:'root',//用户名字
    password:"123456",//密码
    database:'user'//数据库的名字
})
//查看连接状态
connection.connect((err)=>{
    if(err){
        console.log("error connection:"+err.stack);
        return
    }
    //如果连接正确的时候执行
    console.log('connected as id'+connection.threadId)
})
//添加用户信息语句
// INSERT INTO user(USERNAME,PASSWORD) VALUES('LIZHI','334455');

//删除用户数据
// DELETE FROM user WHERE USERNAME='LIZHI';

//查询用户信息
// SELECT * FROM user WHERE USERNAME="zhangsan";

//执行查询语句
connection.query(`SELECT * FROM user WHERE USERNAME='pingzi';`,(err,res,fieid)=>{
    if(err) {
        throw err
    }else{
        console.log(res);
        console.log(res.length);
    }
})

const port=2000;
app.listen(port,err=>{
    if(err){
        console.log(err);
    }else{
        console.log('your application is running:'+`http://localhost:${port}`)
    }
})