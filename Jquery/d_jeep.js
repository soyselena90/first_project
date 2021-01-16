var pics = document.getElementById("pics");

var height,
		half;

window.addEventListener("resize", adjustHeightVars);
window.addEventListener("scroll", fadeBox);

function fadeBox () {
	var x = pics.offsetTop - half;
	var y = window.pageYOffset;
	if (y >= x) {
		$(".pic").addClass("fadein");
	}
}

function adjustHeightVars() {
	height = window.innerHeight;
	half = height * 0.35;
}

adjustHeightVars();
