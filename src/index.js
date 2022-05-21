import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GameScreen } from '@modules/GameScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameScreen />
  </React.StrictMode>
);
