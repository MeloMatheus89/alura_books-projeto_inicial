import { exibirOsLivrosNaTela } from "./metodoForEach.js";
import { calcularValorTotalDeLivrosDisponiveis } from "./metodoReduce.js";

let variavelComOTextoDoRodape = document.getElementById("valor_total_livros_disponiveis");
export function filtrarLivros(livros, botao) {
  const categoriaEscolhida = botao.value;
  if (botao.value === "") {
    return;
  }
  //   console.table(livros);
  const livrosFiltrados = categoriaEscolhida == "disponivel" ? filtrarPorDisponibilidade(livros) : filtrarPorCategoria(livros, categoriaEscolhida);
  exibirOsLivrosNaTela(livrosFiltrados);

  if (categoriaEscolhida == "disponivel") {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    console.log(variavelComOTextoDoRodape);
  }
}

function filtrarPorCategoria(livros, categoriaEscolhida) {
  return livros.filter((livro) => livro.categoria === categoriaEscolhida);
}

function filtrarPorDisponibilidade(livros) {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
  console.log(variavelComOTextoDoRodape);
  variavelComOTextoDoRodape.innerHTML = `<div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
      </div>`;
}
