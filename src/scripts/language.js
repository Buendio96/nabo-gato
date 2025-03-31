import i18next from 'i18next'
import lang_de from '../assets/icons/de.svg'
import lang_gb from '../assets/icons/gb.svg'
import lang_pl from '../assets/icons/pl.svg'
import lang_ua from '../assets/icons/ua.svg'
import langDE from '../locales/de'
import langEN from '../locales/gb'
import langPL from '../locales/pl'
import langUA from '../locales/ua'

const savedLanguage = localStorage.getItem('language') || 'pl'

document.documentElement.lang = savedLanguage

i18next.init({
	lng: savedLanguage,
	resources: {
		pl: {
			translation: langPL
		},
		en: {
			translation: langEN
		},
		ua: {
			translation: langUA
		},
		de: {
			translation: langDE
		}
	}
})

export function translateElements() {
	const elementsToTranslate = document.querySelectorAll('[data-i18n]')
	elementsToTranslate.forEach(element => {
		const key = element.dataset.i18n
		if (key) {
			element.textContent = i18next.t(key)
		}
	})
}

document.addEventListener('DOMContentLoaded', () => {
	translateElements()
	updateFlag()
})

const changeLanguageButton = document.getElementById('languageToggle')

const toggleLanguage = () => {
	const newLanguage = i18next.language === 'en' ? 'ua' : i18next.language === 'ua' ? 'de' : i18next.language === 'de' ? 'pl' : 'en'
	i18next.changeLanguage(newLanguage).then(() => {
		localStorage.setItem('language', newLanguage)
		document.documentElement.lang = newLanguage
		location.reload()
		translateElements()
		updateFlag()
	})
}

changeLanguageButton.addEventListener('click', () => {
	toggleLanguage()
})

function updateFlag() {
	const languageFlag = document.getElementById('languageFlag')
	switch (i18next.language) {
		case 'en':
			languageFlag.src = lang_gb
			languageFlag.alt = 'English'
			break
		case 'ua':
			languageFlag.src = lang_ua
			languageFlag.alt = 'Ukrainian'
			break
		case 'de':
			languageFlag.src = lang_de
			languageFlag.alt = 'German'
			break
		case 'pl':
			languageFlag.src = lang_pl
			languageFlag.alt = 'Polish'
			break
	}
}
