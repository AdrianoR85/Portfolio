const links =  document.querySelectorAll('.navegation__links ul li a')
const pages = document.querySelectorAll('.page')
const ageElem = document.querySelector('.info-item__age')

function changePage(menuName) {
    pages.forEach(page => {
        const pageId = page.id
        console.log(pageId)
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

function age(){
    const date = new Date()
    const currentDay = date.getDay()
    const currentMonth = date.getMonth() + 1
    const currentYear = date.getFullYear()
    let myAge = ''

    if(currentDay === 31 && currentMonth === 1 ) {
        myAge = currentYear - 1985
    } else {
        myAge = currentYear - 1985 - 1
    }

    ageElem.textContent = myAge
}

age()
