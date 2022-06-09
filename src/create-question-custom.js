const createTemplate = () => {
	const temp = document.querySelector("template");
	return temp.content.cloneNode(true);
};
const createQuestion =
	(parentSelector) =>
	(title) =>
	(...placeHolders) => {
		const temp = createTemplate();
		const titulo = temp.querySelector(".titulo");
		const inputs = temp.querySelectorAll("input");

		titulo.textContent = title;
		inputs.forEach((input, index) => {
			input.placeholder = placeHolders[index];
		});

		document.querySelector(parentSelector).appendChild(temp);
		return temp;
	};

const createQuestionPercent = createQuestion("#percent");
const createQuestionJuros = createQuestion("#juros");
const createQuestionDinheiro = createQuestion("#dinheiro");
const createQuestionInvestimento = createQuestion("#investimento");
