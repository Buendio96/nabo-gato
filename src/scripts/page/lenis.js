import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
const links = document.querySelectorAll('.scrollTo')

const body = document.querySelector('.body')

const lenis = new Lenis({
	duration: 1.2, // Продолжительность анимации прокрутки в секундах (по умолчанию: 1.2)
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Функция easing (по умолчанию: easeOutCubic)
	smoothWheel: true, // Включает/выключает плавную прокрутку колесом мыши (по умолчанию: true)
	smoothTouch: false, // Включает/выключает плавную прокрутку при касании (по умолчанию: false)
	direction: 'vertical', // Направление прокрутки: 'vertical' или 'horizontal' (по умолчанию: 'vertical')
	gestureDirection: 'both', // Направление жестов прокрутки: 'vertical', 'horizontal', 'both' (по умолчанию: 'both')
	infinite: false, // Включает/выключает бесконечную прокрутку (по умолчанию: false)
	lerp: 0.1, // Коэффициент интерполяции для более "вязкой" прокрутки (от 0 до 1)
	wrapper: window, // Элемент-обертка, к которому применяется прокрутка (по умолчанию: window)
	content: body, // Элемент с контентом для определения размеров прокрутки (по умолчанию: document.documentElement)
})

const raf = (time) => {
	lenis.raf(time)
	requestAnimationFrame(raf)
}

export const smoothScroll = () => {
	requestAnimationFrame(raf)
	if (links) {
		links.forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault()
				const targetEl = link.getAttribute('href')
				if (targetEl) {
					lenis.scrollTo(targetEl)
				}
			})
		})
	}
}
