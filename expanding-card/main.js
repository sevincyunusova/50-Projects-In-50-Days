const panels = document.querySelectorAll ('.panel');
const container = document.querySelector('.container');

panels.forEach(panel =>{
    panel.addEventListener('click' , ()=>{
        removeActive()
        panel.classList.add('active');
    })
} );

function removeActive(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}










// const panels = document.querySelectorAll('.panel');

// panels.forEach(panel => {
//     panel.addEventListener('click', ()=>{
//         removeActive();
//         panel.classList.add('active');
//     })
// })

// function removeActive(){
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }