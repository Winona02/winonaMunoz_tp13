
let operacionesBancarias = [1000,-500,2000,-1200,5000];

function calculateBalances(operacionesBancarias) {

    let movimientos = {
        depositos : 0,
        retiros : 0,
        saldoActual : 0,
    }

    for (let i = 0; i < operacionesBancarias.length; i++) {
        let operacion = operacionesBancarias[i];

        if (operacion > 0) {
            movimientos.depositos += operacion;
        } else {
            movimientos.retiros += operacion;
        }
    }

    movimientos.saldoActual = movimientos.depositos + movimientos.retiros;
    return movimientos;
}

console.log(calculateBalances(operacionesBancarias));


function bankBalance(nombre, apellido, operacionesBancarias) {
    let movimientos = calculateBalances(operacionesBancarias);

    return `Estimadx ${nombre} ${apellido}:
El monto total de los depósitos es de: $${movimientos.depositos}.
El monto total de los retiros es de: $${movimientos.retiros}.
Por lo tanto, su saldo actual en la cuenta es de: $${movimientos.saldoActual}.`;
}

console.log(bankBalance("Winona", "Muñoz", operacionesBancarias));


module.exports = bankBalance;