
const database = [
    {
        id: 1,
        titulo: "Grand Theft Auto IV",
        categoria: "Jogo",
        imagem: "https://observatoriodegames.com.br/wp-content/uploads/2022/08/GTA-4.jpg",
        pequenadescrição: "A jornada brutal de Niko Bellic em Liberty City, tentando escapar de seu passado de guerra e encontrar o verdadeiro 'Sonho Americano'.",
        descrição: "Enganado pelas promessas de riqueza de seu primo Roman, Niko Bellic chega a Liberty City e é forçado a entrar no submundo do crime para protegê-lo. O jogo é um marco por seu tom realista e sombrio, apresentando uma física de jogo avançada e uma narrativa madura sobre traição, sobrevivência e a busca por redenção em uma metrópole indiferente.",
        nota: 9.8,
        extra: "Lançamento: 2008 | Desenvolvedora: Rockstar North | Plataformas: PC, PS3, Xbox 360"
    },
    {
        id: 2,
        titulo: "Dexter",
        categoria: "Série",
        imagem: "https://m.media-amazon.com/images/I/81JKXT1j0OL._AC_UF1000,1000_QL80_.jpg",
        pequenadescrição: "A vida dupla de um analista forense que atua secretamente como um assassino em série focado em aplicar sua própria justiça.",
        descrição: "Dexter Morgan trabalha para a polícia de Miami como especialista em padrões de dispersão de sangue. Porém, sob sua fachada de homem pacato, esconde-se um psicopata. Para canalizar seus instintos violentos, seu pai adotivo o ensinou um código rígido: matar apenas criminosos que conseguiram escapar do sistema judicial, tornando-se um anti-herói fascinante.",
        nota: 8.8,
        extra: "Temporadas: 8 | Emissora: Showtime | Ano: 2006-2013"
    },
    {
        id: 3,
        titulo: "Batman: O Cavaleiro das Trevas",
        categoria: "Filme",
        imagem: "https://rollingstone.com.br/wp-content/uploads/batman_o_cavaleiro_das_trevas_2.jpg",
        pequenadescrição: "O confronto definitivo e psicológico entre Batman e seu maior arqui-inimigo, o Coringa, que busca mergulhar Gotham City na anarquia pura.",
        descrição: "Com a ajuda do tenente Jim Gordon e do promotor público Harvey Dent, Batman continua sua guerra contra o crime organizado em Gotham. No entanto, a chegada do Coringa, um gênio anarquista e psicopata, testa os limites morais do herói e transforma a cidade em um tabuleiro de terror psicológico. O filme é amplamente considerado uma obra-prima do cinema, imortalizado pela atuação lendária e oscarizada de Heath Ledger.",
        nota: 9.7,
        extra: "Ano: 2008 | Diretor: Christopher Nolan | Duração: 152 min"
    },
    {
        id: 4,
        titulo: "Breaking Bad",
        categoria: "Série",
        imagem: "https://static.wikia.nocookie.net/assista-series/images/5/56/Breaking-Bad.jpg/revision/latest/scale-to-width-down/1200?cb=20150528205254&path-prefix=pt-br",
        pequenadescrição: "Um professor de química diagnosticado com câncer decide fabricar drogas para garantir o futuro financeiro de sua família.",
        descrição: "Walter White, um professor de química de 50 anos, é diagnosticado com câncer terminal. Para garantir o futuro financeiro de sua família, ele começa a fabricar metanfetamina junto com seu ex-aluno Jesse Pinkman.",
        nota: 9.9,
        extra: "Temporadas: 5 | Emissora: AMC | Ano: 2008-2013"
    },
    {
        id: 5,
        titulo: "Red Dead Redemption 2",
        categoria: "Jogo",
        imagem: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",
        pequenadescrição: "O crepúsculo da era dos fora da lei no Velho Oeste americano, acompanhando a jornada de lealdade e redenção de Arthur Morgan.",
        descrição: "Em 1899, após um roubo dar errado na cidade de Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir pelos Estados Unidos. Caçados por agentes federais e pelos melhores caçadores de recompensas, o grupo precisa roubar e lutar para sobreviver. Conforme divisões internas ameaçam despedaçar a gangue, Arthur enfrenta o dilema entre seus próprios ideais e a lealdade ao homem que o criou, em uma narrativa emocionante com realismo técnico sem precedentes.",
        nota: 9.7,
        extra: "Lançamento: 2018 | Desenvolvedora: Rockstar Games | Plataformas: PS4, Xbox One, PC"

    },
    {
        id: 6,  
        titulo: "Clube da Luta",
        categoria: "Filme",
        imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg",
        pequenadescrição: "Um trabalhador insone e um vendedor de sabão carismático criam um clube de luta subterrâneo que evolui para uma organização anarquista perigosa.",
        descrição: "O narrador, um homem comum sufocado pelo consumismo e pela insônia, vê sua vida mudar ao conhecer o enigmático Tyler Durden. Juntos, eles fundam o 'Clube da Luta', um espaço para homens extravasarem frustrações através da violência física. O movimento cresce e se transforma no 'Projeto Mayhem', uma rede terrorista anticonsumista que foge do controle, culminando em uma das reviravoltas mais icônicas da história do cinema.",
        nota: 9.0,
        extra: "Ano: 1999 | Diretor: David Fincher | Duração: 139 min"
  },
  {
      id: 7,
      titulo: "O Poderoso Chefão",
      categoria: "Filme",
      imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg",
      pequenadescrição: "A saga épica da família Corleone, liderada por Vito e depois por seu filho Michael, navegando pelo mundo do crime organizado.",
      descrição: "Vito Corleone é o poderoso chefe de uma família mafiosa ítalo-americana. Quando ele recusa um pedido de ajuda para entrar no tráfico de drogas, sua família é atacada, levando seu filho mais novo, Michael, a se envolver no negócio da família. O filme é uma exploração profunda de poder, lealdade e corrupção, mostrando a transformação de Michael de um outsider relutante para um implacável líder do crime.",
      nota: 9.2,
      extra: "Ano: 1972 | Diretor: Francis Ford Coppola | Duração: 175 min"
  },
  {
      id: 8,  
      titulo: "Game of Thrones",    
      categoria: "Série",
      imagem: "https://t2.tudocdn.net/237989?w=1920",
      pequenadescrição: "Intrigas políticas, batalhas épicas e dragões em uma luta pelo controle dos Sete Reinos de Westeros.",
      descrição: "Em um mundo onde as estações podem durar anos, várias famílias nobres lutam pelo controle do Trono de Ferro. A série é conhecida por suas reviravoltas chocantes, personagens complexos e uma narrativa que mistura fantasia medieval com intrigas políticas, explorando temas de poder, lealdade e sobrevivência em um cenário brutal e imprevisível.",
      nota: 8.6,
      extra: "Temporadas: 8 | Emissora: HBO | Ano: 2011-2019"
  },
  {
      id: 9,
      titulo: "The Legend of Zelda: Ocarina of Time",
      categoria: "Jogo",
      imagem: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_7/SI_N64_LegendOfZeldaOcarinaOfTime.jpg",
      pequenadescrição: "A jornada de Link para salvar a princesa Zelda e derrotar o malvado Ganondorf em um mundo de fantasia épico.",
      descrição: "Link, um jovem herói, é convocado para salvar o reino de Hyrule da ameaça de Ganondorf, um poderoso feiticeiro. Armado com a Ocarina do Tempo, Link viaja entre o passado e o futuro para reunir as forças necessárias para derrotar o mal. O jogo é aclamado por sua inovação em design de jogos 3D, narrativa envolvente e uma trilha sonora memorável, tornando-se um dos títulos mais influentes e amados da história dos videogames.",
      nota: 10,
      extra: "Lançamento: 1998 | Desenvolvedora: Nintendo | Plataformas: Nintendo 64"
  }
    
];


document.addEventListener('DOMContentLoaded', () => {
    // Identifica qual container existe na tela atual para rodar o script correto
    const homeContainer = document.getElementById('lista-itens');
    const detalhesContainer = document.getElementById('detalhes-item');

    if (homeContainer) {
        renderizarHome(homeContainer);
    }

    if (detalhesContainer) {
        renderizarDetalhes(detalhesContainer);
    }
});

function gerarEstrelas(nota) {
    const estrelas = Math.round(nota / 2);
    return '★'.repeat(estrelas) + '☆'.repeat(5 - estrelas);
}

function renderizarHome(container) {
    container.innerHTML = ''; 
    
    database.forEach(item => {

        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${item.imagem}" alt="Imagem de ${item.titulo}" class="card-img">
            <div class="card-content">
                <h2>${item.titulo}</h2>
                <p class="tag">${item.categoria}</p>
                <div class="rating">
                    <span class="stars">${gerarEstrelas(item.nota)}</span>
                    <span class="rating-value">${item.nota}</span>
                </div>
                <p>${item.pequenadescrição}</p>
                <a href="detalhes.html?id=${item.id}" class="btn">Ver Detalhes</a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function renderizarDetalhes(container) {

    const parametrosUrl = new URLSearchParams(window.location.search);
    const idItem = parseInt(parametrosUrl.get('id'));


    const itemEncontrado = database.find(item => item.id === idItem);

    if (itemEncontrado) {
        container.innerHTML = `
            <div class="detalhes-card">
                <img src="${itemEncontrado.imagem}" alt="${itemEncontrado.titulo}" class="detalhes-img">
                <div class="detalhes-info">
                    <h1>${itemEncontrado.titulo}</h1>
                    <p class="tag">${itemEncontrado.categoria}</p>
                    <div class="det-rating">
                        <span class="det-stars">${gerarEstrelas(itemEncontrado.nota)}</span>
                        <span class="det-rating-value">${itemEncontrado.nota}/10</span>
                    </div>
                    <div class="outras-informacoes">
                        <h3>Sobre</h3>
                        <p>${itemEncontrado.descrição}</p>
                        <hr>
                        <p><strong>Ficha Técnica:</strong> ${itemEncontrado.extra}</p>
                    </div>
                    <br>
                    <a href="index.html" class="btn btn-voltar">← Voltar para Home</a>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="erro">
                <h2>Item não encontrado!</h2>
                <p>O ID passado na URL não existe no nosso banco de dados.</p>
                <a href="index.html" class="btn">Voltar para Home</a>
            </div>
        `;
    }
}