import '@scripts/header/burger'
import '@scripts/header/contactsButton'
import '@scripts/header/language'
import '@scripts/hero/heroSwiper'
import { toggleBurgerMenu } from './scripts/header/burger'
import { handleResize } from './scripts/header/contactsButton'
import { translateElements, updateMainFlag } from './scripts/header/language'
import { createdHeroSwiper } from './scripts/hero/heroSwiper'
import { createdAllergensList } from './scripts/menu/allergens'
import { createdLegendList } from './scripts/menu/legend'
import './style.scss'

document.addEventListener("DOMContentLoaded", () => {
	toggleBurgerMenu()
	createdHeroSwiper()
	createdLegendList()
	handleResize()
	createdAllergensList()

	translateElements()
	updateMainFlag()

	window.addEventListener('resize', handleResize)
})
