const container = document.querySelector("#container");
const buttonContainer = document.querySelector("#button-container");
const divs = document.querySelector("#square");

// button
const button = document.createElement("button");
button.classList.add("button-style");
button.textContent = "click me";
buttonContainer.appendChild(button);

button.addEventListener("click", () => {
  let userAnswer = parseInt(prompt("How many squares on each side?"));
  return addSquares(userAnswer * userAnswer);
});



function addSquares(num) {
  clearSquares();
  for (let i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

function clearSquares() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
function randomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

container.addEventListener("mouseover", function (e) {
    if (e.target && e.target.classList.contains("square")) {
      
      let currentOpacity = parseFloat(e.target.style.opacity) || 0;
      currentOpacity += 0.1;
      if (currentOpacity > 1) {
        currentOpacity = 0.1;
      }
      e.target.style.opacity = currentOpacity;
      
      
      e.target.style.background = randomRgb();
      setTimeout(() => {
        e.target.style.background = "";
      }, 500);
      // Remove the darkening after 4 secs
      setTimeout(() => {
          e.target.style.opacity = ""; 
      }, 2000);
    }
});
