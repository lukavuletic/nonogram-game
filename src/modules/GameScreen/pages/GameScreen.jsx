import React from "react";
import { inject, observer } from "mobx-react";

import { GameScreenStore } from "@stores";

export const GameScreen = inject(() => ({ gameScreenStore: new GameScreenStore() }))(
    observer(({ gameScreenStore: { text } }) => {
        return (
            <div className="App">
                <header className="App-header">
                    {text}
                </header>
            </div>
        )
    })
)
