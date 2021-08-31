import { px } from "./funct";
const resizer = (ev) => {
    var _a, _b;
    let w1 = (_a = square === null || square === void 0 ? void 0 : square.parentElement) === null || _a === void 0 ? void 0 : _a.clientWidth;
    let h1 = (_b = square === null || square === void 0 ? void 0 : square.parentElement) === null || _b === void 0 ? void 0 : _b.clientHeight;
    let sideSize = w1 < h1 ? w1 : h1;
    square.style.width = px(sideSize);
    square.style.height = px(sideSize);
};
window.addEventListener("load", () => {
    resizer();
});
window.addEventListener("resize", resizer);
const square = document.getElementById("square");
const editItem = document.getElementById("editItem");
const content = document.getElementById("content");
editItem.addEventListener('click', () => {
});
