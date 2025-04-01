const burgerBtn = document.getElementById('burgerBtn')
const burgerMenu = document.getElementById('navigationList')


const toggleBurgerMenu = () => {
	if (burgerBtn && burgerMenu) {
		burgerBtn.addEventListener('click', () => {
			burgerMenu.classList.toggle('open-navigation')
		})
	}
}
toggleBurgerMenu()