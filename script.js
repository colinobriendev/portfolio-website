console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let moonButton = document.getElementById('moon')
let sunButton = document.getElementById('sun')

sunButton.addEventListener('click', function(){
	let mode = this.dataset.mode
	console.log('Option clicked:', mode)
	setTheme(mode)
})

moonButton.addEventListener('click', function(){
	let mode = this.dataset.mode
	console.log('Option clicked:', mode)
	setTheme(mode)
})

function setTheme(mode){
	if (mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if (mode == 'dark'){
        document.getElementById('theme-style').href = 'dark.css'
    }
}