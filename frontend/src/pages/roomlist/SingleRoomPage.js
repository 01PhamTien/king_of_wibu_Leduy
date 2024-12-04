import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../assets/css/SingleRoomPage.css"; // Để áp dụng CSS
import hotels from "../../data/dataRoomSingle";
import BookingModal from "../../components/BookingModal"; // Import BookingModal

const SingleRoomPage = () => {
  const [selectedType, setSelectedType] = useState("Luxury");
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

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedInUser") ? true : false;

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedRooms([]);
  };

  const handleBookingClick = (room) => {
    if (!isLoggedIn) {
      navigate("/login");
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
    setIsBookingConfirmed(true);
    setIsModalVisible(false);

    let bookedRooms = JSON.parse(localStorage.getItem("bookedRooms"));

// Kiểm tra nếu bookedRooms không phải là mảng, thì khởi tạo lại là mảng trống
if (!Array.isArray(bookedRooms)) {
  bookedRooms = [];
}

// Thêm các phòng đã chọn vào mảng
bookedRooms.push(...selectedRooms);

// Lưu lại vào localStorage
localStorage.setItem("bookedRooms", JSON.stringify(bookedRooms));


    setTimeout(() => {
      setIsHidden(true);
    }, 3000);

    setTimeout(() => {
      setIsBookingConfirmed(false);
      setIsHidden(false);
    }, 3500);
  };

  const filteredRooms = hotels.filter((room) => room.type === selectedType);

  return (
    <div className="single-room-page">
      <h1 className="header-title">Đặt phòng đơn</h1>

      <div className="room-type-buttons">
        <button onClick={() => handleTypeChange("Luxury")} className={selectedType === "Luxury" ? "active" : ""}>Phòng Luxury</button>
        <button onClick={() => handleTypeChange("Standard")} className={selectedType === "Standard" ? "active" : ""}>Phòng Standard</button>
      </div>

      <div className="room-list">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.name} />
              <h2>{room.name}</h2>
              <p>{room.location}</p>
              <p className="price">Giá từ: {room.price}</p>
              <p>{room.rating} ⭐ ({room.reviews} đánh giá)</p>
              <button className="book-button" onClick={() => handleBookingClick(room)}>Đặt ngay</button>
            </div>
          ))
        ) : (
          <p>Không có phòng phù hợp.</p>
        )}
      </div>

      <BookingModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        selectedRooms={selectedRooms}
        setSelectedRooms={setSelectedRooms}
        customerInfo={customerInfo}
        setCustomerInfo={setCustomerInfo}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        handleBooking={handleBooking}
        errorMessage={errorMessage}
      />

      {isBookingConfirmed && !isHidden && (
        <div className="booking-confirmation">
          <h2>Đặt phòng thành công!</h2>
          <p>Cảm ơn bạn đã đặt phòng tại khách sạn của chúng tôi.</p>
        </div>
      )}
    </div>
  );
};

export default SingleRoomPage;
