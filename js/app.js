document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
		`
	})
});

const buttonStart = document.querySelector('.button-start');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup-close');

buttonStart.addEventListener('click', e => {
	popup.classList.add('visible');
});

closeBtn.addEventListener('click', e => {
	popup.classList.remove('visible');
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' || e.key === 'Esc') {
		popup.classList.remove('visible');
	}
});


document.addEventListener('click', function(event) {
	if (!popup.contains(event.target) && !buttonStart.contains(event.target)) {
		popup.classList.remove('visible');
	}
});
