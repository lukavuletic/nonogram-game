import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';

import { GameScreen } from '@modules/GameScreen';
import { RootStore } from '@stores';
import './index.css';

const rootStore = new RootStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider rootStore={rootStore}>
      <GameScreen />
    </Provider>
  </React.StrictMode>
);
