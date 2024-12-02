import React, { useState } from "react";
import "../../assets/css/DoubleRoomPage.css"; // Apply specific CSS for rooms

const hotels = [
  // Standard rooms
  {
    name: "Standard Room 1",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://vanangroup.com.vn/wp-content/uploads/2024/05/Phong-ngu-hai-giuong-don-noi-that-khach-san-4-sao-3.jpg",
    type: "Standard",
    available: 10,  // Available rooms
  },
  {
    name: "Standard Room 2",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,100,000 VND/đêm",
    rating: 4.0,
    reviews: 50,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28jsAXQmxi3osP-1glaDn6Zta_U7dBgdb2g&s",
    type: "Standard",
    available: 10,  // Available rooms
  },
  {
    name: "Standard Room 3",
    location: "Đà Nẵng, Việt Nam",
    price: "1,200,000 VND/đêm",
    rating: 4.3,
    reviews: 80,
    image: "https://noithatmyhouse.net/wp-content/uploads/2020/07/phong-doi-5.jpg",
    type: "Standard",
    available: 10,  // Available rooms
  },
  {
    name: "Standard Room 4",
    location: "Hà Nội, Việt Nam",
    price: "1,150,000 VND/đêm",
    rating: 4.2,
    reviews: 60,
    image: "https://noithathacuong.vn/vnt_upload/advisory/05_2023/04/1.jpg",
    type: "Standard",
    available: 8,  // Available rooms
  },
  {
    name: "Standard Room 5",
    location: "Sài Gòn, Việt Nam",
    price: "1,250,000 VND/đêm",
    rating: 4.4,
    reviews: 120,
    image: "https://noithatmanhhe.vn/media/31979/thiet-ke-noi-that-phong-ngu-02-1.jpg",
    type: "Standard",
    available: 15,  // Available rooms
  },
  {
    name: "Standard Room 6",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,000,000 VND/đêm",
    rating: 4.5,
    reviews: 100,
    image: "https://vinapad.com/wp-content/uploads/2020/11/double-bed-la-gi.jpg",
    type: "Standard",
    available: 10,  // Available rooms
  },
  {
    name: "Standard Room 7",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "1,100,000 VND/đêm",
    rating: 4.0,
    reviews: 50,
    image: "https://dyf.vn/wp-content/uploads/2021/10/phong-double-la-gi.jpg",
    type: "Standard",
    available: 10,  // Available rooms
  },
  {
    name: "Standard Room 8",
    location: "Đà Nẵng, Việt Nam",
    price: "1,200,000 VND/đêm",
    rating: 4.3,
    reviews: 80,
    image: "https://thing.vn/wp-content/uploads/2020/10/phong-twin-4.jpg",
    type: "Standard",
    available: 10,  // Available rooms
  },
  // VIP rooms
  {
    name: "VIP Room 1",
    location: "Hà Nội, Việt Nam",
    price: "2,000,000 VND/đêm",
    rating: 5.0,
    reviews: 150,
    image: "https://bathatresort.vn/wp-content/uploads/2019/11/z4116978505071_8b7f6ac9640091cc3aa429e3b28ba0c2.jpg",
    type: "VIP",
    available: 5,  // Available rooms
  },
  {
    name: "VIP Room 2",
    location: "Đà Nẵng, Việt Nam",
    price: "2,500,000 VND/đêm",
    rating: 4.8,
    reviews: 120,
    image: "https://mailamhotel.com/images/product/goc/goc_1615395639.jpg",
    type: "VIP",
    available: 5,  // Available rooms
  },
  {
    name: "VIP Room 3",
    location: "Sài Gòn, Việt Nam",
    price: "2,200,000 VND/đêm",
    rating: 4.6,
    reviews: 90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4QKUYocyFklEeX50QZrf3pGLAvIbh80JsQ&s",
    type: "VIP",
    available: 4,  // Available rooms
  },
  {
    name: "VIP Room 4",
    location: "TP. Hồ Chí Minh, Việt Nam",
    price: "2,400,000 VND/đêm",
    rating: 4.7,
    reviews: 110,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WsBRlUBJd7FbrVXwCWvBOCzCRLTLrkwgdA&s",
    type: "VIP",
    available: 6,  // Available rooms
  },
  // Presidential rooms
  {
    name: "Presidential Suite 1",
    location: "Sài Gòn, Việt Nam",
    price: "5,000,000 VND/đêm",
    rating: 5.0,
    reviews: 200,
    image: "https://tripzone.vn/uploads/202104/13/02/140041-agoda---ph-ng-presidential-suite.png",
    type: "Presidential",
    available: 1,  // Available rooms
  },
  {
    name: "Presidential Suite 2",
    location: "Hà Nội, Việt Nam",
    price: "6,000,000 VND/đêm",
    rating: 5.0,
    reviews: 250,
    image: "https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/accommodation/suite/presidentialsuite/180712-30-2000-acc-hanoi-hotel.jpg.thumb.1920.1920.jpg",
    type: "Presidential",
    available: 1,  // Available rooms
  },
  
];


const DoubleRoomPage = () => {
  const [selectedType, setSelectedType] = useState("Standard");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [roomDetails, setRoomDetails] = useState(null);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedRooms([]);
  };

  const handleBookingClick = (room) => {
    setSelectedRooms([...selectedRooms, { ...room, quantity: 1 }]);
    setIsModalVisible(true);
  };

  // New function for viewing room details
  const handleViewDetailsClick = (room) => {
    setRoomDetails(room);
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
    setIsBookingConfirmed(true);
    setIsModalVisible(false);

    // Store the booked rooms in localStorage
    const bookedRooms = JSON.parse(localStorage.getItem("bookedRooms")) || [];
    bookedRooms.push(...selectedRooms);
    localStorage.setItem("bookedRooms", JSON.stringify(bookedRooms));

    setTimeout(() => {
      setIsHidden(true);
    }, 3000);

    setTimeout(() => {
      setIsBookingConfirmed(false);
      setIsHidden(false);
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
    <div className="double-room-page">
      <h1 className="header-title">Double Room</h1>

      {/* Room type selection */}
      <div className="room-type-buttons">
        <button onClick={() => handleTypeChange("Standard")} className={selectedType === "Standard" ? "active" : ""}>Phòng Thường</button>
        <button onClick={() => handleTypeChange("VIP")} className={selectedType === "VIP" ? "active" : ""}>Phòng VIP</button>
        <button onClick={() => handleTypeChange("Presidential")} className={selectedType === "Presidential" ? "active" : ""}>Phòng Tổng Thống</button>
      </div>

      {/* Room list with available rooms */}
      <div className="room-list">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.name} />
              <h2>{room.name}</h2>
              <p>{room.location}</p>
              <p className="price">Giá từ: {room.price}</p>
              <p>{room.rating} ⭐ ({room.reviews} đánh giá)</p>
              <p className="available-rooms">Available: {room.available} rooms</p>
              <button className="book-button" onClick={() => handleBookingClick(room)}>Đặt ngay</button>
              <button className="view-details-button" onClick={() => handleViewDetailsClick(room)}>Xem chi tiết</button>
            </div>
          ))
        ) : (
          <p>Không có phòng phù hợp.</p>
        )}
      </div>

      {/* Room details modal */}
      {roomDetails && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h2 className="modal-title">Chi tiết phòng: {roomDetails.name}</h2>
              <button className="close-btn" onClick={() => setRoomDetails(null)}>&times;</button>
            </div>
            <div className="modal-body">
              <img src={roomDetails.image} alt={roomDetails.name} className="room-image" />
              <p><strong>Loại phòng:</strong> {roomDetails.type}</p>
              <p><strong>Vị trí:</strong> {roomDetails.location}</p>
              <p><strong>Giá:</strong> {roomDetails.price}</p>
              <p><strong>Mô tả:</strong> {roomDetails.description}</p>
              <p><strong>Đánh giá:</strong> {roomDetails.rating} ⭐ ({roomDetails.reviews} đánh giá)</p>
              <p><strong>Số lượng phòng có sẵn:</strong> {roomDetails.available}</p>
            </div>
          </div>
        </div>
      )}

      {/* Booking modal */}
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h2 className="modal-title">Xác nhận đặt phòng</h2>
              <button className="close-btn" onClick={() => setIsModalVisible(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="selected-rooms">
                {selectedRooms.map((room, index) => (
                  <div className="room-info" key={index}>
                    <img src={room.image} alt={room.name} className="room-image" />
                    <div className="room-details">
                      <h4>{room.name}</h4>
                      <p>Giá: {room.price}</p>
                      <div className="quantity-control">
                        <label>Số lượng:</label>
                        <input
                          type="number"
                          value={room.quantity}
                          onChange={(e) => handleRoomQuantityChange(index, parseInt(e.target.value, 10))}
                          min="1"
                        />
                      </div>
                    </div>
                    <button className="delete-room-btn" onClick={() => handleRoomDelete(index)}>Xóa</button>
                  </div>
                ))}
              </div>

              <div className="customer-form">
                <h3>Thông tin khách hàng</h3>
                <input type="text" name="name" value={customerInfo.name} onChange={handleInputChange} placeholder="Họ và tên" />
                <input type="text" name="phone" value={customerInfo.phone} onChange={handleInputChange} placeholder="Số điện thoại" />
                <input type="email" name="email" value={customerInfo.email} onChange={handleInputChange} placeholder="Email" />
              </div>

              <div className="payment-method">
                <h3>Phương thức thanh toán</h3>
                <select value={paymentMethod} onChange={handlePaymentChange} className="payment-select">
                  <option value="">Chọn phương thức thanh toán</option>
                  <option value="creditCard">Thẻ tín dụng</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <div className="modal-footer">
                <p>Tổng cộng: {calculateTotalAmount().toLocaleString()} VND</p>
                <button onClick={handleBooking} className="confirm-btn">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isBookingConfirmed && !isHidden && <div className="booking-confirmation">Đặt phòng thành công!</div>}
    </div>
  );
};



export default DoubleRoomPage;
