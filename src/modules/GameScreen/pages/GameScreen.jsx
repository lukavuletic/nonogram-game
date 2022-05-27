import React from "react";
import { inject, observer } from "mobx-react";

import { GameScreenStore } from "@stores";

export const GameScreen = inject(() => ({ gameScreenStore: new GameScreenStore() }))(
    observer(({ gameScreenStore: { text, showNgMatrix } }) => {
        return (
            <div className="App">
                <header className="App-header">
                    {text}
                </header>
                <div>
                    <button type="button" onClick={() => showNgMatrix()}>
                        show monogram
                    </button>
                    <canvas id="mycanvas" />
                </div>
            </div>
        )
    })
)
