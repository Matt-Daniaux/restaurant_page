const pageTitle = document.createElement('h2')
pageTitle.textContent = 'Information'

const div = document.createElement('div')
div.classList.add('contact-info')

const divImg = document.createElement('div')
divImg.classList.add('contact-img')

const template = (string) => {
    const p = document.createElement('p')
    p.classList.add('contact-info')
    p.textContent = string
    return { p }
}

const coffeeArt = template('CoffeeArt')
const address = template('3405 Best Coffee In The World, CoffeeLand, 73091')
const tel = template('coffee-339234')
const email = template('coffeeArt@love.coffee')

div.appendChild(coffeeArt.p)
div.appendChild(address.p)
div.appendChild(tel.p)
div.appendChild(email.p)

const contact = (main) => {
    main.appendChild(pageTitle)
    main.appendChild(div)
    main.appendChild(divImg)
}

export default contact
