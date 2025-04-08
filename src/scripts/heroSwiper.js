import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import { banerList } from './banerList'

const sliderItem = (item) => `
	<div class="swiper-slide heroSwiper__slide heroSlide ${item.name}">
		<div class="heroSlide__wrapper">
			<div class="heroSlide__front  ${item.name}__front">
				<img class="heroSlide__logo ${item.name}__logo" src="./logo.svg" alt="logo">
				<div class="heroSlide__description ${item.name}__description">
					<h2 class="heroSlide__description-title" data-i18n="${item.name}.title">${item.title}</h2>
					<p class="heroSlide__description-text" data-i18n="${item.name}.description">${item.description}</p>
				</div>
				<div class="heroSlide__box ${item.name}__box">
				<img onerror="this.onerror=null;this.src='/src/assets/images/hero/default.png'"  class="heroSlide__box-img" src="/src/assets/images/hero/${item.image || 'default.png'}" alt="">
				</div >
			</div >
	<div class="heroSlide__back">
		<h3 class="heroSlide__back-title ${item.name}__back-title" data-i18n="${item.name}.backTitle">${item.backTitle}</h3>
		<div class="heroSlide__back-text ${item.name}__back-text">
			${item.backTexts.map((text, index) => `<p data-i18n="${item.name}.backText.${index}">${text}</p>`).join('')}
		</div>
	</div>
		</div >
	</div >
	`

document.addEventListener('DOMContentLoaded', () => {
	const swiperContainer = document.getElementById('heroSwiper')

	const slidesHtml = banerList.map(item => sliderItem(item))
	swiperContainer.innerHTML = slidesHtml.join('')

	const isMobile = window.innerWidth <= 850

	const swiper = new Swiper(".heroSwiper", {
		modules: [Navigation, Keyboard, Pagination],
		spaceBetween: isMobile ? 20 : 32,
		slidesPerView: isMobile ? 1 : 1.3,
		loop: true,
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

})


