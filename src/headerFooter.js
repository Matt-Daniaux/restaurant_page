const button = (name) => {
    const btn = document.createElement('button')
    btn.setAttribute('type', 'button')
    btn.textContent = name
    return { btn }
}

const homeBtn = button('Home')
const contactBtn = button('Contact')
const menuBtn = button('Menu')

const header = (divContent) => {
    const headerTag = document.createElement('header')
    divContent.appendChild(headerTag)

    headerTag.appendChild(homeBtn.btn)
    headerTag.appendChild(contactBtn.btn)
    headerTag.appendChild(menuBtn.btn)

    homeBtn.btn.classList.add('home-btn')
    contactBtn.btn.classList.add('contact-btn')
    menuBtn.btn.classList.add('menu-btn')

    headerTag.classList.add('header')

    return { homeBtn }
}

const footer = (divContent) => {
    const footerTag = document.createElement('footer')
    const h4 = document.createElement('h4')
    h4.textContent = 'NameOfRestaurant'

    divContent.appendChild(footerTag)
    footerTag.appendChild(h4)

    footerTag.classList.add('footer')
}

export { header, homeBtn, contactBtn, menuBtn, footer }
