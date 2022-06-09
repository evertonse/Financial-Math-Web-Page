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

t = 1.1;
v = 100;
p = 2;
result = (v * t ** p) / p;

console.log(result);
