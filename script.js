dragElement(document.getElementById("MaDrdiv"));

function dragElement(elmnt) {
	let pos01 = 0,
		pos02 = 0,
		pos03 = 0,
		pos04 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos03 = e.clientX;
		pos04 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos01 = pos03 - e.clientX;
		pos02 = pos04 - e.clientY;
		pos03 = e.clientX;
		pos04 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos02) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos01) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}