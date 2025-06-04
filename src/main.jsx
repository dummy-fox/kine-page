import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import HomePage from './HomePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/:clienteId" element={<App />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>

  </React.StrictMode>
);
