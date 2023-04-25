"use strict"

let modal = document.getElementById("formModal");


let bodyOverflow = document.body.style.overflow;

function disableScroll() {
	let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
	document.body.style.overflow = 'hidden';
	document.body.style.top = '-' + scrollPosition + 'px';
}

function enableScroll() {
	document.body.style.overflow = bodyOverflow;
	document.body.style.top = '0';
}

function openModal() {
	modal.style.display = "block";
	disableScroll();
}

function closeModal() {
	modal.style.display = "none";
	enableScroll();
}


// Валидация формы 
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const message = document.getElementById('message');
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function isValidEmail(email) {
	// регулярное выражение для проверки email
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
}

function submitForm() {
	event.preventDefault();
	const form = document.getElementById("inputForm");
	// проверяем поле Full Name
	if (fullName.value.trim() === '') {
		fullNameError.textContent = 'Введите имя';
	} else {
		fullNameError.textContent = '';
	}

	// проверяем поле Email
	if (email.value.trim() === '') {
		emailError.textContent = 'Введите email';
	} else if (!isValidEmail(email.value)) {
		emailError.textContent = 'Некорректный email';
	} else {
		emailError.textContent = '';
	}

	// проверяем поле Message
	if (message.value.trim() === '') {
		messageError.textContent = 'Введите сообщение';
	} else {
		messageError.textContent = '';
	}

	// Если всё ок, отправляем данные
	if (fullNameError.textContent === '' && emailError.textContent === '' && messageError.textContent === '') {
		let formData = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "submit.php", true);
		xhr.onload = function () {
			if (xhr.status === 200) {
				closeModal();
			} else {
				document.getElementById("error_msg").innerHTML = 'Ошибка при отправке формы Error: ' + xhr.status;
			}
		};
		xhr.send(formData);
	}

}
