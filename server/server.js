const express = require('express')
const bodyParser = require('body-parser')   //解析post请求体转换成json  req.body
const cookieParser = require('cookie-parser')

const app = express()

//配置socket.io
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function (socket) {
	console.log('user login')
	socket.on('sendmsg', function (data) {
		console.log(data)
		io.emit('recvmsg',data)

	})
})

const userRouter = require('./user')


//新建app

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

//express没加socket
/*app.listen(9093,function() {
	console.log('node app start at port 9093');
})*/

//加socket
server.listen(9093, function () {
	console.log('Node app start at port 9093')
})

