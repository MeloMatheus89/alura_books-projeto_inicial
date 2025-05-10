import { exibirOsLivrosNaTela } from "./metodoForEach.js";
import { aplicarDesconto } from "./metodoMap.js";

// Rensponsável por pegar as informações do JSON.
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
let livros = [];

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}

// A função getBuscarLivrosDaAPI() é assíncrona, então precisamos esperar ela terminar antes de continuar
