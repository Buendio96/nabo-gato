import { allrgensList } from './allergensList'

export const createdAllergensList = () => {
	const list = document.getElementById("allergensList")

	list.innerHTML = ""

	allrgensList.forEach(({ id, text }, index) => {
		const li = document.createElement("li")
		li.classList.add("legend__allergens-item")


		const span = document.createElement("span")
		span.setAttribute("data-i18n", `allergens.${index}`)
		span.textContent = text


		const div = document.createElement("div")

		const img = document.createElement("img")
		img.src = `/src/assets/icons/allergens/${id}.svg`
		img.classList.add("legend__allergens-icon")


		li.appendChild(img)
		li.appendChild(span)
		list.appendChild(li)
	})
}

