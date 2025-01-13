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