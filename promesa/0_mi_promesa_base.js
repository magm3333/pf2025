
// Definición
const miPromesa= new Promise((resolve,reject)=>{
    // Acá iría el código asíncrono, por ejemplo: resultado=algunaFuncion(...)
    // y si va todo bien
    // resolve(resultado)

    // Si ocurre algún tipo de error
    // error=descripción del error
    // reject(error)
});


//Consumo
miPromesa.then(resultado=>{
    // Manejo resultado correcto
}).catch(err=>{
    // Manejo caso excepcional
});


const fetchUserData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const datos={username: "Magm"};
            if (Math.random()>.3) {
                // Todo OK
                resolve(datos);
            } else {
                // Error
                reject("Error!")
            }
        },2000);
    });
};

fetchUserData().then(
    resultado=>{console.log("Resultado ",resultado)}
).catch(
    err=>{console.error("Error ",err)}
);