// Referência ao elemento do DOM com o id "livros" onde os livros serão inseridos.
const elementoParaInserirLivros = document.getElementById("livros");

// Referência ao elemento do DOM com o id "valor_total_livros_disponiveis" para exibir o valor total dos livros disponíveis.
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

// Função para exibir os livros na tela com base na lista de livros fornecida como parâmetro.
function exibirLivrosNaTela(listaDeLivros) {
  // Limpa o conteúdo dos elementos antes de exibir os livros para evitar acúmulo de informações.
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
  elementoParaInserirLivros.innerHTML = '';

  // Itera sobre cada livro na lista de livros fornecida.
  listaDeLivros.forEach(livro => {
    // Verifica a disponibilidade do livro com base na quantidade. Se a quantidade for maior que 0, o livro está disponível.
    // Define a classe da imagem conforme a disponibilidade.
    let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel';

    // Cria a estrutura HTML para exibir o livro na tela, utilizando as informações do livro.
    elementoParaInserirLivros.innerHTML += `
      <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
    `;
  });
}
