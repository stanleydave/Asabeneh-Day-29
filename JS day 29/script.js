let spanList = document.querySelectorAll("span");
console.log(spanList.length);
// for (let i = 0; i < spanList.length; i++) {}

function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
// let span = document.querySelector("span");
// span.style.color = randomColor();
function changeTextColor() {
  spanList.forEach((li) => {
    li.style.color = randomColor();
  });
  //   let span = document.querySelector("span");
  //   span.style.color = randomColor();
}
changeTextColor();
setInterval(changeTextColor, 1700);
// changeTextColor();
function changeBackground() {
  const main = document.querySelector("main");
  main.style.backgroundColor = randomColor();
}
changeBackground();
setInterval(changeBackground, 1700);
function changeText() {
  const first = document.querySelector(".first");
  const second = document.querySelector(".second");
  const third = document.querySelector(".third");
  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
  first.style.fontWeight = 400;
  setTimeout(function () {
    second.style.display = "block";
    third.style.display = "none";
    first.style.display = "none";
    second.style.fontWeight = 100;
  }, 3400);
  setTimeout(function () {
    second.style.display = "none";
    third.style.display = "block";
    first.style.display = "none";
    third.style.fontWeight = 800;
  }, 6800);
}
changeText();
setInterval(changeText, 10200);