dragElement(document.getElementById("draggableDiv"));

function dragElement(element) {
	if (document.getElementById(element.id + "header")) {
		document.getElementById(element.id + "header").onmousedown = dragMouseDown;
	} else {
		element.onmousedown = dragMouseDown;
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
		element.style.top = (element.offsetTop - pos02) + "px";
		element.style.left = (element.offsetLeft - pos01) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}