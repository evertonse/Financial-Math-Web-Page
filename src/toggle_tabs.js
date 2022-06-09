(function (tabs, contents) {
	function setTab(nav, content) {
		nav.forEach((ele) => {
			ele.addEventListener("change", (e) => {
				if (e.target.checked) {
					const id = e.currentTarget.dataset.for;
					show(content, id);
				}
			});
		});
	}
	function show(content, selector) {
		/* shows only one of the elements and disables the other ones*/
		content.forEach((ele) => {
			disable(ele);
		});
		enable(document.querySelector(selector));
	}
	function disable(element) {
		element.classList.remove("active");
	}
	function enable(element) {
		element.classList.add("active");
	}
	const inputChecked_OnLoad = document.querySelector(
		'input[checked = "checked"]'
	).dataset.for;
	show(contents, inputChecked_OnLoad);
	setTab(tabs, contents);
})(
	document.querySelectorAll('input[type="radio"]'),
	document.querySelectorAll("[data-content]")
);
