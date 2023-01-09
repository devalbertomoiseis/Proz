/*
const postagem = document.createElement("article");

postagem.innerHTML = `
  <h1>"Churrascada do Mar"</h1>
  <h2>"Melhor do que estar na praia!"</h2>
  <p>
    30/08/2022
  </p>
  <p>
    Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!
  </p>
`;

let article = document.querySelector("main");
main.appendChild(article)
let id = document.querySelector("post-1");
let paragrafo = document.getElementsByClassName("subtitulo");
let data = document.getElementsByClassName("data");
const postagem = document.createElement("article");

postagem.innerHTML = `
  ${id}
  <h2>Conhecendo os melhores restaurantes de São Paulo</h2>
  ${paragrafo}
  ${data}
  <p>
  Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)
  </p>
`;

let main = document.querySelector("main");
main.appendChild(article);
console.log(postagem);
*/

const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto:
      "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)",
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto:
      "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina.",
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto:
      "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!",
  },
];

for (let i = 0; i < arrayPostagens.length; i++) {
  // Criar o Elemento
  let article = document.createElement("article");
  // Popular o Elemento
  article.innerHTML = `
    <h3>${arrayPostagens[i].titulo}</h3>
    <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
    <div class="data">${arrayPostagens[i].data}</div>
    <p>${arrayPostagens[i].texto}</p>
  `;
  let main = document.querySelector("main").appendChild(article);
  console.log(main);
}
