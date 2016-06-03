
function notation(starId) {
	/*
		Nous r�cup�rons dans la variables "elements" l'ensemble des �l�ments qui ont une classe "notation-star-selected"
		afin de les r�-initialiser avec la classe "notation-star"
	*/
	var elements = document.getElementsByClassName("notation-star-selected");
	for (i = 0; i < elements.length; i++) {
		elements[i].className = "notation-star";
	}

	/*
		Nous changeons la classe de l'�toile sur laquelle l'utilisateur a cliqu�
		et par la magie du CSS toutes les �toiles pr�c�dentes changerons de couleur (jaune)
	*/
	document.getElementById(starId).className = "notation-star-selected";
	
	/*
		Nous stockons dans notre champ de formulaire la note attribu� par l'utilisateur (de 1 � 5)
	*/
	document.getElementById("notationNote").value = starId.substr(4,4);
}
