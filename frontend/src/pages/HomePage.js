// src/HomePage.js
import React from 'react';  
import '../assets/css/Home.css'; // Import CSS cho trang chủ  
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Sử dụng icon sao  
import Banner from '../components/Banner';  // Import Banner component
import rooms from '../data/data';  // Import dữ liệu phòng khách sạn từ file data.js

const SearchResult = () => {
  const data = [
    {
      location: 'Kraków',
      date: 'T6, 22 tháng 11–CN, 24 tháng 11',
      numPeople: '2 người lớn',
      imgSrc: '/images/001.jpg'
    },
    {
      location: 'Prague',
      date: 'T6, 22 tháng 11–CN, 24 tháng 11',
      numPeople: '2 người lớn',
      imgSrc: '/images/001.jpg'
    }
  ];

  return (
    <div className="search-container">
      <h2>Tìm kiếm gần đây của bạn</h2>
      <div className="result-container">
        {data.map((item, index) => (
          <div key={index} className="result-card">
            <img
              src={item.imgSrc}
              alt={item.location}
              className="result-img"
            />
            <div className="result-details">
              <h3>{item.location}</h3>
              <p>{item.date}</p>
              <p>{item.numPeople}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} color="#ffc107" />
        ))}
        {halfStar && <FaStarHalfAlt color="#ffc107" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} color="#ffc107" />
        ))}
      </>
    );
  };

  return (
    <div className="homepage">
      <Banner />
      <div className="promotion">
        <SearchResult />
        <div className="hotel-list">
          <h3>Bạn có còn quan tâm đến những chỗ nghỉ này?</h3>
          <div className="hotel-grid">
            {rooms.slice(0, 4).map((room) => (
              <div className="hotel-item" key={room.id}>
                <img
                  src={room.image}
                  alt={`Room ${room.id}`}
                />
                <h3>{room.name}</h3>
                <p>{room.address}</p>
                <p className="price"><strong>Giá từ: {room.price}/đêm</strong></p>
                <div className="rating">
                  {renderStars(room.rating)}
                  <div className="rating-info">
                    <span>{room.rating}</span>
                    <span> ({room.reviews} đánh giá)</span>
                  </div>
                </div>
                <button>Đặt ngay</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
