import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Grid, Keyboard, Navigation, Pagination } from 'swiper/modules'
import star from '../../assets/icons/star.svg'
import { opinionList } from './opinionList'

export const initAboutSection = () => {
	cretedTwoRandomOpinions()
	createdOpinionsSwiper()
	toggleMoreOpinions()
	showFullOpinion()
}

const cretedTwoRandomOpinions = () => {
	const container = document.getElementById('opinion')

	function getTwoRandomItems(list) {
		const shuffled = [...list].sort(() => 0.5 - Math.random())
		return shuffled.slice(0, 2)
	}

	const randomOpinions = getTwoRandomItems(opinionList)
	const slidesHtml = randomOpinions.map(item => opinionElement(item, false))
	container.innerHTML = slidesHtml.join('')
}

const createdOpinionsSwiper = () => {
	const swiperContainer = document.getElementById('aboutSwiper')

	const slidesHtml = opinionList.map(item => opinionElement(item, true))
	swiperContainer.innerHTML = slidesHtml.join('')


	const swiper = new Swiper(".aboutSwiper", {
		modules: [Navigation, Keyboard, Pagination, Grid],
		spaceBetween: 10,
		slidesPerView: 1,
		grid: {
			rows: 3,
			fill: 'row',
		},
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
		},
		breakpoints: {
			500: {
				slidesPerView: 2,
				spaceBetween: 12,

			},
			769: {
				slidesPerView: 3,
				spaceBetween: 12,
				grid: {
					rows: 2,
				},
			}
		}
	})
}

const toggleMoreOpinions = () => {
	const openButton = document.getElementById('buttonShowMoreOpinion')
	const closeButton = document.getElementById('buttonCloseMoreOpinion')
	const firstElement = document.getElementById('aboutImage')
	const secondElement = document.getElementById('aboutContent')
	const targetForToggle = document.getElementById('aboutBack')
	const aboutBody = document.getElementById('aboutBody')

	if (
		!openButton
		|| !closeButton
		|| !firstElement
		|| !secondElement
		|| !targetForToggle
		|| !aboutBody
	) return

	openButton.addEventListener('click', () => {
		firstElement.classList.add('move-to-left')
		secondElement.classList.add('move-to-right')
		targetForToggle.classList.add('show-back')
		aboutBody.classList.add('expanded')

	})
	closeButton.addEventListener('click', () => {
		firstElement.classList.remove('move-to-left')
		secondElement.classList.remove('move-to-right')
		targetForToggle.classList.remove('show-back')
		aboutBody.classList.remove('expanded')
	})
}

const showFullOpinion = () => {
	const opinionItems = document.querySelectorAll('.about__opinion-item')

	opinionItems.forEach(item => {
		item.addEventListener('click', (e) => {
			e.stopPropagation()
			const textBLock = item.querySelector('.about__item-text')

			const isAlreadyOpen = textBLock.classList.contains('show-full-opinion')

			document
				.querySelectorAll('.about__item-text.show-full-opinion')
				.forEach(item => {
					item.classList.remove('show-full-opinion')
					item.scrollTop = 0
				})

			if (!isAlreadyOpen) {
				textBLock.classList.add('show-full-opinion')
			}
		})
	})
}

const opinionElement = (item, allItems = false) =>
	`
	<div class="about__opinion-item ${allItems ? 'swiper-slide' : ''} ">
  <div class="about__item-wrapper">
    <div class="about__item-header">
      <p class="about__item-person">
        ${item.person}
      </p>
      <div class="about__item-stars">
        ${Array(5).fill(`<img src="${star}" alt="star">`).join('')}
      </div>
    </div>
    <p class="about__item-place">
      ${item.place}
    </p>
    <p class="about__item-text">
      ${item.text}
    </p>
   </div>
</div>
	`





