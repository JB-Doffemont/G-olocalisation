// Création de la fonction générale
function geoLocalisation() {
  // Récupération des différents button
  let buttonGeo = document.querySelector(".geo");
  let buttonSave = document.querySelector(".save");
  let buttonWhere = document.querySelector(".where");
  let buttonDelete = document.querySelector(".delete");

  // Récupération des différentes div button
  let divButton1 = document.querySelector(".button1");
  let divButton2 = document.querySelector(".button2");
  let divButton3 = document.querySelector(".button3");
  let divButton4 = document.querySelector(".button4");

  // Création des variables paragraphe pour la latitude et la longitude dans la div button1
  let pLatitude = document.createElement("p");
  let pLongitude = document.createElement("p");

  // Création de l'evènement au moment du click sur le buttonGeo
  buttonGeo.addEventListener("click", function () {
    // Affichage de la géolocalisation
    navigator.geolocation.getCurrentPosition(function where(position) {
      // Affichage de la valeur des paragraphes latitude et longitude de la div button1
      pLatitude.innerHTML = `Votre Latitude est de : ${position.coords.latitude}`;
      pLongitude.innerHTML = `Votre longitude est de : ${position.coords.longitude}`;

      // Création des paragraphes au sein de la div button1
      divButton1.appendChild(pLatitude);
      divButton1.appendChild(pLongitude);

      // Sauvegarde des coordonnées de latitude et longitude
      localStorage.setItem("@geo", position.coords.latitude);
      localStorage.setItem("@geo2", position.coords.longitude);
    });
  });

  // Création de l'évènement au moment du click sur le button2
  buttonSave.addEventListener("click", function () {
    // Création des variables afin de récupérer la valeur de la sauvegarde
    let sauvegarde = localStorage.getItem("@geo");
    let sauvegardeBis = localStorage.getItem("@geo2");

    // Création des variables paragraphes au sein de la div button2
    let pLatitude2 = document.createElement("p");
    let pLongitude2 = document.createElement("p");

    // Affichage de la valeur des paragraphes au sein de la div button2
    pLatitude2.innerHTML = `Vous avez sauvegardé votre latitude en : ${sauvegarde}`;
    pLongitude2.innerHTML = `Vous avez sauvegardé votre longitude en : ${sauvegardeBis}`;

    // Création des paragraphes au sein de la div button2
    divButton2.appendChild(pLatitude2);
    divButton2.appendChild(pLongitude2);
  });

  buttonWhere.addEventListener("click", function () {
    let sauvegarde = localStorage.getItem("@geo");
    let sauvegardeBis = localStorage.getItem("@geo2");

    let pLatitude3 = document.createElement("p");
    let pLongitude3 = document.createElement("p");

    pLatitude3.innerHTML = `Votre dernière position sauvegardé en latitude ${sauvegarde}`;
    pLongitude3.innerHTML = `Votre dernière position sauvegardé en longitude ${sauvegardeBis}`;

    divButton3.appendChild(pLatitude3);
    divButton3.appendChild(pLongitude3);
  });

  // Création de l'évènement au clique du bouton
  buttonDelete.addEventListener("click", function () {
    // Supression des données dans le localStorage
    localStorage.removeItem("@geo");
    localStorage.removeItem("@geo2");

    // Création et affichage d'un paragraphe pour la suppression
    let supPosition = document.createElement("p");

    supPosition.innerText = `Vous venez de supprimer votre position`;
    alert("Vous avez supprimer votre position");
    // Fonction pour le rechargement
    location.reload();
  });
}

// Appel de la fonction
geoLocalisation();
