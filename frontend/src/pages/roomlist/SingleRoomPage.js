import React, { useState } from "react";
import "../../assets/css/SingleRoomPage.css"; // Để áp dụng CSS

const hotels = [
  {
    name: "New Star Inn Boutique",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image:
      "https://th.bing.com/th/id/OIP.0dOBx9hwZHgbfebi2gwEvAHaFj?w=231&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    type: "Standard",
  },
  {
    name: "Skylark Boutique Hotel",
    location: "Hà Nội, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 3,
    reviews: 45,
    image:
      "https://images.trvl-media.com/lodging/103000000/102530000/102529700/102529624/04261f5f.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    type: "Standard",
  },
  {
    name: "Flamingo Hotel",
    location: "Đà Nẵng, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4,
    reviews: 200,
    image:
      "https://th.bing.com/th/id/OIP.SDghLniNNvxx4aSThDmoHAHaFd?w=244&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    type: "Standard",
  },
  {
    name: "Sài Gòn Hotel",
    location: "Sài Gòn, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 5,
    reviews: 350,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/612638276.webp?k=a920791473b0ec06e413d8b9a4d598ead352a64831203e96c0e06991381789d0&o=",
    type: "Standard",
  },
  {
    name: "Sofitel Legend Hotel",
    location: "Đà Nẵng, Việt Nam",
    price: "2,000,000 VND/đêm",
    rating: 4,
    reviews: 200,
    image:
      "https://th.bing.com/th/id/OIP.ijpXH2Dg4iywBtLNF3lq_QHaEw?w=261&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    type: "Luxury",
  },
  {
    name: "JW Marriott Hotel",
    location: "Đà Nẵng, Việt Nam",
    price: "2,000,000 VND/đêm",
    rating: 4,
    reviews: 200,
    image:
      "https://th.bing.com/th/id/OIP.XqzNaW9fRDH2qOX2Xn_xOgHaE8?w=228&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    type: "Luxury",
  },
  {
    name: "InterContinental Hotel",
    location: "Đà Nẵng, Việt Nam",
    price: "2,000,000 VND/đêm",
    rating: 4,
    reviews: 200,
    image:
      "https://th.bing.com/th/id/OIF.EuqiUCIDvD3M4vJbB6nZBA?w=322&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    type: "Luxury",
  },
  {
    name: "Hilton Opera Hotel",
    location: "Đà Nẵng, Việt Nam",
    price: "2,000,000 VND/đêm",
    rating: 4,
    reviews: 200,
    image:
      "https://th.bing.com/th/id/OIP.4IP4oAId9P-iIPOfbhlKKAHaE7?w=297&h=197&c=7&r=0&o=5&dpr=2&pid=1.7",
    type: "Luxury",
  },
];

const SingleRoomPage = () => {
    const [selectedType, setSelectedType] = useState("Luxury");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [isLoggedIn] = useState(true);
    const [customerInfo, setCustomerInfo] = useState({
      name: "",
      phone: "",
      email: "",
    });
    const [paymentMethod, setPaymentMethod] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
  
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
        if (
          !customerInfo.name ||
          !customerInfo.phone ||
          !customerInfo.email ||
          !paymentMethod
        ) {
          setErrorMessage(
            "Vui lòng điền đầy đủ thông tin và chọn phương thức thanh toán."
          );
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
        setIsBookingConfirmed(true);
        setIsModalVisible(false);
      
        // Lưu thông tin phòng vào localStorage
        const bookedRooms = JSON.parse(localStorage.getItem("bookedRooms")) || [];
        bookedRooms.push(...selectedRooms);
        localStorage.setItem("bookedRooms", JSON.stringify(bookedRooms));
      
        // Đặt timeout để ẩn thông báo sau 3 giây
        setTimeout(() => {
          setIsHidden(true);
        }, 3000);
      
        // Đặt lại trạng thái isBookingConfirmed sau 3 giây để ẩn thông báo
        setTimeout(() => {
          setIsBookingConfirmed(false);
          setIsHidden(false); // Reset trạng thái khi thông báo đã ẩn
        }, 3500);
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
        const roomPrice = parseInt(room.price.replace(/[^\d]/g, ""), 10);
        return total + roomPrice * room.quantity;
      }, 0);
    };
  
    const filteredRooms = hotels.filter((room) => room.type === selectedType);
  
    return (
      <div className="single-room-page">
        <h1 className="header-title">Single Room Booking</h1>
  
        {/* Lựa chọn loại phòng */}
        <div className="room-type-buttons">
          <button
            onClick={() => handleTypeChange("Luxury")}
            className={selectedType === "Luxury" ? "active" : ""}
          >
            Phòng Luxury
          </button>
          <button
            onClick={() => handleTypeChange("Standard")}
            className={selectedType === "Standard" ? "active" : ""}
          >
            Phòng Standard
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
                <p>
                  {room.rating} ⭐ ({room.reviews} đánh giá)
                </p>
                <button
                  className="book-button"
                  onClick={() => handleBookingClick(room)}
                >
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
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-header">
                <h2 className="modal-title">Xác nhận đặt phòng</h2>
                <button
                  className="close-btn"
                  onClick={() => setIsModalVisible(false)}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="selected-rooms">
                  {selectedRooms.map((room, index) => (
                    <div className="room-info" key={index}>
                      <img
                        src={room.image}
                        alt={room.name}
                        className="room-image"
                      />
                      <div className="room-details">
                        <h4>{room.name}</h4>
                        <p>Giá: {room.price}</p>
                        <div className="quantity-control">
                          <label>Số lượng:</label>
                          <input
                            type="number"
                            value={room.quantity}
                            onChange={(e) =>
                              handleRoomQuantityChange(index, parseInt(e.target.value, 10))
                            }
                            min="1"
                          />
                        </div>
                      </div>
                      <button
                        className="delete-room-btn"
                        onClick={() => handleRoomDelete(index)}
                      >
                        Xóa
                      </button>
                    </div>
                  ))}
                </div>
  
                <div className="customer-form">
                  <h3>Thông tin khách hàng</h3>
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
                  <h3>Phương thức thanh toán</h3>
                  <select
                    value={paymentMethod}
                    onChange={handlePaymentChange}
                    className="payment-select"
                  >
                    <option value="" disabled>
                      Chọn phương thức thanh toán
                    </option>
                    <option value="credit">Thẻ tín dụng</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank">Chuyển khoản ngân hàng</option>
                  </select>
                </div>
  
                {errorMessage && <p className="error-message">{errorMessage}</p>}
  
                <div className="total-amount">
                  <p>Tổng tiền: {calculateTotalAmount()} VND</p>
                </div>
  
                <button className="confirm-btn" onClick={handleBooking}>
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        )}
  
        {isBookingConfirmed && (
          <div className={`booking-confirmation ${isHidden ? "hidden" : ""}`}>
            <h2>Đặt phòng thành công!</h2>
            <p>Cảm ơn bạn đã đặt phòng tại khách sạn của chúng tôi.</p>
          </div>
        )}
      </div>
    );
  };
  
  export default SingleRoomPage;

  
