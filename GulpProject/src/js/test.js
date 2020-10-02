'use strict';

const btnElm =  document.querySelector('#services__menu')
const btnElmHome =  document.querySelector('#home__menu')

btnElm.addEventListener('click', () =>{
    const homeSection = document.querySelector('#home')
    homeSection.className = 'disappear'
})

btnElmHome.addEventListener('click', () =>{
    const homeSection = document.querySelector('#home')
    homeSection.className = 'home'
})