/*Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
Menor que 18,5	Magreza
18,5 a 24,9	    Normal
25 a 29,9	    Sobrepeso
30 a 34,9	    Obesidade grau I
35 a 39,9	    Obesidade grau II
Maior que 40	Obesidade grau III
*/


function calcularIMC (peso, altura){
    let IMC = peso/(altura*altura);
    return IMC
}
let peso = prompt('Insira seu peso em KG:');
let altura = prompt('Insira sua altura em Metros:');

let IMC = calcularIMC(peso, altura);
console.log(IMC);

if (IMC <= 18.5){
    alert('Magreza');
} else if(IMC >= 18.5 && IMC <= 24.9){
    alert('Normal');
} else if(IMC >= 25 && IMC <= 29.9){
    alert('Sobrepeso');
} else if(IMC >= 30 && IMC <= 34.9){
    alert('Obesidade Grau I')
} else if(IMC >= 35 && IMC <= 39.9){
    alert('Obesidade Grau II')
} else{
    alert('Obesidade Grau III')
}