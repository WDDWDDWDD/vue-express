const express = require('express')
var bodyParser = require('body-parser'); //解析,用req.body获取post参数
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var url = require("url"); //解析url为对象
var querystring = require('querystring'); //解析如‘a=1&b=2’为对象

var mongoose = require('mongoose'); //导入mongoose模块
mongoose.connect('mongodb://localhost:27017/myDB') //连接本地数据库

var Users = require('./models/users'); //导入模型数据模块

// var router = express.Router();

app.get('/', (req, res) => res.json('Hello World!'))

app.get('/login', (req, res) =>{
	Users.find({'userName': req.query.userName,'passWord':req.query.passWord}).exec((err,users)=>{
		if(users.length){
			return res.json({
                status: 1,
                users: users,
                msg: '登录成功！'
            }); // output array of users found
		}else{
			return res.json({
                status: -1,
                users: users,
                msg: '您还没有注册！'
            }); // output array of users found
		}
	})
})

app.post('/register', (req, res) => {
    Users.find({ 'userName': req.body.userName }).exec(function(err, users) {
        if (users.length) {
            return res.json({
                status: -1,
                users: users,
                msg: '您已经注册过！'
            }); // output array of users found
        }else{
        	var user = new Users({
		        userName: req.body.userName,
		        passWord: req.body.passWord
		    })
		    user.save(err => {
		        console.log(err)
		        if (!err) {
		            res.json({
		                status: 1,
		                msg: '注册成功！'
		            }); // output array of users found
		        }
		    });
        }
    });
    // Users.fetch(function(err, users) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     res.json({ title: '用户列表', users: users }) //这里也可以json的格式直接返回数据res.json({data: users});
    // })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))