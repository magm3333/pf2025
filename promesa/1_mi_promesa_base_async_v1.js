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



const main = async ()=> {
    try {
        const resultado=await fetchUserData();
        console.log("Resultado ",resultado);
    } catch (err) {
        console.error("Error ", err)
    }
    console.log("Fin!")
}


main();