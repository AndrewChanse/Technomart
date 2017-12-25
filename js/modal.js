// contact us
var modal = document.querySelector(".modal-window");
var open = document.querySelector(".aulost-btn");
var close = modal.querySelector("[name=exit-btn]");
var form = document.querySelector(".contact-form");
var login = modal.querySelector("[name=login-field]");
var email = modal.querySelector("[name=email-field]");
// googlemap
var mapcall = document.querySelector(".map-link");
var google = document.querySelector(".modal-content-map");
var mapclose = google.querySelector("[type=map-close]");
// 
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

mapcall.addEventListener("click", function(event) {
	event.preventDefault();
	google.classList.add("map-view");
});

mapclose.addEventListener("click", function(event) {
	event.preventDefault();
	google.classList.remove("map-view");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
	if (modal.classList.contains("form-view")) {
	modal.classList.remove("form-view");
	}
	if (modal.classList.contains("form-error")) {
		modal.classList.remove("form-error");
	}
	if (google.classList.contains("map-view")) {
		google.classList.remove("map-view");
	}
}
});

//--------------------CART-POPUP-------------
var buy = document.querySelectorAll(".buy-btn");
var addbookmark = document.querySelectorAll(".bookmark-btn");
var menumark = document.querySelector(".menu-bookmark");
var cartpopup = document.querySelector(".cartMessage");
var menucart = document.querySelector(".menu-cart");
var buyclose = document.querySelector("[type=message-close]");
var goshopping = cartpopup.querySelector(".cartMessage__btn-proceed");
var	overlay = document.querySelector(".modal-overlay");

[].forEach.call(buy,function(a) {
	a.addEventListener("click",function(a) {
		a.preventDefault(),
		cartpopup.classList.add("message-open"),
		overlay.classList.add("modal-overlay-view"),
		menucart.classList.add("menu-cart-added")
})});

[].forEach.call(addbookmark,function(b) {
	b.addEventListener("click",function(b) {
	b.preventDefault(),	
	menumark.classList.add("bookmark-added")
	}
)});

buyclose.addEventListener("click", function(event){
	event.preventDefault();
	cartpopup.classList.remove("message-open"),
	overlay.classList.remove("modal-overlay-view");
});

goshopping.addEventListener("click", function(event) {
	event.preventDefault();
	cartpopup.classList.remove("message-open"),
	overlay.classList.remove("modal-overlay-view");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
	if (cartpopup.classList.contains("message-open")) {
	cartpopup.classList.remove("message-open"),
	overlay.classList.remove("modal-overlay-view");
		}
	}
});