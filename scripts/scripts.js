function marcaMalha() {

    let malhaInicial = window.document.getElementById("entradaPosicaoMalha")
    malhaInicial = String(malhaInicial.value)

    if (malhaInicial == '') {
        txtmarcacaoMalha.innerHTML = `Marcação nula!`
        window.document.getElementById("txtmarcacaoMalha").style.color = "red"
        alert("Por favor, insira o tamanho da malha conforme exemplo para prosseguir.")
    } else {
        txtmarcacaoMalha.innerHTML = `Tamanho da malha registrado, o tamanho é: ${malhaInicial}`
        window.document.getElementById("txtmarcacaoMalha").style.color = "green"
    }

}

function limpaMalha() {

    let malhaInicial = window.document.getElementById("entradaPosicaoMalha")
    malhaInicial = String(malhaInicial.value)

    txtmarcacaoMalha.innerHTML = `Marcação inicial limpa!`
    document.getElementById('entradaPosicaoMalha').value = '';

    window.document.getElementById("txtmarcacaoMalha").style.color = "red"

}

function marcarSonda() {

    let posicaoInicialSonda = window.document.getElementById("entradaPosicaoSonda")
    posicaoInicialSonda = String(posicaoInicialSonda.value)

    if (posicaoInicialSonda == '') {
        txtmarcacaoSonda.innerHTML = `Marcação nula!`
        window.document.getElementById("txtmarcacaoSonda").style.color = "red"
        alert("Por favor, insira a posição inicial da Sonda conforme exemplo para prosseguir.")
    } else {
        txtmarcacaoSonda.innerHTML = `Marcação realizada, a posição inicial da Sonda é: ${posicaoInicialSonda}`
        window.document.getElementById("txtmarcacaoSonda").style.color = "green"
    }

}

function limparSonda() {

    let posicaoInicialSonda = window.document.getElementById("entradaPosicaoSonda")
    posicaoInicialSonda = String(posicaoInicialSonda.value)

    txtmarcacaoSonda.innerHTML = `Marcação inicial limpa!`
    document.getElementById('entradaPosicaoSonda').value = '';

    window.document.getElementById("txtmarcacaoSonda").style.color = "red"

}

function girarEsquerda() {

    window.document.getElementById("sonda").style.transform = "rotate(-90deg)";

}

function girarDireita() {

    window.document.getElementById("sonda").style.transform = "rotate(90deg)";

}

function moverSonda() {



}

function posicaoAtual() {



}