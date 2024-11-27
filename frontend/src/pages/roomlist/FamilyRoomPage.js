import React, { useState } from 'react';
import '../../assets/css/FamilyRoomPage.css';

const hotels = [
  {
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
    type: "Phong vip",
  },
  {
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
    type: "Phong vip",
  },{
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
    type: "Phong vip",
  },{
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
    type: "Phong vip",
  },{
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
    type: "Phong vip",
  },{
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
    type: "Phong vip",
  },{
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
    type: "Phong vip",
  },{
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
    type: "Phong vip",
  },{
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
    type: "Phong vip",
  },{
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
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
];

const FamilyRoomPage = () => {
  const [selectedType, setSelectedType] = useState('Phong vip');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [isLoggedIn] = useState(true);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', email: '' });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedRooms([]);
  };

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

  const filteredRooms = hotels.filter((room) => room.type === selectedType);

  return (
    <div className="family-room-page">
      <h1 className="header-title">Family Room Booking</h1>

      {/* Lựa chọn loại phòng */}
      <div className="room-type-buttons">
        <button
          onClick={() => handleTypeChange('Phong vip')}
          className={selectedType === 'Phong vip' ? 'active' : ''}
        >
          Phòng Vip
        </button>
        <button
          onClick={() => handleTypeChange('Phong thuong')}
          className={selectedType === 'Phong thuong' ? 'active' : ''}
        >
          Phòng Thường
        </button>
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

      {/* Modal đặt phòng */}
      {isModalVisible && (
        <div className="modal show">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setIsModalVisible(false)}>&times;</span>
            <h3>Thông tin đặt phòng</h3>

            

            {selectedRooms.map((room, index) => (
              <div key={index} className="room-selection">
                {/* <img src={room.image} alt={room.name} className="room-image" /> */}
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
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={handlePaymentChange}
                />
                Thanh toán qua thẻ tín dụng
              </label>
              <label>
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={handlePaymentChange}
                />
                Thanh toán qua PayPal
              </label>
              <label>
                <input
                  type="radio"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={handlePaymentChange}
                />
                Thanh toán khi nhận phòng
              </label>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button className="confirm-button" onClick={handleBooking}>
              Xác nhận đặt phòng
            </button>

            {/* Hiển thị tổng giá tiền trong modal */}
            <div className="total-price">
              <h2>
                Tổng tiền: {calculateTotalAmount().toLocaleString('vi-VN')} VND
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyRoomPage;
