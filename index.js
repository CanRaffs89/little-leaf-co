// Menu Toggle function
function menuToggle() {
    document.querySelector('.side-menu').classList.toggle('side-menu-open');
}

// Add event listener to menu button
document.querySelector('.menu-toggle')
    .addEventListener('click', menuToggle);