console.log('Its working')

let theme = localStorage.getItem('theme')

let sunButton = document.getElementById("sun")
let moonButton = document.getElementById("moon")

let toggleButtons = document.getElementsByClassName("buttonToggle")

if (theme == null) {
	setTheme('light')
} else {
	setTheme(theme)
}

for (var i = 0; i < toggleButtons.length; i++) {
	toggleButtons[i].addEventListener('click', getMode, false);
}

function getMode() {
	let mode = this.dataset.mode
	console.log('Option clicked:', mode)
	setTheme(mode)
}

function setTheme(mode) {
	if (mode === 'light') {
		document.getElementById('theme-style').href = 'default.css'
		sunButton.style.display = "none"
		moonButton.style.display = "block"
	}

	if (mode === 'dark') {
		document.getElementById('theme-style').href = 'dark.css'
		moonButton.style.display = "none"
		sunButton.style.display = "block"
	}

	localStorage.setItem('theme', mode)
}