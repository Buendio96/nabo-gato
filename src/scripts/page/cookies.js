import image from '../../assets/images/communication/mapByDefault.png'

const cookies = localStorage.getItem('cookies')

export const checkCookies = () => {
	if (cookies !== 'true') {
		showCookiesForm()
		showMaps(false)
	} else {
		showMaps(true)
	}
}

export const showCookiesForm = () => {
	const cookiesForm = document.getElementById('cookies')
	const buttonAccept = document.getElementById('buttonAccept')
	const buttonDecline = document.getElementById('buttonDecline')
	const closeCookiesForm = document.getElementById('buttonCloseCookies')

	cookiesForm.classList.add('show-cookies')

	buttonAccept.addEventListener('click', () => {
		localStorage.setItem('cookies', 'true')
		cookiesForm.classList.remove('show-cookies')
		showMaps(true)
	})
	buttonDecline.addEventListener('click', () => {
		localStorage.setItem('cookies', 'false')
		cookiesForm.classList.remove('show-cookies')
		showMaps(false)
	})
	closeCookiesForm.addEventListener('click', () => {
		cookiesForm.classList.remove('show-cookies')
	})
}

const showMaps = (showMap) => {
	const gdanskMapContainer = document.getElementById('gdanskMap')
	const gdyniaMapContainer = document.getElementById('gdyniaMap')

	gdanskMapContainer.innerHTML = ''
	gdyniaMapContainer.innerHTML = ''

	if (showMap) {
		gdanskMapContainer.innerHTML = gdanskIframe
		gdyniaMapContainer.innerHTML = gdyniaIframe
	} else {
		gdanskMapContainer.appendChild(createImageElement())
		gdanskMapContainer.appendChild(createButtonElement())

		gdyniaMapContainer.appendChild(createImageElement())
		gdyniaMapContainer.appendChild(createButtonElement())
	}
}

const createImageElement = () => {
	const imgElement = document.createElement('img')
	imgElement.classList.add('byDefault')
	imgElement.src = image
	return imgElement
}
const createButtonElement = () => {
	const buttonElement = document.createElement('button')
	buttonElement.classList.add('showMap')
	buttonElement.textContent = 'Show Map'
	buttonElement.addEventListener('click', () => {
		showCookiesForm()
	})
	return buttonElement
}

const gdanskIframe = `
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.332779196162!2d18.584405977835562!3d54.351100272597684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd758be3491da3%3A0x9ea0b0b574d2209!2sNabogato%20Sushi%20Gda%C5%84sk!5e0!3m2!1sru!2spl!4v1745411735591!5m2!1sru!2spl"
		allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
	</iframe>
`
const gdyniaIframe = `
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2316.215941259519!2d18.536510977841534!3d54.51205297265038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda73228ada4fd%3A0x1faf7aeda4c98de9!2sNabogato%20Sushi%20Bar!5e0!3m2!1sru!2spl!4v1745412035018!5m2!1sru!2spl"
		allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
	</iframe>
`




