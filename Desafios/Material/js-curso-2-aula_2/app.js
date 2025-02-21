let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');  
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'ACERTOOOOU!!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemSecreta = `Parabéns, você acertou o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemSecreta);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute > numeroSecreto){
        exibirTextoNaTela('p','O número secreto é menor');
        limparCampo();
        tentativa++;
    } else {
        exibirTextoNaTela('p','O número secreto é maior');
        limparCampo();
        tentativa++;
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}