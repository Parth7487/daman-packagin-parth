
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { Helmet } from 'react-helmet';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Helmet>
      <link rel="icon" href="/lovable-uploads/c48e6264-2dca-45d5-8250-083c7e81ab63.png" type="image/png" />
    </Helmet>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
