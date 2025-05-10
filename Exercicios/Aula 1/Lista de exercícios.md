## 1) Integrando a API do AluraBooks

Imagine que você trabalha em uma startup de tecnologia educacional focada em promover a leitura. Sua equipe deseja criar um portal chamado "EduLivros", que exibe uma lista de livros educacionais disponíveis. Você é responsável por integrar, ao site, a API que fornece os dados dos livros. Para começar, você precisa realizar uma requisição à API fornecida e exibir os resultados em um formato legível para a equipe de desenvolvimento.

`Neste exercício, usaremos a API AluraBooks.`

Siga as instruções a seguir:

Crie uma pasta chamada “app” e dentro dela, um arquivo main.js;
Crie, no arquivo main.js, uma variável de livros que será inicializada como um array vazio;
Defina uma constante endpointDaApi com o URL fornecido para acessar os livros;
Implemente uma função assíncrona getBuscaLivrosDaAPI que realiza uma requisição para o endpoint da API e atualiza a variável livros com os dados recebidos;
Use console.table() para exibir os livros de forma organizada no console;
Lembre-se de adicionar a tag <script> que referencia seu arquivo main.js no arquivo index.html do projeto.

## 2) Exibindo livros dinamicamente com JavaScript

Imagine que você está trabalhando em uma livraria virtual como desenvolvedor front-end. Sua tarefa é: melhore a experiência do usuário ao exibir os livros disponíveis. Você precisa criar uma página que mostre todos os livros disponíveis, utilizando JavaScript para inserir dinamicamente cada livro em uma section com id="livros". Cada livro deve ser representado por uma <div> que contém:

. a imagem do livro;
. o título;
. o autor;
. o preço; e
a categoria. Os dados dos livros estão disponíveis em um array chamado listaDeLivros, no qual cada livro é um objeto com as seguintes propriedades: título, autor, imagem, preco e categoria.
Dicas para realizar o exercício:
Selecione a section na qual os livros serão inseridos utilizando o método getElementById;
Use um loop forEach para iterar sobre o array listaDeLivros;
Para cada livro no array, crie uma `<div>` que contém as informações do livro. Utilize template literals para inserir os valores das propriedades de cada livro (ex.: livro.titulo, livro.imagem, etc.);
Insira cada `<div>` criada dentro da section de livros, utilizando innerHTML ou appendChild.
