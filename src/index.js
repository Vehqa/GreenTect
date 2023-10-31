import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importez le Router
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Entourez votre application avec le Router */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
