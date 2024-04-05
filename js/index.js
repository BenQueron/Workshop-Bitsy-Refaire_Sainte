
//Ce document permet plusieurs choses par rapport à l'intégration de jeux bitsy dans un site web.
//Voici la liste des opérations possibles depuis ce document:
//1. La création d'un addEventListener: on s'assure que tous les jeux sont bien chargés dans la page avant d'ajouter des interactions
//	supplémentaires. Ne pas le mettre génère une erreur de chargement où les interactions web ont lieu avant celles du jeu.
//2. La possibilité de récupérer l'action de cliquer sur les <iframes> contenant les jeux bitsy: on créé un deuxième addEventListener
// 	qui permet de créer une interaction au sein de la page web en plus de simplement cliquer sur un jeu pour y jouer.
var div = document.getElementById('hide');
var display = 1;

//Ici on s'assure que tout le contenu de la page html est chargée avant de lancer le JavaScript.
//Avec le addEventListener, on attend ici que tout le contenu du dom (la page html) soit chargée, ce qui permet
//d'avoir ensuite des interactions en Javscript qui soient chargées APRES et pas AVANT le contenu de la page.
document.addEventListener("DOMContentLoaded", () => {
	console.log("document ready!");

	var para = document.getElementById("player");

	//para.addEventListener("click", updateName);
	
	//function updateName() {
	//  var name = prompt("Enter a new name");
	 // para.textContent = "Player 1: " + name;
	//}

});


function onMyFrameLoad() {

	//var elem = document.body;
	var elem = document.getElementById("frame1").contentWindow.document.body;
	var div = document.getElementById("player");

	//La fonction ci-dessous permet de s'assurer dans la console que nous avons bien cliqué sur le jeu.
	//Avec la fonction console.log, on demande à la page web d'indiquer si oui ou non on a bien cliqué sur le jeu.
	//C'est cet élément que l'on va ensuite récupérer pour rajouter des éléments interactifs dans la page web.
	elem.addEventListener("click", function () {
		console.log("frame1 clicked!");
		
	
		//Le code ci-dessous était un problème parce que j'appelle une première fois mon element player donc ca le fait apparaitre 
		// et ensuite peut importe le reste de la fonction le player reste à l'écran. 
		//En termes moins techniques, cette fonction faisait apparaitre un texte que j'avais dissimulé sur la page parce que je lui 
		// assignait une couleur de bordure. Or, pour lui faire afficher une couleur, il doit d'abord faire apparaitre l'élément. De ce fait
		//cette ligne de code annulait ma fonction.
		//document.getElementById("player").style.border = "2px solid red";
		
		if(display == 1){
			//Ici, comme dans bitsy pour les dialogues à conditions, si la variable est égale à 1, alors je peux récupérer une info
			//en cliquant sur le jeu bitsy. C'est cet élément qui permet de vérifier que l'on a bien cliqué sur un jeu.
			div.style.display = 'block';
			display = 0;
			//document.getElementById("player").style.border = "2px solid red";
		}
		else{
			div.style.display = 'none';
			display = 1;
		}
		
		

	});



	var elem = document.getElementById("frame2").contentWindow.document.body;
	elem.addEventListener("click", function () {
		console.log("frame2 clicked!");
		document.getElementById("frame2").style.border = "2px solid green";

		if(display == 1){
			div.style.display = 'block';
			display = 0;
			//document.getElementById("player").style.border = "2px solid red";
		}
		else{
			div.style.display = 'none';
			display = 1;
		}

	});

	var elem = document.getElementById("frame3").contentWindow.document.body;
	elem.addEventListener("click", function () {
		console.log("frame3 clicked!");
		document.getElementById("frame3").style.border = "2px solid blue";
	});



}







