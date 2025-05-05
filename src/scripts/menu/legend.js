import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { legendList } from './legendList'

export const createdLegendSwiper = () => {
	const swiperContainer = document.getElementById('legendSwiper')

	const slidesHtml = legendList.map((item, index) => legendItem(item, index))
	swiperContainer.innerHTML = slidesHtml.join('')
	toggleBackground()

	const isMobile = window.innerWidth <= 1024

	if (isMobile) {
		const swiper = new Swiper(".legendSwiper", {
			slidesPerView: 3,
			spaceBetween: 10,
			modules: [Pagination],
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
			breakpoints: {
				768: {
					slidesPerView: 5,
					spaceBetween: 16
				},
			}
		})
	}
}

const legendItem = (item, index) => `
	<li class="swiper-slide legend__item">
		<a href="#${item.id}" data-i18n="legend.${index}" class="legend__link">
			${item.text}
		</a>
	</li>
	`

const toggleBackground = () => {
	const stickyElement = document.querySelector('.legend')
	const targetElement = document.getElementById('menu')

	window.addEventListener('scroll', () => {
		const stickyRect = stickyElement.getBoundingClientRect()
		const targetRect = targetElement.getBoundingClientRect()

		const targetHeight = targetElement.offsetHeight
		const visibleBottom = targetRect.bottom
		const visibleRatio = visibleBottom / targetHeight

		const isNearEnd = visibleRatio < 0.2
		const isSticky = stickyRect.top <= 0

		if (isNearEnd) {
			stickyElement.classList.remove('background-active')
			stickyElement.style.position = 'relative'
			return
		}

		stickyElement.style.position = ''

		if (isSticky) {
			stickyElement.classList.add('background-active')
		} else {
			stickyElement.classList.remove('background-active')
		}
	})
}


