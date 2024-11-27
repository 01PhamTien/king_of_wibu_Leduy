import React, { useState } from 'react';
import '../../assets/css/FamilyRoomPage.css';

const hotels = [
  {
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "/images/111.jpg",
    type: "Phong vip",
  },
  {
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "/images/111.jpg",
    type: "Phong vip",
  },
  {
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "/images/111.jpg",
    type: "Phong vip",
  },
  {
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "/images/111.jpg",
    type: "Phong vip",
  },
  

  {
    name: "Golden Pearl Luxury Hotel",
    location: "TP. HCM, Việt Nam",
    price: "5,000,000 VND/đêm",
    rating: 4.8,
    reviews: 180,
    image: "https://anviethouse.vn/wp-content/uploads/2021/12/Phong-ngu-khach-san-indochine-2-1.png",
    type: "Phong thuong",
  },
  {
    name: "Golden Pearl Luxury Hotel",
    location: "TP. HCM, Việt Nam",
    price: "5,000,000 VND/đêm",
    rating: 4.8,
    reviews: 180,
    image: "https://anviethouse.vn/wp-content/uploads/2021/12/Phong-ngu-khach-san-indochine-2-1.png",
    type: "Phong thuong",
  },{
    name: "Golden Pearl Luxury Hotel",
    location: "TP. HCM, Việt Nam",
    price: "5,000,000 VND/đêm",
    rating: 4.8,
    reviews: 180,
    image: "https://anviethouse.vn/wp-content/uploads/2021/12/Phong-ngu-khach-san-indochine-2-1.png",
    type: "Phong thuong",
  },{
    name: "Golden Pearl Luxury Hotel",
    location: "TP. HCM, Việt Nam",
    price: "5,000,000 VND/đêm",
    rating: 4.8,
    reviews: 180,
    image: "https://anviethouse.vn/wp-content/uploads/2021/12/Phong-ngu-khach-san-indochine-2-1.png",
    type: "Phong thuong",
  },
  // các phòng khác
];

const FamilyRoomPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [isLoggedIn] = useState(true);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', email: '' });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [minRating, setMinRating] = useState(0);
  const [selectedRoomType, setSelectedRoomType] = useState('all'); // 'all', 'vip', 'thuong'

  const handleBookingClick = (room) => {
    if (!isLoggedIn) {
      alert("Vui lòng đăng nhập để tiếp tục.");
      return;
    }
    setSelectedRooms([...selectedRooms, { ...room, quantity: 1 }]);
    setIsModalVisible(true);
  };

  const handleBooking = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.email || !paymentMethod) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin và chọn phương thức thanh toán.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      setErrorMessage("Email không hợp lệ.");
      return;
    }

    for (let room of selectedRooms) {
      if (room.quantity <= 0 || isNaN(room.quantity)) {
        setErrorMessage("Số lượng phòng phải lớn hơn 0.");
        return;
      }
    }

    setErrorMessage("");
    alert(`Đặt phòng thành công! Tổng số tiền: ${calculateTotalAmount().toLocaleString('vi-VN')} VND`);
    setIsModalVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const handleRoomQuantityChange = (index, quantity) => {
    if (quantity <= 0 || isNaN(quantity)) {
      alert("Số lượng phòng phải lớn hơn 0.");
      return;
    }
    const updatedRooms = [...selectedRooms];
    updatedRooms[index].quantity = quantity;
    setSelectedRooms(updatedRooms);
  };

  const handleRoomDelete = (index) => {
    const updatedRooms = selectedRooms.filter((_, i) => i !== index);
    setSelectedRooms(updatedRooms);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const calculateTotalAmount = () => {
    return selectedRooms.reduce((total, room) => {
      const roomPrice = parseInt(room.price.replace(/[^\d]/g, ''), 10);
      return total + roomPrice * room.quantity;
    }, 0);
  };

  // Lọc các phòng theo tiêu chí tìm kiếm và loại phòng
  const filteredRooms = hotels.filter((room) => {
    const roomPrice = parseInt(room.price.replace(/[^\d]/g, ''), 10);
    const matchesSearchQuery =
      room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = roomPrice >= minPrice && roomPrice <= maxPrice;
    const matchesRating = room.rating >= minRating;
    const matchesRoomType =
      selectedRoomType === 'all' ||
      (selectedRoomType === 'vip' && room.type === 'Phong vip') ||
      (selectedRoomType === 'thuong' && room.type === 'Phong thuong');

    return matchesSearchQuery && matchesPrice && matchesRating && matchesRoomType;
  });

  return (
    <div className="family-room-page">
      <h1 className="header-title">Family Room Booking</h1>

      {/* Thanh tìm kiếm và bộ lọc */}
      <div className="filters">
        <input
          type="text"
          placeholder="Tìm kiếm phòng..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="filter-group">
          <label>
            Giá từ:
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Giá đến:
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </label>
          <label>
            Đánh giá tối thiểu:
            <input
              type="number"
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              min="0"
              max="5"
            />
          </label>
          <label>
            Loại phòng:
            <select
              value={selectedRoomType}
              onChange={(e) => setSelectedRoomType(e.target.value)}
            >
              <option value="all">Tất cả</option>
              <option value="vip">Phòng VIP</option>
              <option value="thuong">Phòng Thường</option>
            </select>
          </label>
        </div>
      </div>

      {/* Danh sách phòng */}
      <div className="room-list">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.name} />
              <h2>{room.name}</h2>
              <p>{room.location}</p>
              <p className="price">Giá từ: {room.price}</p>
              <p>{room.rating} ⭐ ({room.reviews} đánh giá)</p>
              <button className="book-button" onClick={() => handleBookingClick(room)}>
                Đặt ngay
              </button>
            </div>
          ))
        ) : (
          <p>Không có phòng phù hợp.</p>
        )}
      </div>

      {/* Modal cho việc đặt phòng */}
      {isModalVisible && (
        <div className="modal show">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setIsModalVisible(false)}>&times;</span>
            <h3>Thông tin đặt phòng</h3>

            {selectedRooms.map((room, index) => (
              <div key={index} className="room-selection">
                <h4>{room.name}</h4>
                <p>Giá: {room.price}</p>
                <input
                  type="number"
                  value={room.quantity}
                  onChange={(e) => handleRoomQuantityChange(index, parseInt(e.target.value, 10))}
                  min="1"
                />
                <button className="delete-button" onClick={() => handleRoomDelete(index)}>
                  Xóa phòng
                </button>
              </div>
            ))}

            <div className="customer-info">
              <input
                type="text"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                placeholder="Họ và tên"
              />
              <input
                type="text"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
                placeholder="Số điện thoại"
              />
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </div>

            <div className="payment-method">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={handlePaymentChange}
                />
                Thanh toán qua thẻ tín dụng
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={handlePaymentChange}
                />
                Thanh toán qua PayPal
              </label>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button className="confirm-booking" onClick={handleBooking}>
              Xác nhận đặt phòng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyRoomPage;
