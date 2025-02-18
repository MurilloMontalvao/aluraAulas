let numeroUm = parseInt(prompt('Insira o primeiro valor'))
let numeroDois = parseInt(prompt('Insira o segundo valor'))
function comparativo(x,y){
    if (x>y) {
        console.log(`${x} é maior que ${y}`);
    } else {
        console.log(`${y} é maior que ${x}`);
    }
}

comparativo(numeroUm, numeroDois);