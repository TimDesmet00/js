/*
 */
let members = [
  "Alexandre Vandewiele",
  "Antoine Lansman",
  "Bastien Venturi",
  "Carole Gerard",
  "Dorian Vanden Eynde",
  "Elisabeth Leyder",
  "Elodie Ali",
  "Justin Michel",
  "Justine Frigo",
  "Justine Leleu",
  "Kimi Lefort",
  "Layla",
  "Lidwine Careme",
  "Lucas Beauloi",
  "Marie Tara",
  "Mathias Barbier",
  "Okly 2023",
  "Pierre Marien",
  "Robin Piot",
  "Rosalie Boulard",
  "Stephane Comblez",
  "Tim Desmet",
  "Toms",
  "Valentin Lefort",
  "Vens Alexandre",
  "Virginie Dourson",
];

// creation d'une couleur random
let randomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue}`;
};

// vérifier si une couleur est foncée ou claire
let isColorDark = (color) => {
  let rgb = color.match(/\d+/g);
  if (!rgb) return true;

  let luminance = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];

  return luminance < 128;
};

// redefinition de la variable members de manierer random
members = members.sort(() => Math.random() - 0.5);

// ciblage du h2
const article = document.querySelector("article");
const h2 = article.querySelector("h2");

// création de la section et la mettre dans le h2 de article
const newSection = document.createElement("section");
article.insertBefore(newSection, h2.nextSibling);

// boucle forEach pour crée le p dans section et y attribué les noms du tableau
members.forEach((member) => {
  let newP = document.createElement("p");
  let newcontent = document.createTextNode(member);
  newP.appendChild(newcontent);

  // definition du backgroundColor de chaque p aleatoirement
  let backgroundColor = randomColor();
  newP.style.backgroundColor = backgroundColor;

  // changement de la couleur du text en fonction de la clareté du backgroundColor
  let textColor = isColorDark(backgroundColor) ? "white" : "black";
  newP.style.color = textColor;

  newSection.appendChild(newP);
});
