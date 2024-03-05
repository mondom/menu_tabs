const menuSections = document.querySelectorAll('.menu-section')
const menuButtons = document.querySelectorAll('.menu-tab')


const showInfo = id => {

    menuSections.forEach(section => {
        section.style.display = 'none'
        
    })

    const activeSection =  document.getElementById(id)

    activeSection.style.display = 'block'

    menuButtons.forEach(button => {
        button.classList.remove('menu-tab-active')
    })

    const activeButton = document.querySelector(`[data-id=${id}`)
    activeButton.classList.add('menu-tab-active')
}