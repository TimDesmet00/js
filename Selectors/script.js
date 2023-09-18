/*
 */

// première exercise
const imp = document.querySelectorAll(".important");
imp.forEach((element) => {
  element.setAttribute("title", "This is an important item");
});

// deuxième exercice

const pictures = document.querySelectorAll("img");

pictures.forEach((picture) => {
  if (picture.classList.contains("important")) {
  } else {
    picture.style.display = "none";
  }
});

// troisième exercice

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  const classes = paragraph.classList;
  const content = paragraph.textContent.trim();

  if (classes.length > 0) {
    console.log(`class: ${classes}. contenu: ${content}`);
  } else {
    console.log(`contenu: ${content}`);
  }
});

// quatrième exercice

paragraphs.forEach((paragraph) => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let randomColor = `rgb(${red}, ${green}, ${blue})`;
  paragraph.style.color = randomColor;
});
