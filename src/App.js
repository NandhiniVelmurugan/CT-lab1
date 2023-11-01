import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Courseslog from './components/Courseslog';

import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart'; 
import Payment from './components/Payment';
import Register from './components/Register';
import Quiz from './components/Quiz';
import Quizlog from './components/Quizlog';
import Homelog from './components/Homelog';
import Profilelog from './components/Profilelog';
import Aboutlog from './components/Aboutlog';
import Contactlog from './components/Contactlog';


import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courseslog" element={<Courseslog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/payment" element={<Payment />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quizlog" element={<Quizlog />} />

            <Route path="/homelog" element={<Homelog />} />
            <Route path="/profilelog" element={<Profilelog />} />
            <Route path="/aboutlog" element={<Aboutlog />} />
            <Route path="/contactlog" element={<Contactlog />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
