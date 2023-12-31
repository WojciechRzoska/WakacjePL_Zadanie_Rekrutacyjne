import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './views/App';
import './index.css';
import { AppProvider } from './providers/AppProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
