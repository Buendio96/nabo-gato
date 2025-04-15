import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import { allrgensList } from './allergensList'
import { menu } from './menuList'


export const getAllergensByIds = (ids) => {
	return allrgensList.filter(item => ids.includes(item.id))
}

const sectionSlide = (item, index) =>
	`
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
							<a href="#" class="menuSlide__button-add" data-i18n="button-add">+ Dodać</a>
						</div>
					</div>
				`



const menuSection = (item) => `
	<section class="menu__section" id="${item.id}">
        <h3 class="menu__section-title" data-i18n="menu.${item.id}.title">
			${item.title}
        </h3>
        <div class="menu__section-description">
			<p class="menu__description-text" data-i18n="menu.${item.id}.subtitle">
				${item.subtitle}
			</p>
			<button class="menu__description-button" data-i18n="button-all">
				Pokaż wszystko
			</button>
		</div>
        <div class="swiper menu__section-swiper">
			<div class="swiper-wrapper">
					${item.slides.map((slide, index) => sectionSlide(slide, index)).join('')}
			</div >
			<div class="menu__swiper-navigation">
				<div class="swiper-pagination"></div>
				<div class="menu__navigation-buttons">
					<div class="menu__buttons-btn swiper-button-prev">
						<img src="./src/assets/icons/left-arrow.svg" alt="LEFT">
					</div>
					<div class="menu__buttons-btn swiper-button-next">
						<img src="./src/assets/icons/right-arrow.svg" alt="RIGHT">
					</div>
				</div>
			</div>
		</div >
	</section >
	`


export const createdMenuSwipers = () => {
	const swiperContainer = document.getElementById('menu')

	const slidesHtml = menu.map(item => menuSection(item))
	swiperContainer.innerHTML = slidesHtml.join('')


	const swiper = new Swiper('.menu__section-swiper', {
		modules: [Navigation, Keyboard, Pagination],
		loop: true,
		slidesPerView: 5.1,
		spaceBetween: 32,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true
		}
	})
}

