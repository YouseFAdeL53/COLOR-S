let theBtn = document.querySelector(".btn");
// function getColor
const getColor = () => {
  // ParentElement
  let theContent = document.querySelector(".content");
  // Box Show
  let maxBoxes = 30;
  // Clear InnerHTML Of Content
  theContent.innerHTML = "";
  for (let i = 0; i < maxBoxes; i++) {
    // Get Random Color
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    // CreateElement
    let color = document.createElement("li");
    color.className = "color";
    color.innerHTML = `
      <div class="hexColor" style="background-color: ${randomHex}"></div>
      <span class="hexName">${randomHex}</span>
    `;
    color.addEventListener("click", () => getCopyColor(color, randomHex));
    theContent.appendChild(color);
  }
};

// Trigger Function
getColor();

const getCopyColor = (element, hexColor) => {
  let theHexName = element.querySelector(".hexName");
  navigator.clipboard.writeText(hexColor).then((color) => {
    theHexName.innerHTML = "Copied!";
    document.body.style.backgroundColor = hexColor;
    document.body.classList.add("Edition");
    setTimeout(() => (theHexName.innerHTML = hexColor), 1500);
  });
};

theBtn.addEventListener("click", getColor);



