var contact = document.querySelector(".aulost-btn");
var modal = document.querySelector(".modal-window");
var close = modal.querySelector("[name=exit-btn]");
var login = modal.querySelector("[name=login-field]");
var email = modal.querySelector("[name=email-field]");
var form = document.querySelector(".contact-form");

contact.addEventListener("click", function(event) {
	event.preventDefault();
	modal.classList.add("form-view");
	login.focus();
});

form.addEventListener("submit", function(event) {
	event.preventDefault();
	console.log(login.value);
	console.log(email.value);
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	modal.classList.remove("form-view");
});