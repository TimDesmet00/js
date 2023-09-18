/*
 */
// premiere étape

let title = document.title;

console.log(title);

// dexiemme étape

document.title = "Modifying the DOM";

console.log(document.title);

// troisième etape

document.body.style.backgroundColor = "#FF69B4";

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;

// quatrième étape

const childBody = document.body;
for (const child of childBody.children) {
  console.log(child.tagName);
}
