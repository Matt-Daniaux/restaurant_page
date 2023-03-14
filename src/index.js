import homePage from './homePage'
import { footer, header } from './headerFooter'
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

// content

header(divContent)
divContent.appendChild(main)

/* homePage(main) */
/* contact(main) */
menu(main)

footer(divContent)

console.log('love')
