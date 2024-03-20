import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { EmailProvider } from './EmailContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <EmailProvider>
      <App />
    </EmailProvider>
  </React.StrictMode>
);
