'use strict'

const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')

//Recorriendo todos lo li
li.forEach((cadaLi, i) => {
    //Asignando un Click a CADALI
    li[i].addEventListener('click', () => {
        
        //Recorrer TODOS los .li
        li.forEach((cadaLi, i) => {
            //Quitando la calse activo de cada li
            li[i].classList.remove('activo')
            //Quitando la calse activo de cada bloque
            bloque[i].classList.remove('activo')
        })

        //En el li que demos click le añadimos la clase activo
        li[i].classList.add('activo')
        //En el bloque que demos click le añadimos la clase activo
        bloque[i].classList.add('activo')

    })
})