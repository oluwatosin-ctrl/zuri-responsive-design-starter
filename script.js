var navcontainer = document.querySelector("div.nav-bar")
var hamburger = "<img src='https://res.cloudinary.com/colt-copy/image/upload/v1617888797/4092560-512_1_i1537y.png' class='menu-sign'/>"
navcontainer.innerHTML+= hamburger
var menuicon = document.querySelector(".menu-sign")
var navlist = document.querySelector("ul.nav-links")
menuicon.addEventListener("click", () => {
	navlist.classList.toggle("responsiv-menu");
});
