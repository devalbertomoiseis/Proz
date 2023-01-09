/*
  innerText -> Retorna o texto sem formatação e sem elementos HTML.
  innerHtml -> Retorna o texto com formatação e com elementos HTML.


*/

let elementoH1 = document.querySelector("h1");
console.log(elementoH1);
elementoH1.innerText = "Novo Título com JS";
console.log(elementoH1);
/*
De volta ao arquivo script.js, usamos a função dot notation para acessar as propriedades, adicionando um ponto ao elemento capturado do DOM seguido do nome da propriedade (innerText ou innerHTML, respeitando as letras maiúsculas e minúsculas).
Depois, executamos mais um console.log() logo embaixo do primeiro, mas acessando a propriedade .innerText:

*/
console.log(elementoH1.innerText);

/*
Para demonstrar o uso da próxima propriedade, guardaremos o elemento <main> na variável elementoMain. Para isso, usamos o método .querySelector e o imprimimos no terminal com mais um console.log().
*/
let elementoMain = document.querySelector("main");
console.log(elementoMain);
console.log(elementoMain.innerText);
console.log(elementoMain.innerHTML);

elementoMain.innerHTML = `
  <h2>Novo subtítulo</h2>
  <ul>
    <li>Elemento de lista JS 01</li>
    <li>Elemento de lista JS 02</li>
    <li>Elemento de lista JS 03</li>
  </ul>
`;

let numA = 5;
let numB = 9;
let soma = `A soma de ${numA} e ${numB} é ${numA + numB}`;
console.log(soma);

let elementoJavascript = document.createElement("li");
/*
Se você observar o terminal no navegador, temos agora um elemento <li> com o texto JavaScript entre as tags de abertura e fechamento:
*/
elementoJavascript.innerText = "Javascript";
console.log(elementoJavascript);
/*
Ao salvar as mudanças e voltar no terminal do navegador, devemos ver nosso elemento completo, com seu respectivo texto e id:
*/
elementoJavascript.id = "ling-js";
console.log(elementoJavascript);

let listaLinguagens = document.querySelector(".lista-linguagens");
/*
Com o elemento da lista não ordenada salvo na variável listaLinguagens, podemos chamar essa variável e usar o método appendChild() para adicionar elementos nele.
Para fazer isso, basta passar o que deseja como argumento dentro dos parênteses.
No nosso exemplo, vamos adicionar o elementoJavaScript que criamos e manipulamos nas etapas anteriores. Observe a imagem.
*/

let elementoJavaScript02 = document.createElement("li");
elementoJavaScript02.innerText = "Javascript 02";
elementoJavaScript02.id = "ling-js-02";


/*
Criamos o elemento <div> para a postagem e guardamos ele na variável postagemJavaScript:
*/
const postagemJs = document.createElement("div");

const postagemJavaScript = document.createElement("div");

postagemJavaScript.innerHTML = `
  <h2 class="post-titulo">JavaScript</h2>
  <p class="post-texto">
    JavaScript é uma linguagem de programação
  </p>
`


//Nele, adicionamos o elemento postagemJavaScript através do método appendChild().
const postagens = document.querySelector(".postagens02");
postagens.appendChild(postagemJavascript);
