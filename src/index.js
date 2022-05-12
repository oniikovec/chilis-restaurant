import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Footer from './components/footer/footer.component';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
   <BrowserRouter>
    <div className='app-wrapper'>
      <App />
      <Footer/>
    </div>
   </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
