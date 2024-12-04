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

  // Hàm xử lý sự thay đổi giá trị và làm tròn giá trị nhập vào
  const handlePriceChange = (e, setValue) => {
    const value = e.target.value;

    // Kiểm tra nếu người dùng nhập giá trị rỗng
    if (value === '') {
      setValue('');
      return;
    }

    // Chuyển giá trị thành số nguyên và kiểm tra tính hợp lệ
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue) && numericValue >= 0) {
      // Cập nhật giá trị mà không làm tròn, chỉ làm tròn khi cần thiết
      setValue(numericValue.toString()); // Cập nhật giá trị nhập vào trực tiếp
    } else {
      // Nếu giá trị nhập vào không hợp lệ, reset về giá trị ban đầu
      setValue('');
    }
  };

  // Hàm chuyển đổi giá thành số để so sánh
  const parsePrice = (price) => {
    return parseInt(price.replace(/[^0-9]/g, ''), 10); // Loại bỏ tất cả ký tự không phải số và chuyển thành số nguyên
  };

  // Hàm lọc kết quả
  const filteredResults = searchResults.filter((room) => {
    const roomPrice = parsePrice(room.price); // Chuyển giá phòng thành số

    // Lọc theo giá
    const priceMatch = 
      (minPriceFilter ? roomPrice >= parsePrice(minPriceFilter) : true) && 
      (maxPriceFilter ? roomPrice <= parsePrice(maxPriceFilter) : true);
    
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
                <p className="price">{room.price} ₫</p> {/* Thêm ký hiệu VND */}
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
