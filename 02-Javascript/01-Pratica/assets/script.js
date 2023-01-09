// Captura de todos os elementos do DOM pelo método getElementById()
let elementoClicado = document.getElementById("elemento-clicado");
let botaoTempo = document.getElementById("botao-tempo");
let tempo = document.getElementById("tempo");
/*
  A propriedade timeStamp retorna um número que representa o tempo transcorrido
  desde a renderização da página até o momento em que o evento aconteceu. 
  Essa informação pode ser útil para provas on-line, onde cada questão 
  tem um tempo máximo permitido para escolher a resposta.
*/
/*
  click -> parâmetro é uma string do tipo evento
  function() -> segundo paramento é uma função anonima que despara quando evento
  é disparado.
  evento -> parâmetro representa um objeto com todas as propriedades
*/
botaoTempo.addEventListener("click", function(evento){
  console.log(evento.timeStamp)
  /*
  atribuímos ele à propriedade innerText do elemento tempo, 
  que foi previamente capturado do DOM.
  */
  tempo.innerText = evento.timeStamp;
})