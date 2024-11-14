
// Seleciona o menu hambúrguer e a nav-responsiva
const menuHamburguer = document.querySelector('.menu-hamburguer');
const navResponsive = document.querySelector('.nav-responsive');

// Adiciona um evento de clique no menu hambúrguer
menuHamburguer.addEventListener('click', () => {
    // Alterna a classe 'active' para o menu hambúrguer e o nav responsivo
    menuHamburguer.classList.toggle('active');
    navResponsive.classList.toggle('active');
});
