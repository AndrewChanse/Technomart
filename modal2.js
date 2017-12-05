var contact = document.querySelector(".btn-contact");
var modal = document.querySelector(".modal-content-form");
var close = document.querySelector(".modal-content-close");
var	namefield = modal.querySelector("[name=form-name]");
var	mailfield = modal.querySelector("[name=form-email]");
var form = modal.querySelector("contact-form");
var storage = localStorage.getItem("namefield");
var submit = modal.querySelector(".btn-submit");

contact.addEventListener("click", function(event) {
 event.preventDefault();
  modal.classList.add("modal-content-view");
  if (storage) {
	namefield.value = storage;
	mailfield.focus();
	} else {
	namefield.focus();
	}
  });

submit.addEventListener("click", function(event) {
	if (!namefield.value || !mailfield.value) {
		event.preventDefault();
		modal.classList.add("modal-error");
	} else {
	localStorage.setItem("namefield", namefield.value);
}
});

close.addEventListener("click", function(event) {
 event.preventDefault();
  modal.classList.remove("modal-content-view");
  modal.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
 	if (event.keyCode === 27) {
 		if (modal.classList.contains("modal-content-view"));
 		modal.classList.remove("modal-content-view");
 		modal.classList.remove("modal-error");
}
});