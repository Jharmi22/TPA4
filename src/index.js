import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

import {BrowserRouter, Routes, Route} from 'react-router-dom'


import About from './routes/AboutPage'
import ContactPage from './routes/ContactPage'
import ProjectPage from './routes/ProjectPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/project' element={<ProjectPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

