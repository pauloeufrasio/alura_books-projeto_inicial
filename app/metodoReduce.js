function calcularValorTotalDeLivrosDisponiveis(livros) {
    // A função reduce é usada para reduzir a lista de livros a um único valor, que será o valor total
    // O primeiro argumento da função reduce é uma função de callback que será executada para cada elemento da lista
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)

}