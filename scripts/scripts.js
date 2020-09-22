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
        txtmarcacaoSonda.innerHTML = `Marcação realizada, a posição inicial da Sonda é: ${posicaoInicialSonda.toUpperCase()}`
        window.document.getElementById("txtmarcacaoSonda").style.color = "green"
    }

}

function limparSonda() {

    let posicaoInicialSonda = window.document.getElementById("entradaPosicaoSonda")
    posicaoInicialSonda = String(posicaoInicialSonda.value)

    txtmarcacaoSonda.innerHTML = `Marcação inicial limpa!`
    window.document.getElementById('entradaPosicaoSonda').value = ''

    window.document.getElementById("txtmarcacaoSonda").style.color = "red"

}

function marcarComandosSonda() {

    let comandosSonda = window.document.getElementById("comandosSonda")
    comandosSonda = String(comandosSonda.value)

    if (comandosSonda == '') {
        txtComandosSonda.innerHTML = `Marcação nula!`
        window.document.getElementById("txtComandosSonda").style.color = "red"
        alert("Por favor, insira comandos conforme exemplo para prosseguir.")
    } else {
        txtComandosSonda.innerHTML = `Comandos registrados, os comandos são: ${comandosSonda.toUpperCase()}`
        window.document.getElementById("txtComandosSonda").style.color = "green"
    }

}

function limparComandosSonda() {

    let comandosSonda = window.document.getElementById("comandosSonda")
    comandosSonda = String(comandosSonda.value)

    txtComandosSonda.innerHTML = `Comandos limpos!`
    document.getElementById('comandosSonda').value = '';

    window.document.getElementById("txtComandosSonda").style.color = "red"

}

function posicaoAtual() {



}