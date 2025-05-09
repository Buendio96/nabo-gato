const burgerBtn = document.getElementById('burgerBtn')
const burgerMenu = document.getElementById('navigationList')


export const toggleBurgerMenu = () => {
	if (burgerBtn && burgerMenu) {
		burgerBtn.addEventListener('click', () => {
			burgerMenu.classList.toggle('open-navigation')

			burgerMenu.classList.contains('open-navigation')
				? document.body.style.overflow = 'hidden'
				: document.body.style.overflow = ''
		})
	}
}