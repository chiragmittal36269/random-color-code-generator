let container = document.querySelector(".elements");
let loadMore = document.querySelector(".load-more");

let colorCodes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

let colorCodesArray = [];

function generateColorCode() {
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        let value = colorCodes[index];
        colorCode += value;
    }
    return colorCode;
}

function createColorCodeElement() {
    const createColorCodeElement = document.createElement("div");
    createColorCodeElement.classList.add("color-code");
    let newColorCode = generateColorCode();
    if (colorCodesArray.includes(newColorCode)) {
        return createColorCodeElement;
    }
    createColorCodeElement.style.backgroundColor = newColorCode;
    createColorCodeElement.innerText = newColorCode;
    createColorCodeElement.addEventListener("click", (e) => {
        // navigator.clipboard.writeText(newColorCode);
        // console.log(e.target.innerText);
        navigator.clipboard.writeText(e.target.innerText);
        // alert("Copied: " + newColorCode);
    });
    colorCodesArray.push(newColorCode);
    return createColorCodeElement;
}

for (let i = 0; i < 30; i++) {
    container.appendChild(createColorCodeElement());
}

loadMore.addEventListener("click", loadMoreColorCodes);
function loadMoreColorCodes() {
    for (let i = 0; i < 30; i++) {
        container.appendChild(createColorCodeElement());
    }
    console.log(colorCodesArray.length);
}
