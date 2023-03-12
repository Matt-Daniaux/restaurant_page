/* eslint-disable no-unused-vars */
let div
let h2
let p

const templateInfo = (divContent) => {
    div = document.createElement('div')
    divContent.appendChild(div)

    h2 = document.createElement('h2')
    p = document.createElement('p')

    div.appendChild(h2)
    div.appendChild(p)
}

const description = (d) => {
    templateInfo(d)
    h2.textContent = 'Description'
    p.textContent = 'This amazing coffee bla bla bla'
}

const hour = (d) => {
    templateInfo(d)
    h2.textContent = 'hour'
    p.setAttribute('style', 'white-space: pre;')
    p.textContent = 'Sunday 8 to 13 \nMonday 8 to 13\nTuesday 8 to 13'
}

const homePage = (d) => {
    description(d)
    hour(d)
}

export { homePage }
