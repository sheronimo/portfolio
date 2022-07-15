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
