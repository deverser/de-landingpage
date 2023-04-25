"use strict"

let modal = document.getElementById("formModal");

function openModal() {
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
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