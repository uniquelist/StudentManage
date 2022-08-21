//引入mysql包
const mysql=require('mysql')
// 创建连接对象
const conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    port:3306,
    database:'dbtest'
})
//连接
conn.connect()
//操作数据库
let sql='select username,password from user'
conn.query(sql,(err,result)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log(result)
})

//关闭数据库
conn.end()

