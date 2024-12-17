let listaDeNumeroAleatorio = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
console.log(numeroSecreto);

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo da adivinhação');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
   
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Voce acertou o numero secreto');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto)
            exibirTextoNaTela('p', `O numero e maior que ${chute}`);
        else {
            exibirTextoNaTela('p', `O numero e menor que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    } 

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroAleatorio.length;

    if(quantidadeDeElementosNaLista == numeroEscolhido) {
        listaDeNumeroAleatorio = [];
    }
    if (listaDeNumeroAleatorio.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroAleatorio.push(numeroEscolhido);
        console.log(listaDeNumeroAleatorio);
        return numeroEscolhido
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}