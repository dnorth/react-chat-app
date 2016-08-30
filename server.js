var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.API_PORT || 3001));

app.get('/api/something', function(req, res){
	console.log("Something happened")
	res.json([]);
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
		console.log("message received: ", msg)
	});
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

http.listen(app.get('port'), () => {
	console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
