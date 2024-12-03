import React, { useState } from 'react';
import '../assets/css/Home.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Banner from '../components/Banner';
import rooms from '../data/data';

const HomePage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Lưu thông tin phòng được chọn
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: '', // Ban đầu để trống để yêu cầu người dùng chọn
    quantity: 1,
  }); // Lưu thông tin người đặt
  const [showModal, setShowModal] = useState(false); // Trạng thái hiển thị modal
  const [error, setError] = useState(''); // Lưu thông báo lỗi

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

  // Xử lý khi nhấn "Đặt ngay"
  const handleOrder = (room) => {
    setSelectedRoom(room);
    setShowModal(true); // Hiển thị modal khi nhấn "Đặt ngay"
  };

  // Xử lý sự kiện thay đổi số lượng
  const handleQuantityChange = (delta) => {
    setOrderInfo((prev) => {
      const newQuantity = Math.max(1, prev.quantity + delta); // Số lượng tối thiểu là 1
      return {
        ...prev,
        quantity: newQuantity,
      };
    });
  };

  // Hàm tính tổng giá
  const calculateTotalPrice = () => {
    if (!selectedRoom) return 0;

    // Chuyển giá thành số nếu chưa phải kiểu số và tính tổng giá
    const price = parseFloat(selectedRoom.price.replace(/[^\d.-]/g, '')); // Xóa dấu phân cách nếu có
    return price * orderInfo.quantity;
  };

  // Xử lý gửi thông tin đơn hàng
  const handleOrderSubmit = () => {
    // Kiểm tra xem các trường thông tin đã được điền đầy đủ chưa
    if (!orderInfo.name) {
      setError('Vui lòng nhập họ tên.');
      return;
    }
    if (!orderInfo.address) {
      setError('Vui lòng nhập địa chỉ.');
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

    // Nếu tất cả các thông tin hợp lệ, thông báo đặt hàng thành công
    alert("Đơn hàng đã được đặt thành công!");

    // Đóng modal và reset lại thông tin đặt hàng
    setShowModal(false);
    setError(''); // Reset thông báo lỗi
    setOrderInfo({
      name: '',
      address: '',
      phone: '',
      paymentMethod: '', // Để trống lại sau khi đặt hàng
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
              <div className="hotel-item" key={room.id}>
                <img
                  src={room.image}
                  alt={`Room ${room.id}`}
                />
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

      {/* Modal Đặt hàng */}
      {showModal && selectedRoom && (
        <div className="modal show">
          <div className="modal-content">
            <h2>Thông tin đặt hàng</h2>
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
                type="text"
                placeholder="Địa chỉ"
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

            {/* Hiển thị thông báo lỗi nếu có */}
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