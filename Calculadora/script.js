function realizarCalculo(calculo){
    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)
    var resultadoElement = document.getElementById('resultado')


    switch (calculo) {
        case 'soma':
          resultadoElement.textContent = numero1 + numero2;
          break;
        case 'subtracao':
          resultadoElement.textContent = numero1 - numero2;
          break;
        case 'multiplicacao':
          resultadoElement.textContent = numero1 * numero2;
          break;
        case 'divisao':
          if (numero2 !== 0 & numero1 !== 0) {
            resultadoElement.textContent = numero1 / numero2;
          } else {
            resultadoElement.textContent = 'Impossível dividir por zero';
          }
          break;
        default:
          resultadoElement.textContent = 'Cálculo inválido';
    }
}
