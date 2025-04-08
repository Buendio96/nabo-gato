let isListenerAdded = false
const button = document.getElementById('contactsToggle')
const box = document.getElementById('contactsBox')
function handleResize() {
	const isMobile = window.innerWidth <= 850


	if (!button || !box) return

	if (isMobile && !isListenerAdded) {
		button.addEventListener('click', toggleBox)
		isListenerAdded = true
	} else if (!isMobile && isListenerAdded) {
		button.removeEventListener('click', toggleBox)
		isListenerAdded = false
	}
}

function toggleBox() {
	box.classList.toggle('active-box')
	button.classList.toggle('active-btn')
}

handleResize()

window.addEventListener('resize', handleResize)
