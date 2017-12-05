var contact = document.querySelector(".aulost-btn");
var modal = document.querySelector(".contact-form");
var close = modal.querySelector("[name=exit-btn]");
var login = modal.querySelector("[name=login-field]");
var form = document.querySelector(".contact-form")

contact.addEventListener("click", function(event) {
	event.preventDefault();
	modal.classList.add("form-view");
	login.focus();
});

form.addEventListener("submit", function(event) {
	event.preventDefault();
})

close.addEventListener("click", function(event) {
	event.preventDefault();
	modal.classList.remove("form-view");
});