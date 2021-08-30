// import { sayHello } from "./greet";

window.addEventListener("resize", (event) => {
    const square = document.getElementById("square")
    const editItem = document.getElementById("editItem")
    const content = document.getElementById("content")
    let w1 = square?.parentElement?.clientWidth
    let h1 = square?.parentElement?.clientHeight
    let sideSize = w1<h1? w1:h1
    square.style.width = String(sideSize)
    square.style.height = String(sideSize)
});

