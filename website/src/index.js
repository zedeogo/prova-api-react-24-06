import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/index.js'
import Consulta from './pages/consulta/index.js'
import Cadastrar from './pages/cadastrar/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/consulta' element={<Consulta />} />
        <Route path='/cadastro' element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
