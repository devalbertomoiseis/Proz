// Captura de todos os elementos do DOM pelo método getElementById()

/*
  Conteúdo Extra:
  1 -> https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault
  2 -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
  3 -> https://bognarjunior.wordpress.com/2015/02/01/hide-show-e-toggle-jquery/
  4 -> https://tableless.com.br/manipulando-o-uso-de-classes-com-classlist-api/#:~:text=M%C3%A9todos%20do%20classList,possui%20certa%20classe%20no%20elemento.
*/
let botoes = document.querySelectorAll("button");

function clickBotao(e){
  e.preventDefault();
  this.classList.toggle('ativo');
}

botoes.forEach(item => {
  item.addEventListener('click', clickBotao)
})