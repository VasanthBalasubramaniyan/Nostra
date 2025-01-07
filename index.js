// Offer bar
var offerClose = document.getElementById("offer-close") 
offerClose.addEventListener("click",function(){
    var offerBar = document.querySelector(".offer__bar")
    offerBar.style.display = "none"
})

// Sidenav
var menuIcon = document.getElementById("menuicon")
var sideNav = document.getElementById("side-nav")
var sideNavClose = document.getElementById("sideNavClose")

menuIcon.addEventListener("click",function(){
    sideNav.style.left = "0"
})

sideNavClose.addEventListener("click",function(){
    sideNav.style.left = "-50%"
})

// Slider

var prevSlide = document.getElementById("prevslide")
var nextSlide = document.getElementById("nextslide")

