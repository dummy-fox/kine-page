import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NotFound/>}/>
          <Route path="/:clienteId" element={<App />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>

  </React.StrictMode>
);
