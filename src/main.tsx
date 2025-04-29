
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

// Make sure to wrap the App component with React.StrictMode instead of directly using BrowserRouter here
// since BrowserRouter is already in App.tsx
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
