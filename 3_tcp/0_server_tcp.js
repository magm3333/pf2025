const net = require('net');

const puerto= process.env.PUERTO || 7777; 

const cliName=(socket) => {
    return `${socket.remoteAddress}:${socket.remotePort}`;
}

const serverTCP=net.createServer(
    socketCliente => {
        console.log(`Se conectó el cliente ${cliName(socketCliente)}`);
        socketCliente.write("Hola Cliente!\n");

        socketCliente.on('data', datos=>{
            console.log(`${cliName(socketCliente)}: ${datos}`);
            socketCliente.write("Echo: "+datos);
        })
    }
)

serverTCP.listen(puerto);

console.log(`Server escuchando en puerto ${puerto}`);

/*
while(true) {
    Socket soc=ServerSocket.accept(); <---  cloqueante
    // atención al cliente
    // ------->
    // <-------
    Atencion atencion=new Atencion(soc); <--- tiene que ser un hilo
    atencion.start();
}
*/