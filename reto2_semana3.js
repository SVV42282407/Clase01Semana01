const pi = 3.14159265;

function calcCircumfrence(radio){
    return console.log("La circunferencia es " + 2*pi*radio);
}

function calcArea(radio){
    return console.log("El área es " + pi*radio*radio);
}

function calculateDogAge(age, tax=7){
    return console.log("¡Tu perrito tiene " + age*tax + " años en años de perro!");
}

calculateDogAge(3);
calculateDogAge(5);
calculateDogAge(7);

calculateDogAge(7,5);
