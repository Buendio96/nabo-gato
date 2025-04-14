import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { legendlist } from './legendList'

const legendItem = (item, index) =>
	`
	<li class="swiper-slide legend__item">
		<a href="#${item.id}" data-i18n="legend.${index}" class="legend__link">
			${item.text}
		</a>
	</li>
	`


export const createdLegendSwiper = () => {
	const swiperContainer = document.getElementById('legendSwiper')

	const slidesHtml = legendlist.map((item, index) => legendItem(item, index))
	swiperContainer.innerHTML = slidesHtml.join('')


	const isMobile = window.innerWidth <= 768

	if (isMobile) {
		const swiper = new Swiper(".legendSwiper", {
			slidesPerView: 3,
			spaceBetween: 10,
			modules: [Pagination],
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
		})
	}
}

