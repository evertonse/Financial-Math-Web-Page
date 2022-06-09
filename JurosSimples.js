const JSValor_Futuro = (inputs) => {
	/* O Nome dessa função é o nome da Pergunta que ela responde */
	const [valor_presente, taxa, num_de_periodos] = inputs.map((x) =>
		isNaN(x) ? 0 : parseFloat(x)
	);

	return valor_presente * (1 + (taxa / 100) * num_de_periodos);
};
const JSValor_Presente = (inputs) => {
	const [valor_futuro, taxa, num_de_periodos] = inputs.map((x) =>
		isNaN(x) ? 0 : parseFloat(x)
	);
	return valor_futuro / (1 + (taxa / 100) * num_de_periodos);
};
const JSTaxa_de_Juros = (inputs) => {
	const [valor_presente, valor_futuro, num_de_periodos] = inputs.map((x) =>
		isNaN(x) ? 0 : parseFloat(x)
	);
	return (
		(valor_futuro - valor_presente) / (valor_presente * num_de_periodos) + "%"
	);
};
const JSNúmero_de_Períodos = (inputs) => {
	const [valor_presente, valor_futuro, taxa] = inputs.map((x) =>
		isNaN(x) ? 0 : parseFloat(x)
	);
	return (valor_futuro - valor_presente) / (valor_presente * (taxa / 100));
};
