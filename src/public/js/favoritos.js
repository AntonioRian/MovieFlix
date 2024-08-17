document.addEventListener('DOMContentLoaded', function() {
    const botaoFavorito = document.getElementById('favoriteBtn'); 
    if (botaoFavorito) {
        atualizarEstadoBotaoFavorito(); 
        botaoFavorito.addEventListener('click', alternarFavorito); 
    }

    if (window.location.pathname === '/favoritos') {
        renderizarFavoritos(); 
    }
});

function alternarFavorito() {
    const filmeId = this.dataset.id;
    const filmeTitulo = this.dataset.title;
    const filmePoster = this.dataset.poster;
    const filmeAno = this.dataset.year; // Obter o ano do filme

    let favoritos = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favoritos.findIndex(filme => filme.id === filmeId);

    if (index > -1) {
        favoritos.splice(index, 1);
        this.textContent = 'Adicionar aos Favoritos';
    } else {
        favoritos.push({ id: filmeId, title: filmeTitulo, poster: filmePoster, year: filmeAno }); 
        this.textContent = 'Remover dos Favoritos';
    }

    localStorage.setItem('favorites', JSON.stringify(favoritos));
    atualizarEstadoBotaoFavorito();
}

function atualizarEstadoBotaoFavorito() { 
    const botaoFavorito = document.getElementById('favoriteBtn');
    if (!botaoFavorito) return;

    const filmeId = botaoFavorito.dataset.id;
    const favoritos = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorito = favoritos.some(filme => filme.id === filmeId);

    botaoFavorito.textContent = isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos';
}

function renderizarFavoritos() { 
    const favoritosContainer = document.getElementById('favoritos-container');
    const favoritos = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favoritos.length === 0) {
        favoritosContainer.innerHTML = '<p class="text-center">Você ainda não tem filmes favoritos.</p>';
        return;
    }

        favoritosContainer.innerHTML = favoritos.map(filme => `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${filme.poster}" class="card-img-top" alt="Capa do filme ${filme.title}">
                    <div class="card-body">
                        <h5 class="card-title"> <a href="/filmes/${filme.id}" class="text-dark">${filme.title} (${filme.year}) </a></h5>
                    </div>
                </div>
            </div>
        `).join('');
}