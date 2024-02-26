import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Login from './Login';
import Home from './Home';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Header />
    <Home />
    </>
  </React.StrictMode>
);


