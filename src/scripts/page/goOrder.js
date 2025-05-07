export const loadGoOrderScript = () => {
	const script = document.createElement('script')
	script.src = 'https://store.goorder.pl/goorder.js'
	script.defer = true
	script.onload = () => {
		console.log('GoOrder script loaded')
	}
	script.onerror = () => {
		console.error('Failed to load GoOrder script')
	}
	document.head.appendChild(script)
}

