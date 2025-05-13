import { exibirOsLivrosNaTela } from "./metodoForEach.js";
import { aplicarDesconto } from "./metodoMap.js";
import { filtrarLivros } from "./metodoFilter.js";
// import { ordenarLivrosPorPreco } from "./metodoSort.js";

// Rensponsável por pegar as informações do JSON.
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();
// Variável que armazena os livros da API;
let livros = [];
// Variável que armazena os botões e aguarda o click deles

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
  const botoesDeFiltro = document.querySelectorAll(".btn");

  botoesDeFiltro.forEach((btn) =>
    btn.addEventListener("click", function () {
      filtrarLivros(livros, this);
    })
  );
}

// A função getBuscarLivrosDaAPI() é assíncrona, então precisamos esperar ela terminar antes de continuar

const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosNaTela(livrosOrdenados);
}
