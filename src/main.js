import { initAboutSection } from './scripts/about/about'
import { toggleBurgerMenu } from './scripts/header/burger'
import { handleResize } from './scripts/header/contactsButton'
import { translateElements, updateMainFlag } from './scripts/header/language'
import { createdHeroSwiper } from './scripts/hero/heroSwiper'
import { createdAllergensList } from './scripts/menu/allergens'
import { createdLegendSwiper } from './scripts/menu/legend'
import { createdMenu } from './scripts/menu/menu'
import { checkCookies } from './scripts/page/cookies'
import { showPopup } from './scripts/page/popup'
import './style.scss'

document.addEventListener("DOMContentLoaded", () => {
	checkCookies()

	toggleBurgerMenu()
	updateMainFlag()
	handleResize()

	createdHeroSwiper()

	createdLegendSwiper()
	createdAllergensList()

	createdMenu()

	initAboutSection()
	showPopup()

	window.addEventListener('resize', handleResize)
	translateElements()

})
