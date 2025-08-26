const fs=require('fs');
let contenido=fs.readFileSync('/etc/hosts');
console.log(contenido.toString());
console.log('otra cosa');

