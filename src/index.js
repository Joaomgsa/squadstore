import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import Header from './component/Header';
import Navbar from './component/Nav';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<
  React.StrictMode>
  <BrowserRouter>
    <Header />
    <Navbar />
    <App />
  </BrowserRouter>
</React.StrictMode>);


