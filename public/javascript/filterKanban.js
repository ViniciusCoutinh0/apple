const filters = document.querySelectorAll('[data-task-bind]');
const clearButton = document.querySelector('#clear');

function run(event) {
    let target = event.target;
    let targetData = target.getAttribute('data-task-bind');

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let value = card.getAttribute('data-task-bindTo');

        if (value != targetData) {
            card.classList.add('d-none');
            return;
        }

        card.classList.remove('d-none');
    });

    target.classList.remove('active');
}

function clear() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('d-none'));
}

filters.forEach(filter => {
    filter.addEventListener('click', run);
});

clearButton.addEventListener('click', clear);