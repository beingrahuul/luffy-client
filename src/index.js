import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//context
import { EpisodeProvider } from './context/EpisodeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EpisodeProvider>
      <App />
    </EpisodeProvider>
  </React.StrictMode>
);

