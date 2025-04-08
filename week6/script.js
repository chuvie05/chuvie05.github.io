const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
header.innerHTML = "<h1> this is OART1013 <h1>";

const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
topHeading.textContent = "this is my new topheading";
topHeading.styleSheets.color = "red";

const allParas = document.querySelectorAll("p");
console.log(allParas);
for (let i = 0; i < allParas.length; i++) {
  console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid blue";
}

const sh1 = document.querySelector("#first-subheading");
console.log(sh1);
console.log(sh1.textContent);
const blue1 = document.querySelector(".blue-color");
console.log(blue1);
for (let i = 0; i < blue1.length; i++) {
  console.log(blue1[i].textContent);
}
const allSubheadings = document.querySelectorAll("h2");
console.log(allSubheadings);
