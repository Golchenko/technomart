var deliveryMenu = document.querySelector(".delivery-menu");
var warrantyMenu = document.querySelector(".warranty-menu");
var creditMenu = document.querySelector(".credit-menu");
var deliveryBlock = document.querySelector(".delivery-block");
var warrantyBlock = document.querySelector(".warranty-block");
var creditBlock = document.querySelector(".credit-block");

deliveryMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    deliveryBlock.classList.remove("hidden");
    warrantyBlock.classList.add("hidden");
    creditBlock.classList.add("hidden");

    deliveryMenu.classList.add("current");
    warrantyMenu.classList.remove("current");
    creditMenu.classList.remove("current");

});

warrantyMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    deliveryBlock.classList.add("hidden");
    warrantyBlock.classList.remove("hidden");
    creditBlock.classList.add("hidden");
    
    warrantyMenu.classList.add("current");
    deliveryMenu.classList.remove("current");
    creditMenu.classList.remove("current");

});

creditMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    deliveryBlock.classList.add("hidden");
    warrantyBlock.classList.add("hidden");
    creditBlock.classList.remove("hidden");

    creditMenu.classList.add("current");
    deliveryMenu.classList.remove("current");
    warrantyMenu.classList.remove("current");
});



