let a,b=0;
const setA=(v)=>{a=v};
const setB=(v)=>{b=v};
const suma=()=>{return a+b};
const squareA=()=>{return a*a};
module.exports={
    setA:setA,
    setB:setB,
    suma:suma,
    squareA:squareA,
    toString:()=>{return `a=${a} b=${b}`}
}

