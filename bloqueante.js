const fs=require('fs');
let contenido=fs.readFileSync('/etc/hosts');
console.log(contenido.toString("utf-8"));
console.log('Otra cosa');