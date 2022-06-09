(function (
	PorcetagemCBs = [],
	JurosSimplesCBs = [],
	JurosCompostoCBs = [],
	InvestimentoCBs = []
) {
	/* Todos as funções que resolvem uma para cada questão */
	/* Caso nas lista de lagum desses callbacks sejam null ou undefined,
  simplesmente iremos usar um callback default */
	const defaultCB = (x) => x[0];

	/* FIELDS*/
	/* CallBacks de Porcentagem, ou seja as funções que resolvem cada um das quetões */
	const PercentResolvers = [
		{
			selector: "#percentual-valor",
			Resolver: PorcetagemCBs[0] ?? defaultCB,
		},
		{
			selector: "#percentual-aumento",
			Resolver: PorcetagemCBs[1] ?? defaultCB,
		},
		{
			selector: "#percentual-desconto",
			Resolver: PorcetagemCBs[2] ?? defaultCB,
		},
		{
			selector: "#percentual-margem",
			Resolver: PorcetagemCBs[3] ?? defaultCB,
		},
		{
			selector: "#percentual-variação",
			Resolver: PorcetagemCBs[4] ?? defaultCB,
		},
		{
			selector: "#percentual-relação",
			Resolver: PorcetagemCBs[5] ?? defaultCB,
		},
	];
	/* CallBacks de Juros imples */
	const JurosSimplesResolvers = [
		{
			selector: "#juros-simples-futuro",
			Resolver: JurosSimplesCBs[0] ?? defaultCB,
		},
		{
			selector: "#juros-simples-presente",
			Resolver: JurosSimplesCBs[1] ?? defaultCB,
		},
		{
			selector: "#juros-simples-taxa",
			Resolver: JurosSimplesCBs[2] ?? defaultCB,
		},
		{
			selector: "#juros-simples-periodos",
			Resolver: JurosSimplesCBs[3] ?? defaultCB,
		},
	];
	const JurosCompostoResolvers = [
		{
			selector: "#juros-composto-futuro",
			Resolver: JurosCompostoCBs[0] ?? defaultCB,
		},
		{
			selector: "#juros-composto-presente",
			Resolver: JurosCompostoCBs[1] ?? defaultCB,
		},
		{
			selector: "#juros-composto-taxa",
			Resolver: JurosCompostoCBs[2] ?? defaultCB,
		},
		{
			selector: "#juros-composto-periodos",
			Resolver: JurosCompostoCBs[3] ?? defaultCB,
		},
		{
			selector: "#juros-composto-conversões",
			Resolver: JurosCompostoCBs[4] ?? defaultCB,
		},
	];
	const InvestimentoResolvers = [
		{
			selector: "#investimento-futuro",
			Resolver: InvestimentoCBs[0] ?? defaultCB,
		},
		{
			selector: "#investimento-presente",
			Resolver: InvestimentoCBs[1] ?? defaultCB,
		},
		{
			selector: "#investimento-periodico",
			Resolver: InvestimentoCBs[2] ?? defaultCB,
		},
		{
			selector: "#investimento-periodos",
			Resolver: InvestimentoCBs[3] ?? defaultCB,
		},
		{
			selector: "#investimento-taxa",
			Resolver: InvestimentoCBs[4] ?? defaultCB,
		},
	];
	/* Acaba aqui a lista de varias Resolvers de questões */

	/* DECLARATIVO */
	/* Junta todos num pacote só de soluções */
	const AllResolvers = [
		...PercentResolvers,
		...JurosSimplesResolvers,
		...JurosCompostoResolvers,
		...InvestimentoResolvers,
	];

	/* Pegar inputs de um determinado */
	const getInputs = (selector) => {
		let values = [];

		let question = "";
		try {
			question = document.querySelector(selector);
		} catch (e) {
			console.log(`Não encontrou esse selector${selector}, Error:${e}`);
			return values;
		} finally {
			const inputs = question.querySelectorAll("input");
			const selects = question.querySelectorAll("select");
			inputs.forEach((input) => {
				values.push(input.value);
			});
			selects.forEach((select) => {
				values.push(select.value);
			});
			return values;
		}
	};
	const triggerEvent = (el, type) => {
		if ("createEvent" in document) {
			var e = document.createEvent("HTMLEvents");
			e.initEvent(type, false, true);
			el.dispatchEvent(e);
		} else {
			// IE8
			var e = document.createEventObject();
			e.eventType = type;
			el.fireEvent("on" + e.eventType, e);
		}
	};
	/* Mostra conteudo em um HTMLElement especifico */
	const display = (HTMLElement, content) => {
		HTMLElement.innerHTML = String(content);
	};
	/* Adiciona um callback que resolva um questão ({cbResolver}), selecionada pelo {selector} */
	const addResolver = (cbResolver) => (selector) => {
		let question = "";
		try {
			question = document.querySelector(selector);
		} catch (e) {
			console.log("couldnt find the selector in the DOM");
		}
		if (!question) {
			return;
		}
		const inputs = question?.querySelectorAll("input");
		const resposta = question.querySelector(".r");
		/* Adicionando evento de mudança para cada input existente na questão */
		inputs.forEach((input) => {
			input.addEventListener("input", (e) => {
				/* A cada mudança em input em qualquer um dos input,
       geramos um novo resultado em {result} */
				let result = cbResolver(getInputs(selector) ?? "");
				result = result ?? "Preencha";
				if (String(result).match(/(NaN)/gi)) result = "Preencha Campos";
				/* Damos display do resultado no local de resposta da question atual */
				display(resposta, result);
			});
		});
	};

	/* IMPERATIVO */
	/* Adicionando Resolver com sua respectiva Pergunta */
	AllResolvers.forEach((item) => {
		addResolver(item["Resolver"])(item["selector"]);
	});
	const selects = document.querySelectorAll("select");
	selects.forEach((select) => {
		select.addEventListener("input", (e) => {
			const select_sibling = document.querySelector("#select-sibling");
			triggerEvent(select_sibling, "input");
		});
	});
})(
	/* Lista de todas as funções de solução separadas por tipo */
	[
		Percentual_de_um_valor,
		Aumento_Percentual,
		Desconto_Percentual,
		Margem_de_Venda,
		Variação_Percentual,
		Relação_Percentual,
	],
	[JSValor_Futuro, JSValor_Presente, JSTaxa_de_Juros, JSNúmero_de_Períodos],
	[
		JCValor_Futuro,
		JCValor_Presente,
		JCTaxa_de_Juros,
		JCNúmero_de_Períodos,
		JCConversões,
	],
	[
		InvestimentoValor_Futuro,
		InvestimentoValor_Presente,
		InvestimentoValor_Periodico,
		InvestimentoPeríodos,
		InvestimentoTaxa_de_Juros,
	]
);
