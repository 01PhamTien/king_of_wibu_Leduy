import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchForm from './SearchForm'; // Import component mới
import '../../assets/css/Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUserName(loggedInUser.name);
      if (loggedInUser.role === 'admin') {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserName('');
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <i className="bi bi-house-door-fill"></i>
            BOOKING.COM
          </Link>
        </div>
        <div className="auth-buttons">
          {!isLoggedIn ? (
            <>
              <Link to="/register">
                <i className="bi bi-person-plus"></i> Register
              </Link>
              <Link to="/login">
                <i className="bi bi-box-arrow-in-right"></i> Sign In
              </Link>
            </>
          ) : (
            <div className="welcome-message">
              <span>Welcome, {userName}!</span>
              <div className="dropdown">
                <button className="dropdown-toggle">Account</button>
                <div className="dropdown-menu">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <nav className="nav">
        <Link to="/"><i className="bi bi-house"></i> Home</Link>
        <div className="dropdown">
          <Link className="dropdown-toggle">
            <i className="bi bi-list-ul"></i> Room List
          </Link>
          <div className="dropdown-menu">
            <Link to="/room-list/single">Single Rooms</Link>
            <Link to="/room-list/double">Double Rooms</Link>
            <Link to="/room-list/family">Family Rooms</Link>
          </div>
        </div>
        <Link to="/booking"><i className="bi bi-calendar-check"></i> Booking</Link>
        <Link to="/news"><i className="bi bi-newspaper"></i> News</Link>
        <Link to="/about"><i className="bi bi-info-circle"></i> About</Link>
        <Link to="/contact"><i className="bi bi-envelope"></i> Contact</Link>
      </nav>

      <div className="middle-text">
        <p><i className="bi bi-search"></i> Find your next stay</p>
        <p>Search low prices on hotels, homes, and much more...</p>
      </div>

      {/* Sử dụng component SearchForm */}
      <SearchForm />
    </header>
  );
};

export default Header;
