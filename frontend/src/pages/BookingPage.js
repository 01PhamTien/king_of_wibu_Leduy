import React, { useEffect, useState } from "react";
import "../assets/css/BookingPage.css"; // Để áp dụng CSS


const BookingPage = () => {
  const [bookedRooms, setBookedRooms] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // For success notification

  useEffect(() => {
    // Lấy thông tin phòng đã đặt từ localStorage
    const storedRooms = JSON.parse(localStorage.getItem("bookedRooms"));
    if (storedRooms) {
      setBookedRooms(storedRooms);
    }
  }, []);

  const handleDeleteRoom = (index) => {
    // Show confirmation prompt
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn hủy phòng này?");

    if (isConfirmed) {
      // Create a new array with the selected room removed
      const updatedRooms = bookedRooms.filter((_, i) => i !== index);

      // Update the state
      setBookedRooms(updatedRooms);

      // Update the localStorage with the new rooms list
      localStorage.setItem("bookedRooms", JSON.stringify(updatedRooms));

      // Show success message
      setSuccessMessage("Hủy phòng thành công!");
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <div className="booking-page">
      <h1 className="header-title">Trang Đặt Phòng</h1>

      {successMessage && <div className="success-message">{successMessage}</div>}

      {bookedRooms.length > 0 ? (
        <div className="booked-rooms-list">
          {bookedRooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.name} />
              <h2>{room.name}</h2>
              <p>{room.location}</p>
              <p className="price">Giá từ: {room.price}</p>
              <p>Số lượng: {room.quantity}</p>
              <button className="delete-btn" onClick={() => handleDeleteRoom(index)}>
                Hủy Đặt phòng
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Chưa có phòng nào được đặt.</p>
      )}
    </div>
  );
};

export default BookingPage;
