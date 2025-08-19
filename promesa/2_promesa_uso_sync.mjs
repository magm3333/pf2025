import fetch from 'node-fetch'; 

const fetchUserData=async (cantidad=1)=>{
    const respuestaHttp= await fetch(`https://randomuser.me/api/?results=${cantidad}`);
    const datosJson= await respuestaHttp.json();
    return datosJson;
}

console.log("Pidiendo datos...");
const resultado= await fetchUserData(3);
console.log("Datos---------------------------------------------------------------");
console.log(JSON.stringify(resultado,null,2))