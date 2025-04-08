import i18next from 'i18next'
import lang_de from '../assets/icons/de.svg'
import lang_gb from '../assets/icons/gb.svg'
import lang_pl from '../assets/icons/pl.svg'
import lang_ua from '../assets/icons/ua.svg'

import langDE from '../locales/de'
import langEN from '../locales/gb'
import langPL from '../locales/pl'
import langUA from '../locales/ua'

const mainImage = document.querySelector('.header__leng-toggle-image')
const dropdownElement = document.getElementById('languageDropdown')
const toggleButton = document.getElementById('languageButton')
const languagesElements = document.querySelectorAll('.header__leng-dropdown-item')

const savedLanguage = localStorage.getItem('language') || 'pl'
document.documentElement.lang = savedLanguage

i18next.init({
	lng: savedLanguage,
	resources: {
		pl: { translation: langPL },
		en: { translation: langEN },
		ua: { translation: langUA },
		de: { translation: langDE }
	}
})

const flags = {
	en: lang_gb,
	ua: lang_ua,
	de: lang_de,
	pl: lang_pl
}

function changeLanguage(newLanguage) {
	i18next.changeLanguage(newLanguage).then(() => {
		localStorage.setItem('language', newLanguage)
		document.documentElement.lang = newLanguage
		translateElements()
		updateMainFlag()
		updateLanguageList()
		toggleDropdown(true)
	})
}

export function translateElements() {
	const elementsForTranslate = document.querySelectorAll('[data-i18n]')

	elementsForTranslate.forEach(element => {
		const key = element.dataset.i18n
		if (key) element.innerHTML = i18next.t(key)
	})
}

function updateMainFlag() {
	if (mainImage) {
		mainImage.src = flags[i18next.language]
		mainImage.alt = i18next.language.toUpperCase()
	}
}
function updateLanguageList() {
	languagesElements.forEach(element => {
		element.style.display = element.dataset.lang === i18next.language ? 'none' : 'block'
	})
}

function toggleDropdown(forceClose = null) {
	if (dropdownElement) {
		if (forceClose === null) {
			dropdownElement.classList.toggle('open-leng-dropdown')
		} else {
			dropdownElement.classList.toggle('open-leng-dropdown', !forceClose)
		}
	}
}

toggleButton?.addEventListener('click', (e) => {
	e.stopPropagation()
	toggleDropdown()
})

languagesElements.forEach(element => {
	element.style.display = element.dataset.lang === savedLanguage ? 'none' : 'block'
	element.addEventListener('click', (e) => {
		e.stopPropagation()
		changeLanguage(element.dataset.lang)
	})
})

document.addEventListener('click', (e) => {
	if (!dropdownElement.contains(e.target) && e.target !== toggleButton) {
		toggleDropdown(true)
	}
})

document.addEventListener('DOMContentLoaded', () => {
	translateElements()
	updateMainFlag()
})


