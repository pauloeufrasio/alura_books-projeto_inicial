// Função para aplicar o desconto de 30% no preço de cada livro da lista de livros fornecida.
function aplicarDesconto(livros) {
    // Define o valor do desconto em 30%.
    const desconto = 0.3;
  
    // Utiliza o método map para percorrer a lista de livros e criar uma nova lista com os livros que têm o desconto aplicado.
    livrosComDesconto = livros.map(livro => {
      // Retorna um novo objeto (livro) com todas as propriedades do livro original, exceto o preço que é recalculado com o desconto.
      return { ...livro, preco: livro.preco - (livro.preco * desconto) };
    });
    
    // Retorna a lista de livros com o desconto aplicado.
    return livrosComDesconto;
  }
  
