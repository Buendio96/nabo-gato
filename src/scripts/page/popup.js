import { showCookiesForm } from './cookies'
import { popupList } from './popupList'

const popupElement = document.getElementById('popup')

const openPopup = () => {
	popupElement.classList.add('show-popup')
	document.body.style.overflow = 'hidden'
}

const closePopup = () => {
	document.body.style.overflow = ''
	popupElement.classList.remove('show-popup')
}

const popup = (content) => {
	const contentConteiner = document.getElementById('popupContent')
	const closePopupBtn = document.getElementById('buttonClosePopup')

	if (
		!popupElement ||
		!contentConteiner ||
		!closePopupBtn
	) return

	contentConteiner.innerHTML = content

	closePopupBtn.addEventListener('click', closePopup)

}

export const showPopup = () => {
	const showPopupButtons = document.querySelectorAll(".footer__privacy-item")

	showPopupButtons.forEach(button => {
		button.addEventListener('click', (e) => {
			e.preventDefault()

			const key = button.getAttribute('data-popup-key')
			if (key === 'cookies') {
				showCookiesForm()
			} else if (popupList[key].text !== undefined && key !== 'cookies') {
				openPopup()
				popup(popupList[key].text)
			}
		})
	})
}