import { makeObservable, observable } from "mobx";

export class GameScreenStore {
    textVal = "text";

    constructor() {
        makeObservable(this, {
            textVal: observable,
        });
    }

    get text() {
        return this.textVal;
    }
}
