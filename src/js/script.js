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

function submitForm() {
	event.preventDefault();
	const form = document.getElementById("inputForm");
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
