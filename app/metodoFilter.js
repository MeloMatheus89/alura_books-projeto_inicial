import { exibirOsLivrosNaTela } from "./metodoForEach.js";

export function filtrarLivros(livros, botao) {
  const categoriaEscolhida = botao.value;
  console.log(botao.value);
  //   console.table(livros);
  const livrosFiltrados = livros.filter((livro) => livro.categoria === categoriaEscolhida);
  console.table(livrosFiltrados);
  exibirOsLivrosNaTela(livrosFiltrados);
}
