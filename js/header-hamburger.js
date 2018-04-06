"use strict";

console.log("script has started running");

var windowWidth = window.innerWidth;


var hamburgerMenu = document.querySelector("#menu-toggle");
var overlay = document.querySelector(".overlay");

var menuOpen = false;

var collapseWidth = 1;

if (windowWidth > collapseWidth){
	console.log("windowWidth < " + collapseWidth + "; collapsing menu");

	hamburgerMenu.addEventListener("click",
		function(){
			console.log("menu icon clicked");


			console.log("#nav-items hidden, now showing.");
      if (menuOpen == false){
				overlay.style.height = '100%';
				menuOpen = true;
			}
			else if (menuOpen == true){
				overlay.style.height = '0%';
				menuOpen = false;
			}

		})
}
