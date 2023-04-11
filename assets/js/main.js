const links =  document.querySelectorAll('.navegation__links ul li a')
const pages = document.querySelectorAll('.page')

function changePage(menuName) {
    pages.forEach(page => {
        const pageId = page.id

        if(menuName === pageId) {
            addClass(page, 'show')
        } else {
            page.classList.remove('show')
        }
    })
}

function addClass(elementName, className) {
    elementName.classList.add(className)
}

function removeClass() {
    links.forEach(link => {
        link.classList.remove('active')
    })
}

links.forEach(link => {
    link.addEventListener('click', () => {
        const nameClassOfMenu = link.getAttribute('href').split('#')[1]
        removeClass()
        addClass(link, 'active')
        changePage(nameClassOfMenu)
    })
})
