function atualizarGraficos(data) {
	console.log(`entrei na funcao atualizar dados dos gráficos`);
	var AE = data;

	for (contador = 0; contador < AE.length; contador++) {
		var indexAE = AE[contador];

		labelGraficos.push(indexAE.modelo);
		var erros = indexAE.graficoErros 
		graficoErro.push(erros.toFixed(0));

		var acertos = indexAE.graficoAcertos 
		graficoAcerto.push(acertos.toFixed(0));

		var AcertosErros = indexAE.graficoAE
		graficoAE.push(AcertosErros.toFixed(0));
	}
	plotarGraficos(GraficoErros, graficoErro);
	plotarGraficos(GraficoAcertos, graficoAcerto);
	plotarGraficos(acertosEerros, graficoAE);
}


function plotarGraficos(locate, dados) {
	console.log(`entrei na funcao para plotar os gráficos`);
	new Chart(locate, {
		type: "line",
		data: {
			labels: labelGraficos,
			datasets: [
				{
					label: "",
					data: dados,
					backgroundColor: "#584634",
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			plugins: {
				legend: {
					position: "none",
				},
			},
		},
	});
}
