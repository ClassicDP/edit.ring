"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = exports.BallPoint = exports.px = void 0;
function px(x) {
    return String(x ? x : 0) + 'px';
}
exports.px = px;
function min(x, y) {
    return x < y ? x : y;
}
class BallPoint {
}
exports.BallPoint = BallPoint;
const editTypes = ['editHours', 'editMinutes'];
class Editor {
    constructor(maxSize) {
        this.maxSize = maxSize;
        editTypes.forEach((type) => {
            let elements = document.getElementsByClassName(type);
            if (elements) {
                for (let element of elements) {
                    element.addEventListener('mousedown touchstart', this.startEdit);
                }
            }
        });
    }
    startEdit(event) {
        console.log(event);
        this.editorSize = { x: window.innerWidth, y: window.innerHeight };
        if (this.maxSize) {
            this.editorSize.x = min(this.maxSize.x, this.editorSize.x);
            this.editorSize.y = min(this.maxSize.y, this.editorSize.y);
        }
    }
}
exports.Editor = Editor;
//# sourceMappingURL=funct.js.map