import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EpisodeProvider } from './context/EpisodeContext';
import GlobalStyle from './styles/GlobalStyle';
import ErrorBoundary from './components/ErrorBoundary'; // Make sure to create and import this

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EpisodeProvider>
      <GlobalStyle />
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      <Analytics />
      <SpeedInsights />
    </EpisodeProvider>
  </React.StrictMode>
);
