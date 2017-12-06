var contact = document.querySelector(".aulost-btn");
var modal = document.querySelector(".modal-window");
var close = modal.querySelector("[name=exit-btn]");
var login = modal.querySelector("[name=login-field]");
var email = modal.querySelector("[name=email-field]");
var form = document.querySelector(".contact-form");
var storage = localStorage.getItem("login");

contact.addEventListener("click", function(event) {
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
		console.log ("Нужно ввести логин и пароль!");
	}
	else {
		event.preventDefault();
		localStorage.setItem("login", login.value);
	}
	
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	modal.classList.remove("form-view");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (modal.classList.contains("form-view")) {
	modal.classList.remove("form-view");
	}
}

});