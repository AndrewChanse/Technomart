var cartMessageCall = document.querySelector(".buy-btn");
var cartPopup = document.querySelector(".cartMessage");

cartMessageCall.addEventListener("click", function(event) {
	event.preventDefault();
	cartPopup.classList.add("message-open");
});