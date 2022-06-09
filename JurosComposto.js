const JCValor_Futuro = (inputs) => {
	const [valor_presente, taxa, num_de_periodos] = inputs.map((x) =>
		isNaN(x) ? 0 : parseFloat(x)
	);

	return valor_presente * (1 + taxa / 100) ** num_de_periodos;
};
const JCValor_Presente = (inputs) => {
	const [valor_futuro, taxa, num_de_periodos] = inputs.map((x) =>
		isNaN(x) ? 0 : parseFloat(x)
	);

	return valor_futuro / (1 + taxa / 100) ** num_de_periodos;
};
const JCTaxa_de_Juros = (inputs) => {
	const [valor_presente, valor_futuro, num_de_periodos] = inputs.map((x) =>
		isNaN(x) ? 0 : parseFloat(x)
	);
	let result =
		((valor_futuro / valor_presente) ** (1 / num_de_periodos) - 1) * 100;
	return result + "%";
};
const JCNúmero_de_Períodos = (inputs) => {
	const [valor_presente, valor_futuro, taxa] = inputs.map((x) =>
		isNaN(x) ? 0 : parseFloat(x)
	);
	let result = Math.log(valor_futuro / valor_presente) / Math.log(1 + taxa);
	return result;
};
const JCConversões = (inputs) => {
	const [taxa, de_tempo, para_tempo] = [inputs[0], inputs[1], inputs[2]];
	let [de, para] = [translateTime(de_tempo), translateTime(para_tempo)];
	let resultado = (1 + taxa / 100) ** (para / de) - 1;
	return `${resultado * 100}%`;
};

/* ### Helper Function ### */
const translateTime = (aoTempoString) => {
	/* Conta quantas vezes uma {string de tempo} acontece ao ano */
	let string = aoTempoString.slice(0);
	let result = 0;
	switch (string) {
		case "ao dia":
			result = 1;
			break;
		case "à semana":
			result = 7;
			break;
		case "ao mês":
			result = 30;
			break;
		case "ao bimestre":
			result = 60;
			break;
		case "ao trimestre":
			result = 90;
			break;
		case "ao semestre":
			result = 180;
			break;
		case "ao ano":
			result = 360;
			break;

		default:
			break;
	}
	console.log("result:", result);
	console.log("tempo:", string);
	return result;
};
