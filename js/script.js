const toggle = document.getElementById("toggle")

toggle.addEventListener("click", () => {
    document.body.classList.toggle("toggle-between")
})



const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');



// Show modal
open.addEventListener('click', () => modal.classList.add('show'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show'));

// Hide modal on outside click
window.addEventListener('click', e =>
    e.target == modal ? modal.classList.remove('show') : false
);