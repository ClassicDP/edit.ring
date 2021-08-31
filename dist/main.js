"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funct_1 = require("./funct");
const svg_js_1 = require("@svgdotjs/svg.js");
let editor;
window.addEventListener("load", () => {
    editor = new funct_1.Editor({ x: 300, y: 300 });
});
let svgDiv = document.getElementById('square');
let sz, svg;
function startDrag() {
}
function endDrag() {
}
function drag() {
}
if (svgDiv) {
    sz = Math.min(svgDiv.clientWidth, svgDiv.clientHeight);
    svg = svg_js_1.SVG().addTo('#SVG').viewbox(0, 0, svgDiv.clientWidth, svgDiv.clientHeight).attr('style', "position: absolute; width:100%;  height:100%");
    svg.on('mousedown touchstart', startDrag);
    svg.on('mouseup touchend', endDrag);
    svg.on('mousemove touchmove', drag);
}
//# sourceMappingURL=main.js.map