import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Keyboard, Navigation, Pagination } from 'swiper/modules'


document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper(".heroSwiper", {
		modules: [Navigation, Keyboard, Pagination],
		spaceBetween: 32,
		slidesPerView: 1.2,
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

const sliderItem = (item) => {

}