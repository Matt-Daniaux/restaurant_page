const menuTitle = document.createElement('h2')
menuTitle.textContent = 'Menu'

const menuTemplate = (item, price) => {
    const p = document.createElement('p')
    p.textContent = `${item} : ${price}`
    return { p }
}

const coffee = menuTemplate('Coffee', '2$')
const expresso = menuTemplate('Expresso', '2.50$')
const americano = menuTemplate('Americano', '3$')
const macchiato = menuTemplate('Macchiato', '4$')
const chaiLatte = menuTemplate('Chai Latte', '4$')

const divMenu = document.createElement('div')
divMenu.classList.add('menu')
divMenu.appendChild(coffee.p)
divMenu.appendChild(expresso.p)
divMenu.appendChild(americano.p)
divMenu.appendChild(macchiato.p)
divMenu.appendChild(chaiLatte.p)

const menu = (main) => {
    main.appendChild(menuTitle)
    main.appendChild(divMenu)
}

export default menu
