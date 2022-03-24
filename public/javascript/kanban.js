const cards = document.querySelectorAll('.card');
const boards = document.querySelectorAll('.board');

function dragstart() {
    boards.forEach(board => board.classList.add('highlight'));

    this.classList.add('is-dragging');
}

function drag() {
    //TODO:
}

function dragend() {
    boards.forEach(board => board.classList.remove('highlight'));
    this.classList.remove('is-dragging');
}


function dragenter() {
    this.classList.add('over');
}

function dragover(event) {
    if (event.preventDefault()) {
        event.preventDefault();
    }

    return false;
}

function dragleave() {
    this.classList.remove('over');
}

function drop(event) {
    event.stopPropagation();

    const draggedCard = document.querySelector('.is-dragging');

    draggedCard.style.cursor = 'grabbing';

    this.appendChild(draggedCard);

    this.classList.remove('over');
}

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

boards.forEach(board => {
    board.addEventListener('dragenter', dragenter);
    board.addEventListener('dragover', dragover);
    board.addEventListener('dragleave', dragleave);
    board.addEventListener('drop', drop);
});