// Declaração de uma variável chamada 'livros' e atribuição de um array vazio a ela.
let livros = [];

// Endereço da API que será utilizada para obter a lista de livros.
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

// Chamada da função 'getBuscarLivrosDaAPI' para obter os livros da API.
getBuscarLivrosDaAPI();

// Função assíncrona que busca os livros da API.
async function getBuscarLivrosDaAPI() {
  // Faz uma requisição para o endPointDaAPI utilizando o método fetch, que retorna uma promessa.
  const res = await fetch(endPointDaAPI);

  // Utiliza o método json() para extrair os dados da resposta (que também é uma promessa).
  // Os dados são atribuídos à variável 'livros', que agora contém a lista de livros obtida da API.
  livros = await res.json();

  // Aplica o desconto de 30% nos preços dos livros utilizando a função 'aplicarDesconto'.
  let livrosComDesconto = aplicarDesconto(livros);

  // Chama a função 'exibirLivrosNaTela' para exibir os livros (com o desconto aplicado) na tela.
  // Note que, atualmente, essa chamada está passando a lista de livros original (sem o desconto aplicado) em vez da lista 'livrosComDesconto'.
  exibirLivrosNaTela(livros);
}




