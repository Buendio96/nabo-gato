import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import left from '../../assets/icons/left-arrow.svg'
import right from '../../assets/icons/right-arrow.svg'
import { allrgensList } from './allergensList'
import { menu } from './menuList'


export const createdMenu = () => {
	const currentSpv = getCurrentSlidesPerView()

	const swiperContainer = document.getElementById('menu')

	const slidesHtml = menu.map(item => sectionElement(item, currentSpv))
	swiperContainer.innerHTML = slidesHtml.join('')

	toggleMoreInfo()

	document.querySelectorAll('.menu__section-swiper').forEach(section => {
		const parentSection = section.parentElement
		const button = parentSection.querySelector('.menu__description-button')

		const slides = section.querySelectorAll('.swiper-slide')
		const currentSpv = getCurrentSlidesPerView()
		const enableFeatures = slides.length > currentSpv


		const wrapper = section.querySelector('.menu__swiper-wrapper')
		const navigation = section.querySelector('.menu__swiper-navigation')

		const swiper = new Swiper(section, {
			spaceBetween: 15,
			slidesPerView: 1.1,
			modules: [Navigation, Pagination],
			navigation: enableFeatures ? {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			} : false,
			pagination: enableFeatures ? {
				el: ".swiper-pagination",
				clickable: true,
			} : false,
			breakpoints: breakpoints,
		})

		if (button) button.addEventListener('click', () => {
			wrapper.classList.toggle('show-all')
			navigation.classList.toggle('hidden')
			slides.forEach(slide => {
				slide.removeAttribute('style')
			})
			if (swiper.enabled) {
				swiper.slideTo(0, 0)
				swiper.disable()

			} else {
				swiper.enable()
			}
		})
	})
}

const toggleMoreInfo = () => {
	const infoBlocks = document.querySelectorAll('.menuSlide__info')

	infoBlocks.forEach(block => {
		block.addEventListener('click', (e) => {
			e.stopPropagation()

			const clickedDescription = block.querySelector('.menuSlide__info-description')

			const isAlreadyOpen = clickedDescription.classList.contains('show-more-info')

			document
				.querySelectorAll('.menuSlide__info-description.show-more-info')
				.forEach(item => {
					item.classList.remove('show-more-info')
					item.scrollTop = 0
				})
			if (!isAlreadyOpen) {
				clickedDescription.classList.add('show-more-info')
			}
		})
	})
}

const getCurrentSlidesPerView = () => {
	const width = window.innerWidth
	let currentSpv = 1.2

	Object.keys(breakpoints)
		.map(Number)
		.sort((a, b) => a - b)
		.forEach(bp => {
			if (width >= bp) {
				currentSpv = breakpoints[bp].slidesPerView
			}
		})
	return currentSpv
}

const breakpoints = {
	426: {
		slidesPerView: 2.1,
		spaceBetween: 20
	},
	769: {
		slidesPerView: 3.1,
		spaceBetween: 16
	},
	1025: {
		slidesPerView: 4.1,
		spaceBetween: 18
	},
	1300: {
		slidesPerView: 5.2,
		spaceBetween: 24
	}
}

const sectionElement = (item, currentSpv) => {
	const showNavigation = item.slides.length > currentSpv
	const isMobile = window.innerWidth <= 426

	return `
	<section class="menu__section" id="${item.id}">
		<h2 class="menu__section-title" data-i18n="menu.${item.id}.title">
			${item.title}
		</h2>
		<div class="menu__section-description">
			<p class="menu__description-text" data-i18n="menu.${item.id}.subtitle">
				${item.subtitle}
			</p>
			${showNavigation && !isMobile
			? `
				<button class="menu__description-button" data-i18n="button-all">
					Pokaż wszystko
				</button>
				`: ''
		}
		</div>
		<div class="swiper menu__section-swiper">
			<div class="swiper-wrapper menu__swiper-wrapper">
				${item.slides.map((slide, index) => slideElement(slide, index)).join('')}
			</div>
			${showNavigation ? `
				<div class="menu__swiper-navigation">
					<div class="swiper-pagination"></div>
					<div class="menu__navigation-buttons">
						<div class="menu__buttons-btn swiper-button-prev">
							<img src="${left}" alt="LEFT">
						</div>
						<div class="menu__buttons-btn swiper-button-next">
							<img src="${right}" alt="RIGHT">
						</div>
					</div>
				</div>` : ''
		}
		</div>
	</section>
	`
}

const slideElement = (item, index) => {
	const getAllergensByIds = (ids) => allrgensList.filter(item => ids.includes(item.id))

	return `
				<div class="swiper-slide menu__swiper-slide menuSlide">
						<div class="menuSlide__wrapper">
							<div class="menuSlide__image">
								<ul class="menuSlide__allergens">
									${getAllergensByIds(item.allergens).map(allergen => `
										<li class="menuSlide__allergens-item">
											<img src="${allergen.image}" alt="${allergen.text}" />
										</li>
									`).join('')}
								</ul>
								<img src="${item.image}" alt="${item.name}">
							</div>
							<div class="menuSlide__info">
								<h4 class="menuSlide__info-name" data-i18n='menu.${item.id}.slides.${index}.name'>${item.name}</h4>
								<span class="menuSlide__info-price">${item.price}</span>
								<p class="menuSlide__info-description" data-i18n='menu.${item.id}.slides.${index}.description'>${item.description}</p>
							</div>
							<a href="#" class="menuSlide__button-add" data-i18n="button-add"><span>+ Dodać</span></a>
						</div>
				</div>
`
}



