function genererGfit() {
    // 1. Récupération des données
    var poids = document.getElementById("poids").value;
    var taille = document.getElementById("taille").value;
    var checkboxes = document.getElementsByName("objectif");

    if (poids == "" || taille == "") {
        alert("Veuillez entrer votre poids et votre taille.");
        return;
    }

    // 2. Calcul et Interprétation de l'IMC
    var imc = (poids / ((taille/100)*(taille/100))).toFixed(1);
    var messageImc = "";
    var couleurImc = "";

    if (imc < 18.5) {
        messageImc = "Votre IMC est de " + imc + " (Insuffisance pondérale). Votre poids est en dessous de la normale.";
        couleurImc = "#f1c40f"; // Jaune/Orange
    } else if (imc >= 18.5 && imc <= 24.9) {
        messageImc = "Votre IMC est de " + imc + " (Corpulence normale). Vous êtes dans la plage idéale.";
        couleurImc = "#2ecc71"; // Vert
    } else {
        messageImc = "Votre IMC est de " + imc + " (Surpoids/Obésité). Votre poids est au-dessus de la normale.";
        couleurImc = "#e74c3c"; // Rouge
    }

    // Affichage du message avec la couleur correspondante
    var boiteImc = document.getElementById("imc-box");
    boiteImc.innerHTML = messageImc;
    boiteImc.style.backgroundColor = couleurImc;

    // 3. Masquer tous les blocs par défaut
    var blocs = document.getElementsByClassName("programme-bloc");
    for (var i = 0; i < blocs.length; i++) {
        blocs[i].style.display = "none";
    }

    // 4. Afficher uniquement les blocs cochés
    var auMoinsUn = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            auMoinsUn = true;
            var idAHecher = "prog-" + checkboxes[i].value;
            document.getElementById(idAHecher).style.display = "block";
        }
    }

    if (auMoinsUn) {
        document.getElementById("resultat").classList.remove("hidden");
    } else {
        alert("Veuillez sélectionner au moins un objectif !");
    }
}