'use strict'

const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')
const liAp = document.querySelectorAll('.seg-ap-li')
const bloqueAp = document.querySelectorAll('.seg-ap-bloque')
const liAd = document.querySelectorAll('.seg-ad-li')
const bloqueAd = document.querySelectorAll('.seg-ad-bloque')
const liJo = document.querySelectorAll('.seg-jo-li')
const bloqueJo = document.querySelectorAll('.seg-jo-bloque')
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
// liAp.forEach((cadaLi, i) => {
//     liAp[i].addEventListener('click', () => {
//         liAp.forEach((cadaLi, i) => {
//             liAp[i].classList.remove('seg-activo')
//             bloqueAp[i].classList.remove('seg-activo')
//         })
//         liAp[i].classList.add('seg-activo')
//         bloqueAp[i].classList.add('seg-activo')
//     })
// })
liJo.forEach((cadaLi, i) => {
    liJo[i].addEventListener('click', () => {
        liJo.forEach((cadaLi, i) => {
            liJo[i].classList.remove('seg-activo')
            bloqueJo[i].classList.remove('seg-activo')
        })
        liJo[i].classList.add('seg-activo')
        bloqueJo[i].classList.add('seg-activo')
    })
})

liAd.forEach((cadaLi, i) => {
    liAd[i].addEventListener('click', () => {
        liAd.forEach((cadaLi, i) => {
            liAd[i].classList.remove('seg-activo')
            bloqueAd[i].classList.remove('seg-activo')
        })
        liAd[i].classList.add('seg-activo')
        bloqueAd[i].classList.add('seg-activo')
    })
})