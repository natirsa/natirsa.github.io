const menuBtn = document.getElementById('menu-button')
const menu = document.getElementById('menu')
function menuAction(){
    let menuState = 'closed'
    if(menuState === 'closed'){
        menuState = 'open'
        menu.classList.toggle(menuState)
        menuBtn.classList.toggle(menuState) 
    }else if(menuState === 'open'){
        menuState = 'closed'
        menu.classList.toggle(menuState)
        menuBtn.classList.toggle(menuState) 
    }
}