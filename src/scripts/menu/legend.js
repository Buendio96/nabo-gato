import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { legendList } from './legendList'


let legendSwiperInstance = null

export const createdLegendSwiper = () => {
	const swiperContainer = document.getElementById('legendSwiper')


	const slidesHtml = legendList.map((item, index) => legendItem(item, index))
	swiperContainer.innerHTML = slidesHtml.join('')

	toggleBackground()
	scrollTo()

	const isMobile = window.innerWidth <= 1024

	if (isMobile) {
		legendSwiperInstance = new Swiper(".legendSwiper", {
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
		<a href="#${item.id}" data-i18n="legend.${index}" class="legend__link scrollTo">
			${item.text}
		</a>
	</li>
	`

const scrollTo = () => {
	const links = document.querySelectorAll('.scrollTo')

	links.forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault()
			const targetId = link.getAttribute('href').substring(1)

			const target = document.getElementById(targetId)

			if (target) {
				const position = targetId === 'all' ? 'start' : 'end'
				target.scrollIntoView({
					behavior: 'smooth',
					block: position
				})
			}
		})
	})
}


export const highlightActiveSection = () => {
	const sections = legendList.map(item => document.getElementById(item.id))
	const links = document.querySelectorAll('.legend__link')

	const observerOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.9
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const id = entry.target.id

			const link = document.querySelector(`.legend__link[href="#${id}"]`)
			if (!link) return

			if (entry.isIntersecting) {
				links.forEach(l => l.classList.remove('active-item'))
				link.classList.add('active-item')

				if (legendSwiperInstance) {
					const index = [...links].indexOf(link)
					legendSwiperInstance.slideTo(index)
				}
			}
		})
	}, observerOptions)

	sections.forEach(section => {
		if (section) {
			observer.observe(section)
		}
	})
}

const toggleBackground = () => {
	const stickyElement = document.querySelector('.legend')
	const targetElement = document.getElementById('menu')

	window.addEventListener('scroll', () => {
		const stickyRect = stickyElement.getBoundingClientRect()
		const targetRect = targetElement.getBoundingClientRect()

		const targetHeight = targetElement.offsetHeight
		const visibleBottom = targetRect.bottom
		const visibleRatio = visibleBottom / targetHeight

		const isNearEnd = visibleRatio < 0.02
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


