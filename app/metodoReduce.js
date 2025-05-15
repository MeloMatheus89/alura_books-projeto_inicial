export function calcularValorTotalDeLivrosDisponiveis(livrosFiltrados) {
  return livrosFiltrados.reduce((acumulador, livro) => acumulador + livro.preco, 0).toFixed(2);
}
