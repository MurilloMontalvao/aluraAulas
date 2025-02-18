let numeroAleatorio = gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 100:');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroAleatorio);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
}