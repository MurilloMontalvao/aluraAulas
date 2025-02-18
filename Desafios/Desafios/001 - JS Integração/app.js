let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole(){
    console.log('O botão foi clicado');
}
function botaoAlert(){
    alert('Eu amo JS');
}
function botaoPrompt(){
    let cidade = prompt('Insira o nome da Cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function botaoSoma(){
    let numeroUm = Parseint(prompt('Insira o primeiro valor'));
    let numeroDois  = ParseInt(prompt('Insira o segundo valor'));
    let resultado = numeroUm + numeroDois;
    alert(`O resultado da soma é ${resultado}`);
}