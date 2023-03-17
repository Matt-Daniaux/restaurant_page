import homePage from './homePage'
import { footer, header, homeBtn, contactBtn, menuBtn } from './headerFooter'
import contact from './contactPage'
import menu from './menuPage'

import './style.css'

// container
const body = document.querySelector('body')
const divContent = document.createElement('div')
body.appendChild(divContent)
divContent.setAttribute('id', 'content')

// main
const main = document.createElement('main')
main.classList.add('main')

// Change page feature
function mainEmpty() {
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild)
    }
}

// content
header(divContent)
divContent.appendChild(main)
homePage(main)

homeBtn.btn.addEventListener('click', () => {
    mainEmpty()
    homePage(main)
})
contactBtn.btn.addEventListener('click', () => {
    mainEmpty()
    contact(main)
})
menuBtn.btn.addEventListener('click', () => {
    mainEmpty()
    menu(main)
})

footer(divContent)

console.log('love')
