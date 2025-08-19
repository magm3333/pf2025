const repl=require('repl');
const net = require('net');
net.createServer((socket)=>{
	repl.start('via socket>', socket);
}).listen(1234);

