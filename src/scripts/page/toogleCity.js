const confirmation = document.getElementById('city')
const buttonAnswerYes = document.getElementById('answerYes')
const buttonAnswerNo = document.getElementById('answerNo')
const toogleCityButtons = document.querySelectorAll('[data-cityIs]')


export let selectedCity = null

let choosenCityButton = null

export const checkCity = () => {
	if (!toogleCityButtons || !buttonAnswerNo || !buttonAnswerYes) return

	let city = ''

	const handleCityClick = (e) => {
		city = e.target.getAttribute('data-cityIs')
		showModal(city)
		choosenCityButton = e.target
	}

	toogleCityButtons.forEach(
		(btn) => btn.addEventListener('click', (e) => {
			handleCityClick(e)
		}))


	buttonAnswerYes.addEventListener('click', () => {
		setYes(city)
	})
	buttonAnswerNo.addEventListener('click', () => {
		setNo()
	})
}

const showModal = (city) => {
	confirmation.classList.add('show-city')
	document.body.style.overflow = 'hidden'

	const choosenCityElement = document.getElementById('cityIs')
	choosenCityElement.innerText = city
}


const setYes = () => {
	if (!choosenCityButton) return

	const city = choosenCityButton.getAttribute('data-cityIs')
	selectedCity = city

	toogleCityButtons.forEach((btn) => {
		btn.classList.remove('choosen-city')
		btn.disabled = false
	})

	choosenCityButton.disabled = true
	choosenCityButton.classList.add('choosen-city')

	confirmation.classList.remove('show-city')
	document.body.style.overflow = ''
}

const setNo = () => {
	confirmation.classList.remove('show-city')
	document.body.style.overflow = ''
}


