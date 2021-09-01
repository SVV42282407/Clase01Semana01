//Cálculo de IMC: IMC = peso(kg)/altura^2 (m2)

function imc(peso, altura){
    imc = peso / (altura^2);
    return imc;
}

let peso = 65; //kg
let altura = 1.78; //m

console.log(imc(peso,altura));  //kg/m2
//console.log(typeof imc(peso,altura)); //number