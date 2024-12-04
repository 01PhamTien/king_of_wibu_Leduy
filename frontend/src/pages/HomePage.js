import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Dùng useNavigate để điều hướng
import '../assets/css/Home.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Banner from '../components/Banner';
import rooms from '../data/data';

const HomePage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: '',
    quantity: 1,
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Để kiểm tra trạng thái đăng nhập
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  // Kiểm tra đăng nhập khi trang được tải
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    setIsLoggedIn(loggedInUser ? true : false);
  }, []);

  // Hàm xử lý khi nhấn Đặt ngay
  const handleOrder = (room) => {
    if (!isLoggedIn) {
      // Nếu chưa đăng nhập, chuyển hướng đến trang login
      navigate('/login');
    } else {
      // Nếu đã đăng nhập, hiển thị modal đặt phòng
      setSelectedRoom(room);
      setShowModal(true);
    }
  };

  // Hàm xử lý khi nhấn đúp vào một sản phẩm để chuyển hướng tới trang chi tiết
  const handleRoomDetail = (id) => {
    navigate(`/room/${id}`); // Giả sử URL chi tiết phòng là /room-detail/:id
  };

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

  const handleQuantityChange = (delta) => {
    setOrderInfo((prev) => {
      const newQuantity = Math.max(1, prev.quantity + delta);
      return {
        ...prev,
        quantity: newQuantity,
      };
    });
  };

  const calculateTotalPrice = () => {
    if (!selectedRoom) return 0;

    const price = parseFloat(selectedRoom.price.replace(/[^\d.-]/g, ''));
    return price * orderInfo.quantity;
  };

  const handleOrderSubmit = () => {
    if (!orderInfo.name) {
      setError('Vui lòng nhập họ tên.');
      return;
    }
    if (!orderInfo.address) {
      setError('Vui lòng nhập email.');
      return;
    }
    if (!orderInfo.phone) {
      setError('Vui lòng nhập số điện thoại.');
      return;
    }
    if (!orderInfo.paymentMethod) {
      setError('Vui lòng chọn phương thức thanh toán.');
      return;
    }

    alert("Đơn hàng đã được đặt thành công!");

    setShowModal(false);
    setError('');
    setOrderInfo({
      name: '',
      address: '',
      phone: '',
      paymentMethod: '',
      quantity: 1,
    });
  };

  return (
    <div className="homepage">
      <Banner />
      <div className="promotion">
        <div className="hotel-list">
          <h3>Bạn có còn quan tâm đến những chỗ nghỉ này?</h3>
          <div className="hotel-grid">
            {rooms.slice(0, 16).map((room) => (
              <div
                className="hotel-item"
                key={room.id}
                onDoubleClick={() => handleRoomDetail(room.id)} // Thêm sự kiện onDoubleClick
              >
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
                <button onClick={() => handleOrder(room)}>Đặt ngay</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && selectedRoom && (
        <div className="modal show">
          <div className="modal-content">
            <h2>Thông tin đặt phòng</h2>
            <div className="product-info">
              <img src={selectedRoom.image} alt={selectedRoom.name} />
              <div className="product-details">
                <h3>{selectedRoom.name}</h3>
                <p>Giá: {selectedRoom.price} VND/đêm</p>
                <div className="quantity">
                  <button onClick={() => handleQuantityChange(-1)}>-</button>
                  <span>{orderInfo.quantity}</span>
                  <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
                <div className="total-price">
                  <strong>
                    Tổng giá: {calculateTotalPrice().toLocaleString()} VND
                  </strong>
                </div>
              </div>
            </div>
            <div className="customer-info">
              <input
                type="text"
                placeholder="Tên của bạn"
                value={orderInfo.name}
                onChange={(e) =>
                  setOrderInfo({ ...orderInfo, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                value={orderInfo.address}
                onChange={(e) =>
                  setOrderInfo({ ...orderInfo, address: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                value={orderInfo.phone}
                onChange={(e) =>
                  setOrderInfo({ ...orderInfo, phone: e.target.value })
                }
              />
              <select
                value={orderInfo.paymentMethod}
                onChange={(e) =>
                  setOrderInfo({ ...orderInfo, paymentMethod: e.target.value })
                }
              >
                <option value="">Chọn phương thức thanh toán</option>
                <option value="COD">Thanh toán khi nhận hàng</option>
                <option value="Bank">Chuyển khoản</option>
                <option value="CreditCard">Thẻ tín dụng</option>
              </select>
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Hủy</button>
              <button onClick={handleOrderSubmit}>Xác nhận</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
