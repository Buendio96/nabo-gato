import { showCookiesForm } from './cookies'
import { popupList } from './popupList'

const popupElement = document.getElementById('popup')

export const showPopup = () => {
	const showPopupButtons = document.querySelectorAll(".footer__privacy-item")
	showPopupButtons.forEach(button => {
		button.addEventListener('click', (e) => {
			e.preventDefault()

			const lang = localStorage.getItem('language') || 'pl'
			const key = button.getAttribute('data-popup-key')

			const item = popupList[lang][key]

			if (key === 'cookies') {
				showCookiesForm()
			} else if (
				item !== undefined
				&& key !== 'cookies'
			) {
				openPopup()
				popup(item)
			}
		})
	})
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

const openPopup = () => {
	popupElement.classList.add('show-popup')
	document.body.style.overflow = 'hidden'
}

const closePopup = () => {
	popupElement.classList.remove('show-popup')
	document.body.style.overflow = ''
}



