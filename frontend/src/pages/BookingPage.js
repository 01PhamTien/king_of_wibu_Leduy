import React, { useEffect, useState } from "react";
import "../assets/css/BookingPage.css"; // Để áp dụng CSS

const BookingPage = () => {
  const [bookedRooms, setBookedRooms] = useState([]);

  useEffect(() => {
    // Lấy thông tin phòng đã đặt từ localStorage
    const storedRooms = JSON.parse(localStorage.getItem("bookedRooms"));
    if (storedRooms) {
      setBookedRooms(storedRooms);
    }
  }, []);

  return (
    <div className="booking-page">
      <h1 className="header-title">Trang Đặt Phòng</h1>

      {bookedRooms.length > 0 ? (
        <div className="booked-rooms-list">
          {bookedRooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.name} />
              <h2>{room.name}</h2>
              <p>{room.location}</p>
              <p className="price">Giá từ: {room.price}</p>
              <p>Số lượng: {room.quantity}</p>
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
