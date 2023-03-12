import { homePage } from './homePage'

// container
const body = document.querySelector('body')
const divContent = document.createElement('div')
body.appendChild(divContent)
divContent.setAttribute('id', 'content')

// Homepage
homePage(divContent)

console.log('love')
