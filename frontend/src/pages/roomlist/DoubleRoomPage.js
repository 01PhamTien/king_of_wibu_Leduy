import React, { useState } from 'react';
import '../../assets/css/DoubleRoomPage.css';

const doubleRooms = [
  {
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://nhakhachcongdoan.com.vn/uploads/Phong/HinhAnhPhong/NQL_0063%20(1).jpg",
    type: "Standard",
  },
  {
    name: "Skylark Boutique Hotel",
    location: "Hà Nội, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 3,
    reviews: 45,
    image: "https://noithatmyhouse.net/wp-content/uploads/2020/07/phong-doi-5.jpg",
    type: "Standard",
  },
  {
    name: "Flamingo Hotel",
    location: "Đà Nẵng, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4,
    reviews: 200,
    image: "https://kientruchoanmy.vn/wp-content/uploads/2022/07/thiet-ke-phong-khach-san-3.jpg",
    type: "Standard",
  },
  {
    name: "Sài Gòn Hotel",
    location: "Sài Gòn, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 5,
    reviews: 350,
    image: "https://www.cet.edu.vn/wp-content/uploads/2019/05/twin-room-la-loai-phong-co-2-giuong-lon.jpg",
    type: "Standard",
  },
  {
    name: "Golden Pearl Luxury Hotel",
    location: "TP. HCM, Việt Nam",
    price: "5,000,000 VND/đêm",
    rating: 4.8,
    reviews: 180,
    image: "https://anviethouse.vn/wp-content/uploads/2021/12/Phong-ngu-khach-san-indochine-2-1.png",
    type: "Luxury",
  },
  {
    name: "Diamond Sky Luxury Room",
    location: "Đà Nẵng, Việt Nam",
    price: "4,500,000 VND/đêm",
    rating: 5,
    reviews: 250,
    image: "https://acihome.vn/uploads/17/tieu-chuan-phong-ngu-khach-san-5-sao-tai-viet-nam.jpg",
    type: "Luxury",
  },
];

const DoubleRoomPage = () => {
  const [selectedType, setSelectedType] = useState('Standard');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', email: '', quantity: 1 });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedRooms([]); // Reset selected rooms when changing room type
  };

  const handleBookingClick = (room) => {
    if (!isLoggedIn) {
      alert("Vui lòng đăng nhập để tiếp tục.");
      return;
    }
    setSelectedRooms([...selectedRooms, { ...room, quantity: 1 }]);
    setIsModalVisible(true); // Show modal on click
  };

  const handleBooking = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.email || !paymentMethod) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin và chọn phương thức thanh toán.");
      return;
    }

    if (!customerInfo.email.includes("@gmail.com")) {
      setErrorMessage("Email phải chứa '@gmail.com'.");
      return;
    }

    for (let room of selectedRooms) {
      if (room.quantity <= 0) {
        setErrorMessage("Số lượng phòng không thể là giá trị âm hoặc 0.");
        return;
      }
    }

    setErrorMessage("");

    const totalAmount = selectedRooms.reduce((total, room) => {
      const roomPrice = parseFloat(room.price.replace(' VND/đêm', '').replace(',', ''));
      return total + roomPrice * room.quantity;
    }, 0);

    alert(`Đặt phòng thành công! Tổng số tiền: ${totalAmount} VND`);
    setIsModalVisible(false); // Close modal after booking
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const handleRoomQuantityChange = (index, quantity) => {
    const updatedRooms = [...selectedRooms];
    updatedRooms[index].quantity = quantity;
    setSelectedRooms(updatedRooms);
  };

  const handleRoomDelete = (index) => {
    const updatedRooms = selectedRooms.filter((room, i) => i !== index);
    setSelectedRooms(updatedRooms);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const calculateTotalAmount = () => {
    return selectedRooms.reduce((total, room) => {
      const roomPrice = parseFloat(room.price.replace(' VND/đêm', '').replace(',', ''));
      return total + roomPrice * room.quantity;
    }, 0);
  };

  const filteredRooms = doubleRooms.filter((room) => room.type === selectedType);

  return (
    <div className="double-room-page">
      <h1 className="header-title">Double Room Booking</h1>

      <div className="room-type-buttons">
        <button
          onClick={() => handleTypeChange('Standard')}
          className={selectedType === 'Standard' ? 'active' : ''}
        >
          Phòng Standard
        </button>
        <button
          onClick={() => handleTypeChange('Luxury')}
          className={selectedType === 'Luxury' ? 'active' : ''}
        >
          Phòng Luxury
        </button>
      </div>

      <div className="room-list">
        {filteredRooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.image} alt={room.name} />
            <h2>{room.name}</h2>
            <p>{room.location}</p>
            <p>Giá từ: {room.price}</p>
            <p>{room.rating} ⭐ ({room.reviews} đánh giá)</p>
            <p>Loại phòng: {room.type}</p>
            <button className="book-button" onClick={() => handleBookingClick(room)}>
              Đặt ngay
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div className={`modal ${isModalVisible ? 'show' : ''}`}>
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
                onChange={(e) => handleRoomQuantityChange(index, parseInt(e.target.value))}
                min="1"
                placeholder="Số lượng phòng"
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
                onChange={handlePaymentChange}
              />
              Thanh toán qua thẻ
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="cash"
                onChange={handlePaymentChange}
              />
              Thanh toán tiền mặt
            </label>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="total-amount">
            <p>Tổng số tiền: {calculateTotalAmount()} VND</p>
          </div>

          <button className="book-now-button" onClick={handleBooking}>
            Đặt ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoubleRoomPage;
