import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import './css/App.css';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Router>
            <div className="app-container">
                <nav className="bg-gray-800 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex-shrink-0">
                                <Link to="/" className="text-white text-lg font-bold">ShopEasy</Link>
                            </div>
                            <div className="hidden md:flex md:items-center md:space-x-4">
                                <Link to="/" className="nav-link hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
                                <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-full">Signup</Link>
                                <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded-full">Login</Link>
                            </div>
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {isOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link to="/" className="nav-link hover:bg-gray-700 block px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
                                <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mb-1" onClick={() => setIsOpen(false)}>Signup</Link>
                                <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded block" onClick={() => setIsOpen(false)}>Login</Link>
                            </div>
                        </div>
                    )}
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;