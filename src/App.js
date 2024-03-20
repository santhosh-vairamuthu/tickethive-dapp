
import './App.css';
import Login from './Login';
import Home from './Home';
import Events from './Events';
import Account from './Account';
import Details from './Details';
import AddEvent from './AddEvent';
import { EmailProvider } from "./EmailContext";
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <EmailProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/login" element={<Login isLoginForm={true} />} />
             <Route path="/signup" element={<Login isLoginForm={false} />} />
            <Route path="/event" element={<Events />} />
            <Route path="/account" element={<Account />} />
            <Route path="/detail/:concert_id" element={<Details />} />
            <Route path="/admin" element={<AddEvent />} />
          </Routes>
        </Router>
      </EmailProvider>
    </div>
  );
}

export default App;
