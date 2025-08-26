const repl=require('repl');
const net=require('net');

const server=net.createServer((socket)=>{
    repl.start('via socket>',socket);
});
const puerto=1234;
console.log(`Escuchando en ${puerto}`);
server.listen(puerto);