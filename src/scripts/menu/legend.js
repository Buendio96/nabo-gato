import { legendlist } from './legendList.js'


export const createdLegendList = () => {
	const list = document.getElementById("legendList")

	list.innerHTML = ""

	legendlist.forEach(({ id, text }, index) => {
		const li = document.createElement("li")
		li.classList.add("legend__item")

		const a = document.createElement("a")
		a.href = `#${id}`
		a.classList.add("legend__link")

		a.setAttribute("data-i18n", `legend.${index}`)
		a.textContent = text

		li.appendChild(a)
		list.appendChild(li)
	})
}
