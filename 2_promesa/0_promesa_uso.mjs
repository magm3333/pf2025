import fetch from 'node-fetch'; 

let resultado={};
const cantidad=1;
let err=false;

console.log("Pidiendo datos...");
fetch(`https://randomuser.me/api/?results=${cantidad}`)
        .then(respuesta=>respuesta.json())
        .then(datosJson => {
            resultado=datosJson;
//            console.log("Datos---------------------------------------------------------------");
//            console.log(JSON.stringify(resultado,null,2));
        })
        .catch(e => {err=e});
console.log("Datos---------------------------------------------------------------");
console.log(JSON.stringify(resultado,null,2))