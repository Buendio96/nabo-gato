import { loadGoOrderScript } from './goOrder'

const confirmation = document.getElementById('city')
const buttonAnswerYes = document.getElementById('answerYes')
const buttonAnswerNo = document.getElementById('answerNo')
const toogleCityButtons = document.querySelectorAll('[data-cityIs]')

const menuModal = document.getElementById('menuModal')
const closeMenuModalButton = document.getElementById('menuModalCloseBtn')

export let selectedCity = null

let choosenCityButton = null
let city = ''

export const doOrder = () => {
	const goorderButtons = document.querySelectorAll('[data-i18n="button-add"]')

	goorderButtons.forEach(button => {
		button.addEventListener('click', () => {
			if (!selectedCity) {
				showCheckCityModal()
			}
		})
	})
}

export const checkCity = () => {
	if (!toogleCityButtons || !buttonAnswerNo || !buttonAnswerYes) return

	toogleCityButtons.forEach(
		(btn) => btn.addEventListener('click', (e) => {
			handleCityClick(e)
		}))

	buttonAnswerYes.addEventListener('click', () => {
		setYes()
	})
	buttonAnswerNo.addEventListener('click', () => {
		setNo()
	})
}

const cityLinks = {
	Gdynia: 'https://nabogatogdynia.goorder.pl',
	Gdansk: 'https://nabogatomorena.goorder.pl',
}

const showCheckCityModal = () => {
	if (!menuModal) return

	menuModal.classList.add('show-menu-modal')
	document.body.style.overflow = 'hidden'

	closeMenuModalButton.addEventListener('click', () => {
		menuModal.classList.remove('show-menu-modal')

	})

	toogleCityButtons.forEach(
		(btn) => btn.addEventListener('click', (e) => {
			handleCityClick(e)
		}))
}



const handleCityClick = (e) => {
	const mainId = e.target.getAttribute('data-main-id')
	const mainButton = mainId ? document.getElementById(mainId) : e.target

	city = mainButton.getAttribute('data-cityIs')
	showConfirmation(city)
	choosenCityButton = mainButton
}

const showConfirmation = (city) => {
	confirmation.classList.add('show-city')
	document.body.style.overflow = 'hidden'

	const choosenCityElement = document.getElementById('cityIs')
	choosenCityElement.innerText = city
}

const setYes = () => {
	if (!choosenCityButton) return

	selectedCity = city

	const goorderButtons = document.querySelectorAll('[data-i18n="button-add"]')

	const newLink = cityLinks[city] || ''
	goorderButtons.forEach(button => {
		button.setAttribute('data-src', newLink)
		button.setAttribute('data-goorder-open', '')
		button.setAttribute('data-goorder-modal', "1")
		button.classList.add('goorder')
	})
	loadGoOrderScript()

	toogleCityButtons.forEach((btn) => {
		btn.classList.remove('choosen-city')
		btn.disabled = false
	})

	choosenCityButton.disabled = true
	choosenCityButton.classList.add('choosen-city')

	confirmation.classList.remove('show-city')
	menuModal.classList.remove('show-menu-modal')
	document.body.style.overflow = ''
}

const setNo = () => {
	confirmation.classList.remove('show-city')
	document.body.style.overflow = ''
}

