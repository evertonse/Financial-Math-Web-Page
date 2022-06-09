// ##### Generic Helper Functions: ####
const range = (intI, intF) => {
	/* Criar uma lista contendo numeros de intI até intF
  Caso  intF seja omitido, criará uma lista começando do zero até intI
  
  OBS: Em todos esses casos o ultimo elemento é exclusivo (não inclui o ultimo)*/
	if (intF == undefined) [intI, intF] = [0, intI];
	if (intI == undefined) return [];
	let lista = [];
	for (let i = intI; i < intF; i++) {
		lista.push(i);
	}
	return lista;
};

const Percentual_de_um_valor = (inputs) => {
	const [percent, valor] = inputs.map((x) => {
		let num = parseFloat(x);
		if (isNaN(num)) num = 0;
		return num;
	});

	const result = (percent / 100) * valor;
	return result;
};
const Aumento_Percentual = (inputs) => {
	const [valor, aumento] = inputs.map((x) => {
		let num = parseFloat(x);
		if (isNaN(num)) num = 0;
		return num;
	});
	return valor * (1 + aumento / 100) ?? "";
};
const Desconto_Percentual = (inputs) => {
	const [valor, desconto] = inputs.map((x) => {
		let num = parseFloat(x);
		if (isNaN(num)) num = 0;
		return num;
	});
	return valor * (1 - desconto / 100);
	/* Caso a função n retorne nada irá aparecer como resposta:
  "Resposta da undefined"*/
};
const Margem_de_Venda = (inputs) => {
	const [custo, margem] = inputs.map((x) => {
		let num = parseFloat(x);
		if (isNaN(num)) num = 0;
		return num;
	});
	return custo / (1 - margem / 100);
};
const Variação_Percentual = (inputs) => {
	const [valorInicial, valorFinal] = inputs.map((x) => {
		let num = parseFloat(x);
		if (isNaN(num)) num = 0;
		return num;
	});
	console.log("variação", valorInicial, valorFinal);
	let result = (valorFinal / valorInicial - 1) * 100;
	console.log(isNaN(valorFinal));
	if (isNaN(result)) result = "0";
	return result + "%";
};
const Relação_Percentual = (inputs) => {
	const [valor, porcento_de] = inputs.map((x) =>
		isNaN(x) ? 0 : parseFloat(x)
	);
	let result = (valor / porcento_de) * 100;
	return result + "%";
};
