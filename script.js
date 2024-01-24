// array declarado de forma global
let fibonacciSequencia = [];

// função recursiva - principal *atenção
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// função para adicionar número ao array
function addNum() {
  let adicionaN = fibonacciSequencia.length;
  let fibonacciNumber = fibonacci(adicionaN);
  fibonacciSequencia.push(fibonacciNumber);
  exibirSequencia();
}
// função para remover número do array - última posição
function removeNum() {
  if (fibonacciSequencia.length > 0) {
    fibonacciSequencia.pop();
    exibirSequencia();
  }
}
// função para exibir a sequência na tela
function exibirSequencia() {
  let sequenciaF = document.getElementById("fibonacci-sequence");
  sequenciaF.innerHTML = `Sequência de Fibonacci: ${fibonacciSequencia.join(
    ", "
  )}`;
}
