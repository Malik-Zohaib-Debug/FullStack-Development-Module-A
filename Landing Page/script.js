// get dom elements
const menuToggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

// add event listeners
menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click', () => {
    modal.classList.add('show-modal');
})

close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})

window.addEventListener('click', e => 
    e.target === modal ? modal.classList.remove('show-modal') : false
)