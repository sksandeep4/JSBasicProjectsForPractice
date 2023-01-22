const colorArr = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "aqua",
  "coral",
  "brown",
  "#1a3273",
  "#68b2d3",
  "#851aaa",
  "#ffbcc3",
  "#cbd123",
];
let colorFlipBtn = document.querySelector(".cfbtn");
let bgColorLabel = document.querySelector("span");
const flipColorFunction = () => {
  let color = colorArr[Math.floor(Math.random() * colorArr.length)];
  bgColorLabel.innerHTML = `Background Color : <span>${color}</span>`;
  document.body.style.backgroundColor = color;
};

colorFlipBtn.addEventListener("click", flipColorFunction);
