import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EpisodeProvider } from './context/EpisodeContext';
import GlobalStyle from './styles/GlobalStyle';

// analytics
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EpisodeProvider>
      <GlobalStyle />
        <App />
      <Analytics />
      <SpeedInsights />
    </EpisodeProvider>
  </React.StrictMode>
);
