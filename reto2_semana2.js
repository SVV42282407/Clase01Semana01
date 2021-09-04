
const evaluarNumero = () =>{
    const numero = prompt("Introduzca un número:");

    if (numero < 0){
        alert(-1);
    } else if (numero == 0){
        alert(0);
    } else if (numero > 0){
        alert(1);
    }
    
    evaluarNumero();
}

evaluarNumero();