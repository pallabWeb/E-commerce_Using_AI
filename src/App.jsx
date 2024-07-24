import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import './css/App.css'; // Ensure this import is here

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <nav className="nav-bar">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/signup" className="nav-link">Signup</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
