const aprendedores = document.getElementById('aprendedores');
const adultos = document.getElementById('adultos');
const jovenes = document.getElementById('jovenes');

const actaprendedores = document.getElementById('actaprendedores');
const actadultos = document.getElementById('actadultos');
const actjovenes = document.getElementById('actjovenes');

const desaprendedores = document.getElementById('desaprendedores');
const desadultos = document.getElementById('desadultos');
const desjovenes = document.getElementById('desjovenes');

actaprendedores.addEventListener('click', () => {
    aprendedores.classList.remove('ocultar');
})
desaprendedores.addEventListener('click',() => {
    aprendedores.classList.add('ocultar');
})
actadultos.addEventListener('click', () => {
    adultos.classList.remove('ocultar');
})
desadultos.addEventListener('click',() => {
    adultos.classList.add('ocultar');
})
actjovenes.addEventListener('click', () => {
    jovenes.classList.remove('ocultar');
})
desjovenes.addEventListener('click',() => {
    jovenes.classList.add('ocultar');
})