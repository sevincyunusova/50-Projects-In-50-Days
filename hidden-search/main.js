const btn = document.querySelector('.btn');
const input = document.getElementById('input')
const search = document.querySelector('.search');


btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})
