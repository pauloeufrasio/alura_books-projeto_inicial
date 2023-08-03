// Seleciona todos os elementos com a classe "btn" e adiciona um listener de clique para cada um deles
const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

// Função para filtrar os livros com base na categoria selecionada
function filtrarLivros() {
    // Obtém o elemento do botão que foi clicado
    const elementoBtn = document.getElementById(this.id);
    // Obtém a categoria do botão clicado
    const categoria = elementoBtn.value;

    // Filtra os livros com base na categoria selecionada
    // Se a categoria for "disponivel", filtra os livros que possuem quantidade maior que 0
    // Caso contrário, filtra os livros que possuem a categoria igual à categoria selecionada
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);

    // Exibe os livros filtrados na tela
    exibirLivrosNaTela(livrosFiltrados);

    // Se a categoria selecionada for "disponivel", calcula o valor total dos livros disponíveis e exibe na tela
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

// Função para exibir o valor total dos livros disponíveis na tela
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    // Atualiza o conteúdo do elemento com o id "elementoComValorTotalDeLivrosDisponiveis" com o valor total
    elementoComValorTotalDeLivrosDisponiveis.innerHTML=`
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
 `;
}
