const readLine=require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
readLine.question('Ingrese la edad ',dato=>{
    console.log(`
        Edad: ${dato}
        bla bla bla    
    `);
    readLine.close();
});