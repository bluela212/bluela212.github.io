'use strick'

let btn = document.getElementById('main-button')
btn.onclick = nazwa

function nazwa() {
    alert(123)
};



function nazwaJakas() {
    prompt('hey')
}
let classBtn = document.getElementsByClassName('btn-primary')

for (let i=0; i < classBtn.length; i++) {
    if (classBtn[i].innerHTML === 'Dalej') {
        classBtn[i].onclick = nazwaJakas
    }
    classBtn[i].innerHTML = 'hey'
}