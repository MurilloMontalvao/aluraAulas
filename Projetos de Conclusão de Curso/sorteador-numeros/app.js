function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numero;
    let numeroSorteado = [];
    if(de>ate){
        alert('o número de inicio é maior que o final')
        return
    }
    if(quantidade >= (ate - de + 1)){
        alert('A quantidade de numero é superior ao intervalo entre os números.')
        return
    }
    for (let i=0; i<quantidade; i++) {
        numero = gerandoNumeroAleatorio(de, ate);
        
        while(numeroSorteado.includes(numero)){
            numero = gerandoNumeroAleatorio(de, ate);
        }

        numeroSorteado.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeroSorteado}</label>`;
    alterarBotao(); 
}  

 
function gerandoNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function alterarBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarBotao();
}