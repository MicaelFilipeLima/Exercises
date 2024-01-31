function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 10) + 1
}

function exibirNumeroAleatorio(){
    var numeroAleatorio = gerarNumeroAleatorio()
    alert ("Numero aleatório:" + numeroAleatorio)
}

var botao = document.getElementById("gerarNumeros")
botao.addEventListener("click", exibirNumeroAleatorio)