const readLine=require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout 
    }
);

readLine.question('Ingrese ls edad ', dato=>{
    console.log(`Edad ${dato} bla bla b`);
    readLine.close();
})