import { allrgensList } from './allergensList.js'

export const createdAllergensList = () => {
	const list = document.getElementById("allergensList")

	list.innerHTML = ""

	allrgensList.forEach(({ text, image }, index) => {
		const li = document.createElement("li")
		li.classList.add("legend__allergens-item")


		const span = document.createElement("span")
		span.setAttribute("data-i18n", `allergens.${index}`)
		span.textContent = text


		const img = document.createElement("img")
		img.src = image
		img.classList.add("legend__allergens-icon")


		li.appendChild(img)
		li.appendChild(span)
		list.appendChild(li)
	})
}

