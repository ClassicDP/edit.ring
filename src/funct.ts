import {SVG} from "@svgdotjs/svg.js"

export function px(x: number | undefined): string {
    return String(x ? x : 0) + 'px'
}

function min(x: number, y: number): number {
    return x < y ? x : y
}

export type XY = { x: number, y: number }

export class BallPoint {
    centre: XY
    finger: XY

}

const editTypes = ['editHours', 'editMinutes']

export class Editor {
    private editorSize: XY
    constructor(public maxSize?: XY) {
        editTypes.forEach((type) => {
            let elements = document.getElementsByClassName(type)
            if (elements) {
                for (let element of elements) {
                    element.addEventListener('mousedown touchstart', this.startEdit)
                }
            }
        })
    }

    startEdit(event: Event) {
        console.log(event)
        this.editorSize = {x: window.innerWidth, y: window.innerHeight}
        if (this.maxSize) {
            this.editorSize.x = min(this.maxSize.x, this.editorSize.x);
            this.editorSize.y = min(this.maxSize.y, this.editorSize.y)
        }
    }
}

