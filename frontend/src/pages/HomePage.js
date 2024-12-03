import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css"; 
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; 
import Banner from "../components/Banner"; 
import rooms from "../data/data"; 
import Partners from "../components/Partners";
import HotDestinations from "../components/HotDestinations";

const SearchResult = () => {
  const data = [
    {
      location: "Kraków",
      date: "T6, 22 tháng 11–CN, 24 tháng 11",
      numPeople: "2 người lớn",
      imgSrc: "/images/001.jpg",
    },
    {
      location: "Prague",
      date: "T6, 22 tháng 11–CN, 24 tháng 11",
      numPeople: "2 người lớn",
      imgSrc: "/images/001.jpg",
    },
  ];

  return (
    <div className="search-container">
      <h2>Tìm kiếm gần đây của bạn</h2>
      <div className="result-container">
        {data.map((item, index) => (
          <div key={index} className="result-card">
            <img src={item.imgSrc} alt={item.location} className="result-img" />
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

  const handleDoubleClick = (roomId) => {
    // Chuyển hướng đến trang chi tiết phòng khi click đôi
    window.location.href = `/room/${roomId}`;
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
              <div className="hotel-item" key={room.id} onDoubleClick={() => handleDoubleClick(room.id)}>
                <img src={room.image} alt={`Room ${room.id}`} />
                <h3>{room.name}</h3>
                <p>{room.address}</p>
                <p className="price">
                  <strong>Giá từ: {room.price}/đêm</strong>
                </p>
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

      <div className="special-rooms">
        <div className="hotel-grid">
          {rooms.slice(4, 8).map((room) => (
            <div className="hotel-item" key={room.id} onDoubleClick={() => handleDoubleClick(room.id)}>
              <img src={room.image} alt={`Room ${room.id}`} />
              <h3>{room.name}</h3>
              <p>{room.address}</p>
              <p className="price">
                <strong>Giá từ: {room.price}/đêm</strong>
              </p>
              <div className="rating">
                {renderStars(room.rating)}
                <div className="rating-info">
                  <span>{room.rating}</span>
                  <span> ({room.reviews} đánh giá)</span>
                </div>
              </div>
              <button>Đặt Ngay</button>
            </div>
          ))}
        </div>
      </div>

      <h3>Mã giảm giá Khách sạn</h3>
      <div className="promotion-item">
        <span>Mã: HOTELGANNHA</span>
        <p>Giảm đến 300K nội địa</p>
        <p>Giảm 80K, đặt nội địa từ 3 triệu...</p>
        <button>Sao chép mã</button>
      </div>
      <div className="promotion-item">
        <span>Mã: STAYQUOCTE</span>
        <p>Giảm đến 300K khi đặt Thái Lan, Singapore, Malaysia</p>
        <p>Giảm 3% tối đa 300K...</p>
        <button>Sao chép mã</button>
      </div>

      <div className="hotel-list">
        <h3>Phòng khách sạn phổ biến</h3>
        <div className="hotel-grid">
          {rooms.slice(0, 4).map((room) => (
            <div className="hotel-item" key={room.id} onDoubleClick={() => handleDoubleClick(room.id)}>
              <img src={room.image} alt={`Room ${room.id}`} />
              <h3>{room.name}</h3>
              <p>{room.address}</p>
              <p className="price">
                <strong>Giá từ: {room.price}/đêm</strong>
              </p>
              <div className="rating">
                {renderStars(room.rating)}
                <div className="rating-info">
                  <span>{room.rating}</span>
                  <span> ({room.reviews} đánh giá)</span>
                </div>
              </div>
              <button>Đặt Ngay</button>
            </div>
          ))}
        </div>
      </div>

      <div className="special-rooms">
        <h3>Phòng đặc biệt</h3>
        <div className="hotel-grid">
          {rooms.slice(4, 8).map((room) => (
            <div className="hotel-item" key={room.id} onDoubleClick={() => handleDoubleClick(room.id)}>
              <img src={room.image} alt={`Room ${room.id}`} />
              <h3>{room.name}</h3>
              <p>{room.address}</p>
              <p className="price">
                <strong>Giá từ: {room.price}/đêm</strong>
              </p>
              <div className="rating">
                {renderStars(room.rating)}
                <div className="rating-info">
                  <span>{room.rating}</span>
                  <span> ({room.reviews} đánh giá)</span>
                </div>
              </div>
              <button>Đặt Ngay</button>
            </div>
          ))}
        </div>
      </div>

      <Partners />
      
      <HotDestinations />
    </div>
  );
};

export default HomePage;
