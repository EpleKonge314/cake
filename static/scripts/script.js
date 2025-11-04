// Confirm JS Loaded 
console.log("✅ script.js connected");

// 0. Setup: remove dotted borders around boxes dynamically 
window.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.border = "none";
  });
});

// 1. Move The Thing 
function moveTheThing() {
  const thing = document.getElementById("theThing");
  if (!thing) return;
  thing.dataset.moved = thing.dataset.moved === "true" ? "false" : "true";
  thing.style.transition = "transform 0.5s ease";
  thing.style.transform =
    thing.dataset.moved === "true" ? "translateX(200px)" : "translateX(0)";
}

// 2. Style The Text 
function styleTheText() {
  const text = document.getElementById("fancyText");
  if (!text) return;
  const colors = ["red", "blue", "green", "purple", "orange", "teal"];
  const fonts = ["Arial", "Georgia", "Courier New", "Verdana", "Comic Sans MS"];
  const sizes = ["20px", "30px", "40px", "50px"];
  text.style.color = colors[Math.floor(Math.random() * colors.length)];
  text.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  text.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
  text.style.transition = "all 0.3s ease";
}

// 3. Get Form Values 
function getFormValues() {
  const first = document.getElementById("firstField")?.value || "";
  const second = document.getElementById("secondField")?.value || "";
  const third = document.getElementById("thirdField")?.checked;
  document.getElementById("firstResult").textContent = first;
  document.getElementById("secondResult").textContent = second;
  document.getElementById("thirdResult").textContent = third
    ? "Checked"
    : "Unchecked";
}

// 4. Count the Stuff 
function countTheStuff() {
  document.getElementById("countOfP").textContent =
    document.getElementsByTagName("p").length;
  document.getElementById("countOfH2").textContent =
    document.getElementsByTagName("h2").length;
  document.getElementById("countOfTD").textContent =
    document.getElementsByTagName("td").length;
}

// 5. Add New Row 
function addNewRow() {
  const table = document.getElementById("addRowsTable");
  if (!table) return;
  const rows = table.querySelectorAll("tr td");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");
  newCell.textContent = rows.length + 1;
  newRow.appendChild(newCell);
  table.appendChild(newRow);
}

// 6. Bonus Challenge 
function yourBonusChallenge() {
  let circle = document.getElementById("bonusCircle");
  if (!circle) {
    circle = document.createElement("div");
    circle.id = "bonusCircle";
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.borderRadius = "50%";
    circle.style.position = "absolute";
    circle.style.backgroundColor = "magenta";
    circle.style.top = "100px";
    circle.style.left = "100px";
    circle.style.transition = "all 0.5s ease";
    document.body.appendChild(circle);

    // Add a helpful notice message once
    const note = document.createElement("p");
    note.id = "circleNotice";
    note.textContent =
      "The colorful circle can appear anywhere inside your browser window!";
    note.style.fontFamily = "Arial, sans-serif";
    note.style.fontSize = "16px";
    note.style.color = "magenta";
    note.style.fontWeight = "bold";
    note.style.marginTop = "20px";
    document.body.appendChild(note);
  }

  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomTop = Math.random() * (window.innerHeight - 150);
  const randomLeft = Math.random() * (window.innerWidth - 150);
  circle.style.backgroundColor = randomColor;
  circle.style.top = randomTop + "px";
  circle.style.left = randomLeft + "px";
}

// 1.5. Cake Animation 
function setupCakeAnimation() {
  const cakeImg = document.querySelector("#theThing img");
  if (!cakeImg) return;

  let movedRight = false;
  let goingUp = true;

  function updateCakeTransform(yOffset = 0) {
    const x = movedRight ? 200 : 0;
    const scale = movedRight ? -1 : 1;
    const rotation = movedRight ? 360 : 0;
    cakeImg.style.transform = `translateX(${x}px) translateY(${yOffset}px) scaleX(${scale}) rotate(${rotation}deg)`;
    cakeImg.style.transition = "transform 0.5s ease";
  }

  cakeImg.addEventListener("click", () => {
    movedRight = !movedRight;
    updateCakeTransform();
  });

  setInterval(() => {
    const yOffset = goingUp ? -10 : 0;
    goingUp = !goingUp;
    updateCakeTransform(yOffset);
  }, 500);
}

window.addEventListener("DOMContentLoaded", setupCakeAnimation);
console.log("✅ All functions loaded successfully.");
