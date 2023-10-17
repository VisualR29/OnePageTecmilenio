'use strict'

const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')
const lista = document.querySelectorAll('.seg-li')
const bloques = document.querySelectorAll('.seg-bloque')
//Recorriendo todos lo li
li.forEach((cadaLi, i) => {
    //Asignando un Click a CADALI
    li[i].addEventListener('click', () => {
        //Recorrer TODOS los .li
        li.forEach((cadaLi, i) => {
            //Quitando la calse activo de cada li
            li[i].classList.remove('activo')
            //Quitando la calse activo de cada bloque
            bloque[i].classList.remove('activo')})
        //En el li que demos click le añadimos la clase activo
        li[i].classList.add('activo')
        //En el bloque que demos click le añadimos la clase activo
        bloque[i].classList.add('activo')
    })
})
lista.forEach((cadaLi, i) => {
    lista[i].addEventListener('click', () => {
        lista.forEach((cadaLi, i) => {
            lista[i].classList.remove('seg-activo')
            bloques[i].classList.remove('seg-activo')
        })
        lista[i].classList.add('seg-activo')
        bloques[i].classList.add('seg-activo')
    })
})