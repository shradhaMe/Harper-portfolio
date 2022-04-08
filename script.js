// when clicked toggle to show menu

const navElement = document.querySelector(`nav`)

navElement.addEventListener(`click`, function(event){
  if(event.target.tagName === `I`){
    showBurgerNav(event.target);
  }
}
)

function showBurgerNav(nav){
  nav.parentElement.classList.toggle(`burgerNavShow`)
}



