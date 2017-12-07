var modal = document.querySelector(".modal-window");
var open = document.querySelector(".aulost-btn");
var close = modal.querySelector("[name=exit-btn]");
var form = document.querySelector(".contact-form");
var login = modal.querySelector("[name=login-field]");
var email = modal.querySelector("[name=email-field]");
var form = document.querySelector(".contact-form");
var storage = localStorage.getItem("login");

open.addEventListener("click", function(event) {
	event.preventDefault();
	modal.classList.add("form-view");
if (storage) {
	login.value = storage;
	email.focus();
	}
	else {
	login.focus();	
	}
});

form.addEventListener("submit", function(event) {
	if (!login.value || !email.value) {
		event.preventDefault();
		modal.classList.add("form-error");
	}
	else {
		event.preventDefault();
		localStorage.setItem("login", login.value);
	}

});

close.addEventListener("click", function(event) {
	event.preventDefault();
	modal.classList.remove("form-view");
		if (modal.classList.contains("form-error")) {
		modal.classList.remove("form-error");
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
	if (modal.classList.contains("form-view")) {
	modal.classList.remove("form-view");
	}
	if (modal.classList.contains("form-error")) {
		modal.classList.remove("form-error");
	}
}
});