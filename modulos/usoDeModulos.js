const miModulo=require('./miModulo');
const miModulo1=require('./modulos/miModulo1');
console.log("Modulo")
miModulo.setV(3);
console.log(miModulo.getVariable());
console.log("Modulo 1")
miModulo1.setA(2);
miModulo1.setB(31);
console.log(miModulo1.toString())
console.log(miModulo1.suma())
console.log(miModulo1.squareA())
