const miPromesa = new Promise((resolve, reject) => {
// Acá va el código asíncrono
// si todo va bien
// resolve(resultado);

// Si ocurre algún error o excepción
// reject(error);
});

miPromesa.then(resultado => {
    // Manejar el resultado
}).catch(err=>{
    // Manejar el error
});

const fetchUserData=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const datos={username: "Magm"};
            if (Math.random()>.3) {
                // Todo OK
                resolve(datos);
            } else {
                // Error
                reject("ERROR!!");
            }
        });
    },2000);
};


fetchUserData()
    .then(resultado=>{console.log("Resultado:", resultado)})
    .catch(err=>{console.error("Error:",err)});

console.log("Fin!")