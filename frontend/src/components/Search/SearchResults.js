import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../assets/css/SearchResults.css";
import { FaStar } from "react-icons/fa";

const SearchResults = () => {
  const { searchResults } = useContext(SearchContext); // Lấy kết quả từ context

  // Trạng thái lọc
  const [minPriceFilter, setMinPriceFilter] = useState('');
  const [maxPriceFilter, setMaxPriceFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [reviewFilter, setReviewFilter] = useState('');

  const navigate = useNavigate(); // Khởi tạo useNavigate

  // Hàm kiểm tra giá trị nhập
  const handlePriceChange = (e, setValue) => {
    if (e.target.value >= 0) setValue(e.target.value);
  };

  // Hàm lọc kết quả
  const filteredResults = searchResults.filter((room) => {
    // Lọc theo giá
    const priceMatch = 
      (minPriceFilter ? room.price >= minPriceFilter : true) && 
      (maxPriceFilter ? room.price <= maxPriceFilter : true);
    
    // Lọc theo rating
    const ratingMatch = ratingFilter ? room.rating >= ratingFilter : true;
    
    // Lọc theo reviews
    const reviewMatch = reviewFilter ? room.reviews >= reviewFilter : true;

    return priceMatch && ratingMatch && reviewMatch;
  });

  // Hàm xử lý khi nhấn nút "Thông tin"
  const handleInfoClick = (roomId) => {
    // Điều hướng đến trang chi tiết của phòng
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="search-results">
      {/* Bộ lọc */}
      <div className="filters">
        <div className="filter">
          <label>Giá tối thiểu:</label>
          <input 
            type="number" 
            placeholder="Giá tối thiểu" 
            value={minPriceFilter} 
            onChange={(e) => handlePriceChange(e, setMinPriceFilter)} 
          />
        </div>
        <div className="filter">
          <label>Giá tối đa:</label>
          <input 
          
            type="number" 
            placeholder="Giá tối đa" 
            value={maxPriceFilter} 
            onChange={(e) => handlePriceChange(e, setMaxPriceFilter)} 
          />
        </div>
        <div className="filter">
          <label>Đánh giá tối thiểu:</label>
          <input 
            type="number" 
            placeholder="Rating (1-5)" 
            min="1" max="5"
            value={ratingFilter} 
            onChange={(e) => setRatingFilter(e.target.value)} 
          />
        </div>
        <div className="filter">
          <label>Số lượng đánh giá tối thiểu:</label>
          <input 
            type="number" 
            placeholder="Số lượng đánh giá" 
            value={reviewFilter} 
            onChange={(e) => setReviewFilter(e.target.value)} 
          />
        </div>
      </div>

      {/* Dòng thông báo số lượng sản phẩm */}
      <div className="results-info">
        <p>Đã tìm thấy {filteredResults.length} sản phẩm</p>
      </div>

      {/* Kết quả tìm kiếm */}
      {filteredResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="product-grid">
          {filteredResults.map((room) => (
            <div key={room.id} className="product-item">
              <div className="product-image">
                <img src={room.image} alt={room.name} className="room-image" />
              </div>
              <div className="product-info">
                <h3>{room.name}</h3>
                <p>{room.address}</p>
                <p className="price">{room.price}</p>
                <div className="rating">
                  <FaStar /> {room.rating} ({room.reviews} reviews)
                </div>
                <button 
                  className="info-btn"
                  onClick={() => handleInfoClick(room.id)} // Gọi hàm xử lý khi nhấn "Thông tin"
                >
                  Thông tin
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
