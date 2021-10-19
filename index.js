'use strict';

const sons = {
    'C': 'snare.wav',
    'V': 'snare.wav',
    'B': 'kick.wav',
    'N': 'hihat.wav',
    'M': 'openhat.wav',
    'G': 'tom1.wav',
    'H': 'tom2.wav',
    'J': 'tom3.wav',
    'U': 'crash.wav',
    'I': 'ride.wav',
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto; //conteúdo ASD...
    div.id = texto;
    document.getElementById('container').appendChild(div); //adiciona o filho div ao pai container
}

const exibir = (sons) => {
    Object.keys(sons).forEach(criarDiv);
}

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra)
                                            .classList.add('active');  
                                            
const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}

const ativarDiv = (evento) => {
    let letra = '';
    if (evento.type == 'click') {
         letra = evento.target.id;
    } else {
         letra = evento.key.toUpperCase();
    }

    const letraPermitida = sons.hasOwnProperty(letra)
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
    tocarSom(letra);
}

exibir(sons);
document.getElementById('container').addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv);