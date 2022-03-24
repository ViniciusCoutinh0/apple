const button = document.querySelector('#button-menu');

function toggle(event) {
    if (event.type === 'touchstart') {
        event.preventDefault();
    }

    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

button.addEventListener('click', toggle);
button.addEventListener('touchstart', toggle);