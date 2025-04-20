import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import star from '../../assets/icons/star.svg'
import { opinionList } from './opinionList'

const opinionElement = (item) => {
	return `
	<div class="about__opinion-item swiper-slide">
                  <p class="about__item-person">
				 ${item.person} 
				  </p>
                  <p class="about__item-place">
				 ${item.place} 
				  </p>
                  <div class="about__item-stars">
                    <img src="${star}" alt="">
                    <img src="${star}" alt="">
                    <img src="${star}" alt="">
                    <img src="${star}" alt="">
                    <img src="${star}" alt="">
                  </div>
                  <p class="about__item-text">
				  ${item.text}
				  </p>
                </div>
	`
}

export const cretedTwoRandomOpinions = () => {
	const container = document.getElementById('opinion')

	function getTwoRandomItems(list) {
		const shuffled = [...list].sort(() => 0.5 - Math.random())
		return shuffled.slice(0, 2)
	}

	const randomOpinions = getTwoRandomItems(opinionList)
	const slidesHtml = randomOpinions.map(item => opinionElement(item))
	container.innerHTML = slidesHtml.join('')

}

export const createdOpinionsSwiper = () => {
	const swiperContainer = document.getElementById('aboutSwiper')

	const slidesHtml = opinionList.map(item => opinionElement(item))
	swiperContainer.innerHTML = slidesHtml.join('')

	const isMobile = window.innerWidth <= 850

	const swiper = new Swiper(".aboutSwiper", {
		modules: [Navigation, Keyboard, Pagination],
		spaceBetween: isMobile ? 20 : 32,
		slidesPerView: 3,
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
