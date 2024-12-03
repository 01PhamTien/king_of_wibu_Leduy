// src/components/BookingModal.js
import React, { useState } from "react";

const BookingModal = ({
  isModalVisible,
  setIsModalVisible,
  selectedRooms,
  setSelectedRooms,
  customerInfo,
  setCustomerInfo,
  paymentMethod,
  setPaymentMethod,
  handleBooking,
  errorMessage,
  calculateTotalAmount
}) => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  return (
    isModalVisible && (
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
                onChange={(e) => setPaymentMethod(e.target.value)}
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
    )
  );
};

export default BookingModal;
