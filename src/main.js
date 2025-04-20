import { createdOpinionsSwiper, cretedTwoRandomOpinions } from './scripts/about/about'
import { toggleBurgerMenu } from './scripts/header/burger'
import { handleResize } from './scripts/header/contactsButton'
import { translateElements, updateMainFlag } from './scripts/header/language'
import { createdHeroSwiper } from './scripts/hero/heroSwiper'
import { createdAllergensList } from './scripts/menu/allergens'
import { createdLegendSwiper } from './scripts/menu/legend'
import { createdMenu } from './scripts/menu/menu'
import './style.scss'

document.addEventListener("DOMContentLoaded", () => {
	toggleBurgerMenu()
	updateMainFlag()
	handleResize()
	translateElements()

	createdHeroSwiper()

	createdLegendSwiper()
	createdAllergensList()

	createdMenu()

	cretedTwoRandomOpinions()
	createdOpinionsSwiper()

	window.addEventListener('resize', handleResize)
})
