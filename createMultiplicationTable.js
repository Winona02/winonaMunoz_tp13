function createMultiplicationTable() {
    //let i sería el multiplicando (2x4, 2 es el multiplicando y 4 el multiplicador)
    for (let i = 1; i <= 10; i++) {
        console.log(`----------------------------`);
        console.log(`Tabla de multiplicar x${i}`);
        console.log(`----------------------------`);
        
        //let j sería el multiplicador (2x4, 2 es el multiplicando y 4 el multiplicador)
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

createMultiplicationTable();