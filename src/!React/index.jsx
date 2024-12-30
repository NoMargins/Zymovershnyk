import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


// const url = 'https://dobrovershnyk.online/api/get.php';
// const url = '/api/get.php/';
const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Root container not found');
}
