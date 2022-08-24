import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {App} from './components/UI/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App parrafo = "hola soy un titulo" /> 
  </React.StrictMode>  
);


reportWebVitals();
