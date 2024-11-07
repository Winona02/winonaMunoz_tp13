//punto 1

function showNumbers(numero) {

    console.log(`--------------------------------------`);
    console.log(`Los 10 números siguientes al ${numero} son: `);
    console.log(`--------------------------------------`);

    for (let i = 0; i <= 10 ; i++) {
        console.log(numero + i);
    }
}
showNumbers(22);

//punto 2

function printEveryThree() {
    
    console.log(`--------------------------------------------------------------`);
    console.log(`Los números entre el 0 y el 57, saltando de tres en tres son: `);
    console.log(`--------------------------------------------------------------`);

    for (let i = 0; i <= 57; i+=3) {
        console.log(i);
    }
}

printEveryThree();

//punto 3

function totalSummation() {
    
    let suma = 0;
    
    for (let i = 0; i <= 100; i++) {
        suma += i
    }

    console.log(`-----------------------------------------------------------`);
    console.log("La suma de todos los números entre el 0 y el 100 es: " + suma);
    console.log(`-----------------------------------------------------------`);
}

totalSummation();

//punto 4

function showToUpperCase(texto) {
    let textoMayuscula = texto.toUpperCase();

    console.log(textoMayuscula);
}
console.log(`--------------------------------------------`);
showToUpperCase("‘Practicando el uso de los ciclos o bucles’.");
console.log(`--------------------------------------------`);

//punto 5

function returnPairs(array) {
    let nuevoArray = [];
    
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] % 2 === 0) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

let numeros = [5,8,10,13,17,20,22];
let nuevoArray = returnPairs(numeros);

console.log(nuevoArray);

module.exports = {
    showNumbers,
    printEveryThree,
    totalSummation,
    showToUpperCase,
    returnPairs
    };
