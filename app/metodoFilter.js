import { exibirOsLivrosNaTela } from "./metodoForEach.js";

export function filtrarLivros(livros, botao) {
  const categoriaEscolhida = botao.value;
  if (botao.value === "") {
    return;
  }
  //   console.table(livros);
  const livrosFiltrados = categoriaEscolhida == "disponivel" ? filtrarPorDisponibilidade(livros) : filtrarPorCategoria(livros, categoriaEscolhida);
  exibirOsLivrosNaTela(livrosFiltrados);

  if (categoria == "disponivel") {
    exibirValorTotalDosLivrosDisponiveisNaTela();
  }
}

function filtrarPorCategoria(livros, categoriaEscolhida) {
  return livros.filter((livro) => livro.categoria === categoriaEscolhida);
}

function filtrarPorDisponibilidade(livros) {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela() {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
      </div>`;
}
