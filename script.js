// ESPAÇO 1: DADOS DOS LIVROS
const livros = [
    {
        id: 1,
        titulo: "Bíblia do Corinthiano",
        autor: "Ale Viana",
        capa: "https://placehold.co/400x600/101010/FFFFFF?text=B%C3%ADblia+do\\nCorinthiano",
        sinopse: "Essa aqui é a nossa arma secreta. Quer calar a boca daquele seu amigo rival com dados e fatos? É esse livro. Tem tudo: ficha de jogo, história dos ídolos, estatísticas... É pra ler, decorar e usar pra defender o Coringão em qualquer discussão.",
        audio: "audios/biblia_corinthiano.mp3",
        editora: "Panda Books",
        ano: 2009,
        paginas: 368
    },
    {
        id: 2,
        titulo: "Doutor Sócrates: A Biografia",
        autor: "Andrew Downie",
        capa: "https://placehold.co/400x600/252525/FFFFFF?text=Doutor\\nS%C3%B3crates",
        sinopse: "Falar do Doutor é chover no molhado. O Magrão não foi só um gênio com a bola, ele foi a alma de uma era. Este livro não é só sobre futebol, é sobre inteligência, política e o que significa ser Corinthians de verdade. Leitura obrigatória!",
        audio: "audios/socrates.mp3",
        editora: "Companhia das Letras",
        ano: 2017,
        paginas: 520
    },
    {
        id: 3,
        titulo: "Tite",
        autor: "Camila Mattoso",
        capa: "https://placehold.co/400x600/101010/FFFFFF?text=Tite",
        sinopse: "Adenor. O cara que chegou, arrumou a casa e nos fez acreditar de novo. Este livro mostra o Tite por trás das câmeras, a tática, a gestão de grupo, mas principalmente, como ele entendeu o espírito da Fiel e nos levou ao topo do mundo. Para relembrar e se emocionar.",
        audio: "audios/tite.mp3",
        editora: "Panda Books",
        ano: 2016,
        paginas: 256
    },
    {
        id: 4,
        titulo: "Vai, Corinthians",
        autor: "Lourenço Diaféria",
        capa: "https://placehold.co/400x600/252525/FFFFFF?text=Vai,\\nCorinthians",
        sinopse: "Para quem viveu o sofrimento de 77, este livro é um abraço. Para quem não viveu, é uma aula. Lourenço Diaféria escreveu com a alma o que é ser corinthiano na alegria e, principalmente, na tristeza. Um texto curto, mas que bate fundo no coração.",
        audio: "audios/vai_corinthians.mp3",
        editora: "Ediouro",
        ano: 1996,
        paginas: 128
    },
    {
        id: 5,
        titulo: "O Invasor Corinthiano",
        autor: "Washington Olivetto",
        capa: "https://placehold.co/400x600/101010/FFFFFF?text=O+Invasor\\nCorinthiano",
        sinopse: "A Invasão de 76. Se você não se arrepia só de ouvir isso, precisa ler este livro. Washington Olivetto, um de nós, conta como a Fiel parou o Brasil e transformou o Maracanã na nossa casa. A prova de que nossa torcida não é normal. É FENOMENAL.",
        audio: "audios/invasor.mp3",
        editora: "Leya",
        ano: 2010,
        paginas: 144
    },
    {
        id: 6,
        titulo: "Corinthians - É Preto no Branco",
        autor: "Celso Unzelte",
        capa: "https://placehold.co/400x600/252525/FFFFFF?text=Preto+no\\nBranco",
        sinopse: "O manual definitivo. Se você quer conhecer a fundo a nossa história, desde a fundação no Bom Retiro até as glórias recentes, o Celso Unzelte compilou tudo aqui. É o tipo de livro para ter na estante e consultar sempre. Uma verdadeira enciclopédia do nosso amor.",
        audio: "audios/preto_no_branco.mp3",
        editora: "Leya",
        ano: 2010,
        paginas: 448
    }
];

// ESPAÇO 2: SELECIONANDO ELEMENTOS DA PÁGINA
const paginaInicial = document.getElementById('pagina-inicial');
const paginaDetalhes = document.getElementById('pagina-detalhes');
const catalogoContainer = document.getElementById('catalogo-container');
const detalhesLivroContainer = document.getElementById('detalhes-livro-container');
const btnVoltar = document.getElementById('btn-voltar');

// ESPAÇO 3: FUNÇÕES (O QUE O SITE FAZ)
function mostrarPaginaInicial() {
    paginaInicial.classList.remove('hidden');
    paginaDetalhes.classList.add('hidden');
}

function mostrarPaginaDetalhes(livroId) {
    const livro = livros.find(l => l.id === livroId);
    if (!livro) return;

    detalhesLivroContainer.innerHTML = `
        <div class="detalhes-layout">
            <div class="detalhes-capa">
                <img src="${livro.capa.replace('400x600', '800x1200')}" alt="Capa do livro ${livro.titulo}">
            </div>
            <div class="detalhes-conteudo">
                <h2>${livro.titulo}</h2>
                <p class="autor">por ${livro.autor}</p>
                <h3>Sinopse</h3>
                <p class="sinopse-texto">${livro.sinopse}</p>
                <h3>Podcast da Sinopse</h3>
                <div class="podcast-player">
                    <audio controls src="${livro.audio}">Seu navegador não suporta áudio.</audio>
                </div>
                <h3>Informações Adicionais</h3>
                <div class="info-adicional">
                    <ul>
                        <li><strong>Editora:</strong> ${livro.editora}</li>
                        <li><strong>Ano:</strong> ${livro.ano}</li>
                        <li><strong>Páginas:</strong> ${livro.paginas}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    paginaInicial.classList.add('hidden');
    paginaDetalhes.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// ESPAÇO 4: EVENTOS (QUANDO AS COISAS ACONTECEM)
document.addEventListener('DOMContentLoaded', () => {
    catalogoContainer.innerHTML = '';
    
    livros.forEach(livro => {
        const card = document.createElement('article');
        card.className = 'livro-card';
        card.dataset.id = livro.id;

        card.innerHTML = `
            <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}">
            <div class="livro-info">
                <h3>${livro.titulo}</h3>
                <p>${livro.autor}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            mostrarPaginaDetalhes(livro.id);
        });

        catalogoContainer.appendChild(card);
    });
});

btnVoltar.addEventListener('click', (event) => {
    event.preventDefault();
    mostrarPaginaInicial();
});
