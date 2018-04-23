
function showText (el) {
	if(el.previousElementSibling.clientHeight === 100) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "Згорнути...";
	} else {
		el.previousElementSibling.style.height = "50px";
		el.innerHTML = "Більше...";
	}
}
