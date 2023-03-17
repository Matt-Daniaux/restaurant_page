/* eslint-disable no-unused-vars */
export const templateInfo = () => {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    div.appendChild(h3)
    div.appendChild(p)

    return { div, h3, p }
}

const coffeeName = document.createElement('h1')
coffeeName.textContent = 'CoffeeArt'

const description = templateInfo()
description.div.classList.add('description')
description.h3.textContent = ''
description.p.textContent =
    'Come to our\nawesome coffee \nto enhance your creativity and\nto enjoy the best produce\nin the area.'

const hour = templateInfo()
hour.div.classList.add('hour')
hour.h3.textContent = 'Hour'
hour.p.setAttribute('style', 'white-space: pre;')
hour.p.textContent =
    'Sunday 8 to 13 \nMonday 8 to 13\nTuesday 8 to 13\nWednesday 8 to 13\nThursday 8 to 13\nFriday 8 to 13\nSaturday 8 to 13'

const divImg = () => {
    const div = document.createElement('div')
    return { div }
}

const coffeeMakerImage = divImg()
coffeeMakerImage.div.classList.add('img-coffee-maker')

const coffeeBookImage = divImg()
coffeeBookImage.div.classList.add('img-coffee-book')

const homePage = (main) => {
    main.appendChild(coffeeName)
    main.appendChild(description.div)
    main.appendChild(coffeeMakerImage.div)
    main.appendChild(coffeeBookImage.div)
    main.appendChild(hour.div)
}

export default homePage
