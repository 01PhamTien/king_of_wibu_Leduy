import React, { useState, useContext, useEffect } from 'react';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Kiểm tra nếu người dùng là admin
  const [userName, setUserName] = useState('');


  
  useEffect(() => {
  
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUserName(loggedInUser.name);
      if (loggedInUser.role === 'admin') {
        setIsAdmin(true);
        navigate('/AdminDashboard'); // Chuyển hướng admin đến trang quản trị
      }
    }
  }, [navigate]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleSearch = () => {
    if (!startDate || !guests || !rooms || !destination) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }


    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate ? endDate.toISOString().split('T')[0] : formattedStartDate;

    const url = `http://localhost:5000/api/search?destination=${destination}&startDate=${formattedStartDate}&endDate=${formattedEndDate}&guests=${guests}&rooms=${rooms}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data); 
        navigate('/search-results');
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      });
  };

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
            <img
          src="/images/LogoWibu.png"
          alt="Logo"
          className="logo-image"
          />

            KING OF WIBU
          </Link>
        </div>
        <div className="auth-buttons">
          {!isLoggedIn && (
            <>
              <Link to="/register">
                <i className="bi bi-person-plus"></i> Đăng ký
              </Link>
              <Link to="/login">
                <i className="bi bi-box-arrow-in-right"></i> Đăng nhập
              </Link>
            </>
          )}
          {isLoggedIn && (
            <div className="welcome-message dropdown">
              <span>Chào {userName}!</span> 
              <div className="dropdown-menu">
                <button onClick={handleLogout}>Đăng xuất</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <nav className="nav">
        <Link to="/"><i className="bi bi-house"></i> Trang chủ</Link>
        <div className="dropdown">
          <Link className="dropdown-toggle">
            <i className="bi bi-list-ul"></i> Danh sách phòng
          </Link>
          <div className="dropdown-menu">
            <Link to="/room-list/single">Phòng đơn</Link>
            <Link to="/room-list/double">Phòng đôi</Link>
            <Link to="/room-list/family">Phòng gia đình</Link>
          </div>
        </div>
        <Link to="/booking"><i className="bi bi-calendar-check"></i> Đặt phòng</Link>
        <Link to="/news"><i className="bi bi-newspaper"></i> Tin tức</Link>
        <Link to="/about"><i className="bi bi-info-circle"></i> Giới thiệu</Link>
        <Link to="/contact"><i className="bi bi-envelope"></i> Liên hệ</Link>
      </nav>

      <div className="middle-text">
        <p><i className="bi bi-search"></i> Tìm kiếm nơi ở tiếp theo của bạn</p>
        <p>Tìm kiếm giá thấp cho khách sạn, nhà ở và nhiều hơn nữa...</p>
      </div>

      <div className="search-section">
        <div className="input-container">
          <label>Điểm đến</label>
          <input
            type="text"
            className="form-control"
            placeholder="Điểm đến (ví dụ: Phú Quốc)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="date-picker-container">
          <label>Chọn ngày</label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="dd/MM/yyyy"
            className="form-control"
            minDate={new Date()}
            placeholderText="Chọn ngày"
            calendarClassName="custom-calendar"
          />
        </div>
        <div className="guests-room-container">
          <div className="input-container">
            <label>Số khách</label>
            <input
              type="number"
              className="form-control"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
            />
          </div>
          <div className="input-container">
            <label>Số phòng</label>
            <input
              type="number"
              className="form-control"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              min="1"
            />
          </div>
        </div>
        <button className="btn-search" onClick={handleSearch}>
          <FaSearch /> Tìm kiếm
        </button>
      </div>
    </header>
  );
};

export default Header;
