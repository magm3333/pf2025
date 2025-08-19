const fetchUserData = async () => {
  // simulamos un retardo
  await new Promise(resolve => setTimeout(resolve, 2000));

  const datos = { username: "Magm" };
  if (Math.random() > 0.3) {
    return datos;         // con async, esto equivale a resolve(datos)
  } else {
    throw new Error("ERROR!!");  // con async, esto equivale a reject("ERROR!!")
  }
};




const main = async () => {
  try {
    console.log("Pidiendo datos...");
    const resultado = await fetchUserData();
    console.log("Resultado:", resultado);
  } catch (err) {
    console.error("Error", err);
  }
  console.log("Fin!");
};

main();
