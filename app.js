// let numeroSecreto = generarNumeroSecreto()
let numeroSecreto = 0
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaximo = 10

// console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value)

    // console.log(numeroSecreto)
    // console.log(intentos)
    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p', `el numero secreto es menor que ${numeroUsuario}`)
    } else {
        asignarTextoElemento('p', `el numero secreto es mayor que ${numeroUsuario}`)
        limpiarCaja()
    }
    intentos++;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''
}

function condicionesIniciales() {
    asignarTextoElemento('p', `Ingresa un numero del 1 - ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto()
    intentos = 1
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja()
    // Iniciar mensaje de Inicio
    // Generar numero aleatorio
    // Inicializar el numero de Intentos
    condicionesIniciales()
    // Desabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}

asignarTextoElemento('h1', 'Juego del número secreto 👾🤖')
condicionesIniciales()

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1
    // console.log('el numero generado es',numeroGenerado)
    // console.log('el arreglo es ', listaNumerosSorteados)
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'haz completado el juego, has sorteado todos los numeros!')
        document.querySelector('#intentar').setAttribute('disabled', true)
    }else{
        // si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}
