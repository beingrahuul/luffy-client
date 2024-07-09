import React from 'react';
import { Analytics } from '@vercel/analytics/react';
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
      <Analytics />
    </EpisodeProvider>
  </React.StrictMode>
);

