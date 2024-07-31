import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EpisodeProvider } from './context/EpisodeContext';
import GlobalStyle from './styles/GlobalStyle';
import ErrorBoundary from './components/ErrorBoundary'; // Make sure to create and import this

// analytics
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

//piwikpro
import PiwikPro from '@piwikpro/react-piwik-pro';

PiwikPro.initialize('675c94b6-b68e-4c00-816f-638ac034510b', 'https://luffyhq.piwik.pro');

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
