
function notation(starId) {
	/*
		Nous récupérons dans la variables "elements" l'ensemble des éléments qui ont une classe "notation-star-selected"
		afin de les ré-initialiser avec la classe "notation-star"
	*/
	var elements = document.getElementsByClassName("notation-star-selected");
	for (i = 0; i < elements.length; i++) {
		elements[i].className = "notation-star";
	}

	/*
		Nous changeons la classe de l'étoile sur laquelle l'utilisateur a cliqué
		et par la magie du CSS toutes les étoiles précédentes changerons de couleur (jaune)
	*/
	document.getElementById(starId).className = "notation-star-selected";
	
	/*
		Nous stockons dans notre champ de formulaire la note attribué par l'utilisateur (de 1 à 5)
	*/
	document.getElementById("notationNote").value = starId.substr(4,4);
}
