// Seleciona o botão com id 'btnOrdenarPorPreco'
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

// Adiciona um evento de clique ao botão e define a função 'ordenarLivrosPorPreco' como callback
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

// Função para ordenar os livros por preço
function ordenarLivrosPorPreco() {
    // Utiliza o método 'sort' para ordenar os livros com base em seus preços
    // O método 'sort' recebe uma função de comparação como argumento
    // Essa função de comparação compara os preços dos livros (a.preco e b.preco)
    // Se a.preco for menor que b.preco, retorna um número negativo, o que faz com que o livro 'a' seja colocado antes do livro 'b'
    // Se a.preco for maior que b.preco, retorna um número positivo, o que faz com que o livro 'b' seja colocado antes do livro 'a'
    // Se a.preco for igual a b.preco, retorna 0, mantendo a ordem original
    // Isso resulta em uma lista de livros ordenados em ordem crescente de preço
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    // Chama a função 'exibirLivrosNaTela' passando a lista de livros ordenados
    exibirLivrosNaTela(livrosOrdenados);
}
