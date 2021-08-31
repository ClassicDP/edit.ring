import {Editor, px, XY} from "./funct";
import {SVG} from "@svgdotjs/svg.js";

let editor:Editor;
window.addEventListener("load", () => {
    editor = new Editor({x:300, y:300})
})



let svgDiv = document.getElementById('square')
let sz, svg

function startDrag() {

}

function endDrag() {

}

function drag() {

}

if (svgDiv) {
    sz = Math.min(svgDiv.clientWidth, svgDiv.clientHeight)
    svg = SVG().addTo('#SVG').viewbox(0, 0, svgDiv.clientWidth, svgDiv.clientHeight).attr('style', "position: absolute; width:100%;  height:100%")
    svg.on('mousedown touchstart', startDrag)
    svg.on('mouseup touchend', endDrag)
    svg.on('mousemove touchmove', drag)
}
