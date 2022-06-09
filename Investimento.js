const InvestimentoValor_Futuro = (inputs) => {
	console.log("InvestimentoValor_Futuro");
	const [taxaRaw, periodosRaw, valor_periodicoRaw, valor_presenteRaw] =
		inputs.map((x) => (isNaN(x) ? 0 : parseFloat(x)));
	let montante = valor_presenteRaw;
	let result = 0;
	let taxa = 1 + taxaRaw / 100;
	let adição = valor_periodicoRaw;
	for (let i = 0; i < periodosRaw; i++) {
		result = montante * taxa;
		montante = result + adição;
	}
	/* imaginando para 4 periodos temos 
	vf = i * t ** 3 + a * (t ** 2 + t + 1); */
	let resultado = -1 * (result + adição);

	return resultado;
};
const InvestimentoValor_Presente = (inputs) => {
	let [t, p, a, vf] = inputs.map((x) => (isNaN(x) ? 0 : parseFloat(x)));
	/* t = taxa, p = periodos, a = adição ou valor periódico,  vf = falor futuro */
	/* i gual valor inicial */
	/* Formula  deduzida no papel considerando 3periodos e depois só generalizar */
	/* 	i = (vf - a * (t ** 2 + t + 1)) / t ** p; */
	let taxaTotal = 0;
	t = 1 + t / 100;
	vf = vf * -1;
	range(p).forEach((num) => {
		taxaTotal += t ** num;
	});

	i = (vf - a * taxaTotal) / t ** p;
	return i;
};

/*		#  FINANCIAMENTOS  # 		*/
const InvestimentoValor_Periodico = (inputs) => {
	let [t, p, vp] = inputs.map((x) => (isNaN(x) ? 0 : parseFloat(x)));
	pgto = vp * ((t * (1 + t) ** p) / (1 + t));
	return pgto;
};
const InvestimentoPeríodos = (inputs) => {
	let [t, vp, vf] = inputs.map((x) => (isNaN(x) ? 0 : parseFloat(x)));
	nper = Math.log(vf / vp) / Math.log(1 + t);
	return nper;
};
const InvestimentoTaxa_de_Juros = (inputs) => {
	let [p, vf, vp] = inputs.map((x) => (isNaN(x) ? 0 : parseFloat(x)));

	taxa = (vf / vp) ** (1 / p) - 1;
	return taxa;
};
