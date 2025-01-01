//OUVERTURE DU SOUS MENU

//Sous menu 1

const sousNav1 = document.getElementById("sousNav1");

function openSousNav1() {
  sousNav1.style.display = "block";
}

function closeSousNav1() {
  sousNav1.style.display = "none";
}

//Sous menu 2

const sousNav2 = document.getElementById("sousNav2");

function openSousNav2() {
  sousNav2.style.display = "block";
}

function closeSousNav2() {
  sousNav2.style.display = "none";
}

//Sous menu 3

const sousNav3 = document.getElementById("sousNav3");

function openSousNav3() {
  sousNav3.style.display = "block";
}

function closeSousNav3() {
  sousNav3.style.display = "none";
}

//Gestion du menu outils avec affichage des outils selon catégories

const tousLesOutils = document.getElementById("tous-les-outils");
const outilsSyndicaux = document.getElementById("outils-syndicaux");
const fichesInfos = document.getElementById("fiches-infos");
const affiches = document.getElementById("affiches");
const tracts = document.getElementById("tracts");
const lesEssentiels = document.getElementById("les-essentiels");

function afficherTousLesOutils() {
  tousLesOutils.style.display = "block";
  outilsSyndicaux.style.display = "none";
  fichesInfos.style.display = "none";
  affiches.style.display = "none";
  tracts.style.display = "none";
  lesEssentiels.style.display = "none";
}

function afficherOutilsSyndicaux() {
  tousLesOutils.style.display = "none";
  outilsSyndicaux.style.display = "block";
  fichesInfos.style.display = "none";
  affiches.style.display = "none";
  tracts.style.display = "none";
  lesEssentiels.style.display = "none";
}

function afficherFichesInfos() {
  tousLesOutils.style.display = "none";
  outilsSyndicaux.style.display = "none";
  fichesInfos.style.display = "block";
  affiches.style.display = "none";
  tracts.style.display = "none";
  lesEssentiels.style.display = "none";
}
function afficherAffiches() {
  tousLesOutils.style.display = "none";
  outilsSyndicaux.style.display = "none";
  fichesInfos.style.display = "none";
  affiches.style.display = "block";
  tracts.style.display = "none";
  lesEssentiels.style.display = "none";
}
function afficherDossiers() {
  tousLesOutils.style.display = "none";
  outilsSyndicaux.style.display = "none";
  fichesInfos.style.display = "none";
  affiches.style.display = "none";
  tracts.style.display = "none";
  lesEssentiels.style.display = "none";
}
function afficherTracts() {
  tousLesOutils.style.display = "none";
  outilsSyndicaux.style.display = "none";
  fichesInfos.style.display = "none";
  affiches.style.display = "none";
  tracts.style.display = "block";
  lesEssentiels.style.display = "none";
}
function afficherLesEssentiels() {
  tousLesOutils.style.display = "none";
  outilsSyndicaux.style.display = "none";
  fichesInfos.style.display = "none";
  affiches.style.display = "none";
  tracts.style.display = "none";
  lesEssentiels.style.display = "block";
}

afficherTousLesOutils();
