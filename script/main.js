let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'img/1-hope-deitado-removebg-preview.png'){
        minhaImagem.setAttribute('src', 'img/3-hope-pulando-removebg-preview.png');
    }
    else{
        minhaImagem.setAttribute('src', 'img/1-hope-deitado-removebg-preview.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomePet(){
    let nomePet = prompt('Por favor, informe o nome do seu Pinscher.');
    if(!nomePet || nomePet === null) {
        defineNomePet();
    }
    else {
        localStorage.setItem('nome', nomePet);
        meuCabecalho.textContent = 'Tudo sobre o seu Pinscher ' + nomePet;
    }
}

if(!localStorage.getItem('nome')){
    defineNomePet();
}else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Tudo sobre o seu Pinscher ' + nomeGuardado;
}

meuBotao.onclick = function(){defineNomePet();}