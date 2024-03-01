import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Login from './Login';
import Home from './Home';
import Events from './Events';
import Account from './Account';
import Details from './Details';
import Header from './Header';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Header />
    <Login />
    <Footer/>
    </>
  </React.StrictMode>
);


