"use strict";

console.log("script has started running");

var windowWidth = window.innerWidth;


var hamburgerMenu = document.querySelector("#menu-toggle");
var overlay = document.querySelector(".overlay");

var menuOpen = false;

var collapseWidth = 1000;

if (windowWidth < collapseWidth){
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

  // sideNavCloseButton.addEventListener("click",
  //   function () {
  //     if(navItems.classList.contains("hidden")){
  //       console.log("#nav-items hidden, now showing.");
  //       navItems.classList.remove("hidden");
  //       navItems.setAttribute("aria-hidden", "false");
	//
  //     }
  //     else{
  //       console.log("#nav-items showing, now hiding.");
  //       navItems.classList.add("hidden");
  //       navItems.setAttribute("aria-hidden", "true");
  //       sideNavCloseButton.classList.add("hidden");
  //       sideNavCloseButton.setAttribute("aria-hidden", "true");
  //       sideNav.style.display = "none";
  //     }
  //   });

}
