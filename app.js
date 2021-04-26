const item = [0, 1, 2, 3, 4, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const colorname = document.querySelector("#color-name");

btn.addEventListener("click", () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += item[getrand()];
    }
    document.body.style.backgroundColor = hex;
    colorname.textContent = hex;
});
const getrand = () => {
    return Math.floor(Math.random() * item.length);
};