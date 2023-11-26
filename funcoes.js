var num, programa, tentativa, pontos;
var gabarito = new Array(30);

var gabarito061 = new Array('C', 'B', 'D', 'A', 'A', 'D', 'C', 'A', 'B', 'B', 'C', 'D', 'D', 'B', 'A', 'D', 'C', 'C', 'D', 'C', 'A', 'D', 'A', 'C', 'A', 'C', 'C', 'D', 'A', 'B');
var gabarito062 = new Array('A', 'B', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'D', 'D', 'D', 'B', 'D', 'A', 'D', 'D', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A', 'B', 'A', 'D', 'B');
var gabarito063 = new Array('B', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A', 'D', 'B', 'B', 'D', 'D', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B');
var gabarito064 = new Array('B', 'D', 'C', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'C', 'B', 'D', 'A', 'C', 'D', 'A', 'B', 'C', 'C', 'D', 'C', 'C', 'D', 'D', 'A');
var gabarito065 = new Array('A', 'A', 'C', 'D', 'B', 'B', 'D', 'D', 'B', 'B', 'D', 'A', 'B', 'D', 'A', 'B', 'D', 'A', 'B', 'D', 'D', 'D', 'C', 'D', 'C', 'B', 'B', 'B', 'B', 'D');

function iniciar() {
	programa = window.prompt("Digite o número do programa:", "");

	if (programa == "061")
		gabarito = gabarito061;
	else if (programa == "062")
		gabarito = gabarito062;
	else if (programa == "063")
		gabarito = gabarito063;
	else if (programa == "064")
		gabarito = gabarito064;
	else if (programa == "065")
		gabarito = gabarito065;
	else {
		window.alert("\nPROGRAMA 1 = LIVRO: 061\n PROGRAMA 2 = LIVRO: 062\n PROGRAMA 3 = LIVRO: 063\n PROGRAMA 4 = LIVRO: 064");
		iniciar();
	}

	pontos = 0;
	num = 1;
	tentativa = 1;

	document.getElementById('contagem').value = programa + "➡" + num + ": ";
	document.getElementById('tentativa').value = "Tentativa " + tentativa + " de 3";
}

function jogar(resposta) {
	document.getElementById('contagem').value = programa + "➡" + num + ":" + resposta;

	if (resposta == gabarito[num-1]) {
		if (tentativa == 1)
			pontos += 3; // pontos = pontos + 3
		else if (tentativa == 2)
			pontos += 2; // pontos = pontos + 2
		else if (tentativa == 3)
			pontos++; // pontos = pontos + 1

		num++;
		tentativa = 1;	

		document.getElementById('contagem').value = programa + "➡" + num + ": ";
		document.getElementById('tentativa').value = "Tentativa " + tentativa + " de 3";
	}
	else {
		tentativa++;
		document.getElementById('tentativa').value = "Tentativa " + tentativa + " de 3";

		if (tentativa > 3) {
			num++;
			tentativa = 1;
			document.getElementById('contagem').value = programa + "➡" + num + ": ";
			document.getElementById('tentativa').value = "Tentativa " + tentativa + " de 3";
		}
	}
	
	if (num > 30) {
		document.getElementById('contagem').value = "Fim!!!";
		document.getElementById('tentativa').value = "Pontuação do jogo: " + pontos;
	}
}