import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import './css/App.css';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="app-container">
                <nav className="bg-gray-800 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Link to="/" className="text-white text-lg font-bold">ShopEasy</Link>
                            </div>

                            {/* Navigation links - hidden on mobile */}
                            <div className="hidden md:flex md:items-center">
                                <Link to="/" className="nav-link hover:bg-gray-700 px-3 py-2 rounded-md mx-2">Home</Link>
                                <Link to="/products" className="nav-link hover:bg-gray-700 px-3 py-2 rounded-md mx-2">Products</Link>
                                <Link to="/about" className="nav-link hover:bg-gray-700 px-3 py-2 rounded-md mx-2">About</Link>
                            </div>

                            {/* Login and logout button */}
                            <div className="hidden md:flex md:items-center md:space-x-4">
                                {!isAuthenticated && (
                                    <>
                                        <Link to="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
                                    </>
                                )}
                                {isAuthenticated && (
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setIsOpen(false);
                                        }}
                                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                    >
                                        Logout
                                    </button>
                                )}
                            </div>

                            {/* Mobile menu button */}
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

                    {/* Mobile menu, show/hide based on menu state */}
                    {isOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link to="/" className="nav-link hover:bg-gray-700 block px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
                                <Link to="/products" className="nav-link hover:bg-gray-700 block px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>Products</Link>
                                <Link to="/about" className="nav-link hover:bg-gray-700 block px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>About</Link>
                                {!isAuthenticated && (
                                    <>
                                        <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => setIsOpen(false)}>Login</Link>
                                    </>
                                )}
                                {isAuthenticated && (
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setIsOpen(false);
                                        }}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Logout
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                    {/* Add routes for Products and About pages */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
