// import { sayHello } from "./greet";
window.addEventListener("resize", (event) => {
    var _a, _b;
    const square = document.getElementById("square");
    const editItem = document.getElementById("editItem");
    const content = document.getElementById("content");
    let w1 = (_a = square === null || square === void 0 ? void 0 : square.parentElement) === null || _a === void 0 ? void 0 : _a.clientWidth;
    let h1 = (_b = square === null || square === void 0 ? void 0 : square.parentElement) === null || _b === void 0 ? void 0 : _b.clientHeight;
    let sideSize = w1 < h1 ? w1 : h1;
    square.style.width = String(sideSize);
    square.style.height = String(sideSize);
});
