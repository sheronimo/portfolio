// Navigation
const primaryNav = document.querySelector('#primary-nav');
const toggle = document.querySelector('#nav-toggle');

toggle.addEventListener('click', () => {
	primaryNav.classList.toggle('visible');
	toggle.classList.toggle('flip');

	toggle.classList.contains('flip')
		? toggle.setAttribute('aria-expanded', true)
		: toggle.setAttribute('aria-expanded', false);
});

// Dark Mode
let darkMode = localStorage.getItem('darkMode');
const modeToggle = document.querySelector('#mode-toggle');

if (darkMode === 'enabled') {
	enableDarkMode();
}

modeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');

	if (darkMode === 'enabled') {
		disableDarkMode();
	} else {
		enableDarkMode();
	}
});

function enableDarkMode() {
	document.body.classList.add('darkmode');
	localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
	document.body.classList.remove('darkmode');
	localStorage.setItem('darkMode', 'disabled');
}
