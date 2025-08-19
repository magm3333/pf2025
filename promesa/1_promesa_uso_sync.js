import fetch from 'node-fetch';


const fetchUserData=(cantidad=1)=>{
    return fetch(`https://randomuser.me/api/?results=${cantidad}`)
    .then( respuesta=>respuesta.json())
    .then( datosJson=>{return datosJson})
    .catch(e => {return err})
}


console.log("Pidiendo Datos ...")
const resultado=await fetchUserData(2);
console.log("Datos -------------------------------------------------------------------")
console.log(JSON.stringify(resultado,null,2))