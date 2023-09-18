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

let newsection;

let section = () => {
  let newSection = document.createElement("section");
  let currentSection = document.querySelector("article");
  document.body.insertBefore(newSection, currentSection);

  members.forEach((member) => {
    let newP = document.createElement("p");
    let newcontent = document.createTextNode(member);
    newP.appendChild(newcontent);
    newSection.appendChild(newP);
  });
};
section();
