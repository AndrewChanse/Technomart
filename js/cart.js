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

