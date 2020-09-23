//Variáveis globais

let xMalha
let yMalha
let xSonda
let ySonda
let direcaoSonda

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

    xMalha = malhaInicial.charAt(0)
    yMalha = malhaInicial.charAt(2)

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

    xSonda = posicaoInicialSonda.charAt(0)
    ySonda = posicaoInicialSonda.charAt(2)
    direcaoSonda = posicaoInicialSonda.charAt(4).toUpperCase()

    if (direcaoSonda == 'N' || direcaoSonda == 'S' || direcaoSonda == 'L' || direcaoSonda == 'O') {
        txtmarcacaoSonda.innerHTML = `Marcação realizada, a posição inicial da Sonda é: ${posicaoInicialSonda.toUpperCase()}`
        window.document.getElementById("txtmarcacaoSonda").style.color = "green"
    } else {
        alert("Valor de direção incorreto! Insira: N, S, L ou O.")
        txtmarcacaoSonda.innerHTML = `Marcação inválida!`
        window.document.getElementById("txtmarcacaoSonda").style.color = "red"
        window.document.getElementById('entradaPosicaoSonda').value = ''
    }

    switch (direcaoSonda) {
        case 'N':
            direcaoSonda = 0
            break

        case 'S':
            direcaoSonda = 2
            break

        case 'L':
            direcaoSonda = 1
            break

        case 'O':
            direcaoSonda = 3
            break
    }

    console.log("Direção da sonda " + direcaoSonda)

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

    for (let i = 0; i < comandosSonda.length; i++) {
        let c = comandosSonda.charAt(i).toUpperCase()

        switch (c) {
            case 'L':
                console.log("Comando L")
                direcaoSonda = direcaoSonda - 1
                console.log(direcaoSonda)
                break
            case 'R':
                console.log("Comando R")
                direcaoSonda = direcaoSonda + 1
                console.log(direcaoSonda)
                break
            case 'M':
                console.log("Comando M")
                switch (direcaoSonda) {
                    case 0:
                        ySonda++
                        break

                    case 2:
                        ySonda--
                        break

                    case -2:
                        ySonda--
                        break

                    case 1:
                        xSonda++
                        break

                    case 3:
                        xSonda--
                        break

                    case -3:
                        xSonda++
                        break

                    case -1:
                        xSonda--
                        break

                    case -4:
                        ySonda++
                        break

                    case -5:
                        ySonda--
                        break

                    case 4:
                        ySonda++
                        break

                    case 5:
                        xSonda++
                        break

                    case 6:
                        ySonda++
                        break

                    case -6:
                        ySonda--
                        break
                }
        }

    }

}

function limparComandosSonda() {

    let comandosSonda = window.document.getElementById("comandosSonda")
    comandosSonda = String(comandosSonda.value)

    txtComandosSonda.innerHTML = `Comandos limpos!`
    document.getElementById('comandosSonda').value = '';

    window.document.getElementById("txtComandosSonda").style.color = "red"

    //Peguei o valor novamente da direção inicial da Sonda
    let posicaoInicialSonda = window.document.getElementById("entradaPosicaoSonda")
    posicaoInicialSonda = String(posicaoInicialSonda.value)

    //Valor da direção da Sonda foi zerado para o valor inicial, assim não carrega valor já operacionado
    direcaoSonda = posicaoInicialSonda.charAt(4).toUpperCase()

    switch (direcaoSonda) {
        case 'N':
            direcaoSonda = 0
            break

        case 'S':
            direcaoSonda = 2
            break

        case 'L':
            direcaoSonda = 1
            break

        case 'O':
            direcaoSonda = 3
            break
    }

}

function saidaPosicaoSonda() {

    switch (direcaoSonda) {
        case 0:
            direcaoSonda = 'N'
            break

        case 2:
            direcaoSonda = 'S'
            break

        case 1:
            direcaoSonda = 'L'
            break

        case 3:
            direcaoSonda = 'O'
            break

        case -2:
            direcaoSonda = 'S'
            break

        case -1:
            direcaoSonda = 'O'
            break

        case -3:
            direcaoSonda = 'L'
            break

        case -4:
            direcaoSonda = 'N'
            break

        case 5:
            direcaoSonda = 'L'
            break
    }

    let posicaoFinal = window.document.getElementById("painelResultado")
    posicaoFinal.innerHTML = `${xSonda} ${ySonda} ${direcaoSonda}`

}

function limparSaidaSonda() {

    alert("Teste")

    window.document.getElementById('painelResultado').value = ''

}