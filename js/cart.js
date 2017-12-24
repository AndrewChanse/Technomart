var buy = document.querySelectorAll(".buy-btn");
var cartpopup = document.querySelector(".cartMessage");
var menucart = document.querySelector(".menu-cart");
var buyclose = document.querySelector("[type=message-close]");

[].forEach.call(buy,function(a){
	a.addEventListener("click",function(a){
		a.preventDefault(),
		cartpopup.classList.add("message-open"),
		menucart.classList.add("menu-cart-added")
})});

buyclose.addEventListener("click", function(event){
	event.preventDefault();
	cartpopup.classList.remove("message-open");
});




