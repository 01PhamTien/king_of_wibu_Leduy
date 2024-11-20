import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaSearch } from 'react-icons/fa';
import '../assets/css/Header.css';
import { SearchContext } from '../context/SearchContext';

const Header = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [destination, setDestination] = useState('');
  const { setSearchResults } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleSearch = () => {
    if (!startDate || !guests || !rooms || !destination) {
      alert('Please fill all the fields.');
      return;
    }

    // Format the dates to 'YYYY-MM-DD'
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate ? endDate.toISOString().split('T')[0] : formattedStartDate;

    const url = `http://localhost:5000/api/search?destination=${destination}&startDate=${formattedStartDate}&endDate=${formattedEndDate}&guests=${guests}&rooms=${rooms}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data); // Store the search results in context
        navigate('/search-results'); // Navigate to the search results page
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
          <Link to="/register">
            <i className="bi bi-person-plus"></i> Register
          </Link>
          <Link to="/login">
            <i className="bi bi-box-arrow-in-right"></i> Sign In
          </Link>
        </div>
      </div>

      <nav className="nav">
        <Link to="/"><i className="bi bi-house"></i> Home</Link>
        <Link to="/room-list"><i className="bi bi-list-ul"></i> Room List</Link>
        <Link to="/booking"><i className="bi bi-calendar-check"></i> Booking</Link>
        <Link to="/news"><i className="bi bi-newspaper"></i> News</Link>
        <Link to="/about"><i className="bi bi-info-circle"></i> About</Link>
        <Link to="/contact"><i className="bi bi-envelope"></i> Contact</Link>
      </nav>

      <div className="middle-text">
        <p><i className="bi bi-search"></i> Find your next stay</p>
        <p>Search low prices on hotels, homes, and much more...</p>
      </div>

      <div className="search-section">
        <div className="input-container">
          <label>Destination</label>
          <input
            type="text"
            className="form-control"
            placeholder="Destination (e.g., Phu Quoc)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="date-picker-container">
          <label>Select Date</label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="dd/MM/yyyy"
            className="form-control"
            minDate={new Date()}
            placeholderText="Select Dates"
            calendarClassName="custom-calendar"
          />
        </div>
        <div className="guests-room-container">
          <div className="input-container">
            <label>Guests</label>
            <input
              type="number"
              className="form-control"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
            />
          </div>
          <div className="input-container">
            <label>Rooms</label>
            <input
              type="number"
              className="form-control"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              min="1"
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleSearch}>
          <FaSearch /> Search
        </button>
      </div>
    </header>
  );
};

export default Header;
