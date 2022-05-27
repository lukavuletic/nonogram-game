import { makeObservable, observable, action, computed } from "mobx";
import $ from "jquery";

export class GameScreenStore {
    textVal = "text";

    constructor() {
        makeObservable(this, {
            textVal: observable,
            showNgMatrix: action.bound,
            text: computed,
        });
    }

    get text() {
        return this.textVal;
    }

    showNgMatrix() {
        const canvas = document.getElementById('mycanvas');
        const cx = canvas.getContext('2d');

        const myImg = new Image();
        myImg.src = require("../../resources/nonogram0.png");

        $(myImg).on("load", () => {
            cx.drawImage(myImg, 2, 1);
            const pixel = cx.getImageData(0, 0, 10, 10);
            const data = pixel.data;

            if (data[0] === 0 && data[1] === 0 && data[2] === 0) {
                this.textVal = "black pixel";
            } else if (data[0] === 255 && data[1] === 255 && data[2] === 255) {
                this.textVal = "white pixel";
            }
        });
    }
}
