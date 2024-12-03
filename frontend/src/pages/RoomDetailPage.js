import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import rooms from '../data/data';  // Đảm bảo đã có dữ liệu phòng
import BookingModal from '../components/BookingModal';  // Import BookingModal
import '../assets/css/RoomDetail.css';
import { FaWifi, FaSwimmer, FaBed, FaShower, FaCar, FaTv, FaCogs, FaSmokingBan, FaLeaf, FaRegLightbulb } from 'react-icons/fa';  // Import Bootstrap icons

const RoomDetailPage = () => {
  const { id } = useParams();
  const room = rooms.find(room => room.id === parseInt(id));

  const [newReview, setNewReview] = useState("");
  const [reviews, setReviews] = useState(Array.isArray(room.reviews) ? room.reviews : []);  // Kiểm tra mảng reviews

  // Lấy thông tin người dùng từ localStorage
  const user = JSON.parse(localStorage.getItem('loggedInUser'));  // Lấy thông tin từ loggedInUser
  const userName = user && user.fullName ? user.fullName : "Khách hàng mới";  // Kiểm tra người dùng

  const [isModalVisible, setIsModalVisible] = useState(false);  // Trạng thái hiển thị modal
  const [selectedRooms, setSelectedRooms] = useState([{
    name: room.name,
    price: room.price,
    quantity: 1,
    image: room.image,
  }]);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false); // Trạng thái đặt phòng thành công
  const [isHidden, setIsHidden] = useState(false); // Trạng thái ẩn thông báo sau khi đặt phòng

  // Tính tổng tiền
  const calculateTotalAmount = () => {
    return selectedRooms.reduce(
      (total, room) => total + room.price * room.quantity,
      0
    );
  };

  // Xử lý đặt phòng
  const handleBooking = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.email) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin khách hàng.");
      return;
    }

    // Logic xử lý booking (gửi lên server hoặc lưu trữ)
    console.log("Đặt phòng thành công với thông tin khách hàng:", customerInfo);
    setIsBookingConfirmed(true);  // Đặt trạng thái đặt phòng thành công
    setIsModalVisible(false);  // Đóng modal sau khi đặt phòng
  };

  // Hàm thêm đánh giá
  const handleAddReview = () => {
    if (newReview.trim()) {
      const updatedReviews = Array.isArray(reviews) ? reviews : [];  // Kiểm tra nếu reviews là mảng hợp lệ
    
      const newReviewObj = {
        name: userName,  // Dùng tên người dùng hoặc "Khách hàng mới"
        date: new Date().toLocaleDateString(),
        comment: newReview,
        rating: 5,
      };

      // Cập nhật reviews
      setReviews([newReviewObj, ...updatedReviews]);  // Cập nhật lại mảng reviews
      setNewReview("");  // Xóa ô nhập sau khi gửi
    }
  };

  if (!room) {
    return <p>Không tìm thấy phòng.</p>;
  }

  return (
    <div className="room-detail-page">
      <div className="room-detail-header">
        <h1>{room.name}</h1>
        <p className="room-location">{room.address}</p>
      </div>

      <div className="room-detail-body">
        {/* Phần hình ảnh phòng */}
        <div className="room-image-gallery">
          <img className="main-room-image" src={room.image} alt={room.name} />
          <div className="image-thumbnails">
            {room.imageGallery && room.imageGallery.length > 0 && room.imageGallery.map((image, index) => (
              <img key={index} className="thumbnail-image" src={image} alt={`Thumbnail ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Phần thông tin chi tiết phòng */}
        <div className="room-infoaa">
          <h2>Thông tin phòng</h2>
          <p><strong>Giá: {room.price}đ / đêm</strong></p>
          <p>{room.description}</p>

          {/* Tiện ích phòng */}
          <div className="room-amenities">
            <h3>Tiện ích phòng</h3>
            <div className="amenity-icons">
              <div className="amenity-item">
                <FaWifi />
                <p>Wi-Fi miễn phí</p>
              </div>
              <div className="amenity-item">
                <FaSwimmer />
                <p>Bể bơi</p>
              </div>
              <div className="amenity-item">
                <FaBed />
                <p>Giường đôi</p>
              </div>
              <div className="amenity-item">
                <FaShower />
                <p>Phòng tắm riêng</p>
              </div>
              <div className="amenity-item">
                <FaCar />
                <p>Chỗ đậu xe miễn phí</p>
              </div>
              <div className="amenity-item">
                <FaTv />
                <p>TV màn hình phẳng</p>
              </div>
              <div className="amenity-item">
                <FaCogs />
                <p>Dịch vụ phòng 24/7</p>
              </div>
              <div className="amenity-item">
                <FaSmokingBan />
                <p>Không hút thuốc</p>
              </div>
              <div className="amenity-item">
                <FaLeaf />
                <p>Không gian xanh</p>
              </div>
            </div>
          </div>

          {/* Quy định phòng */}
          <div className="room-rules">
            <h3>Quy định phòng</h3>
            <div className="rule-icons">
              <div className="rule-item">
                <FaSmokingBan />
                <p>Không hút thuốc</p>
              </div>
              <div className="rule-item">
                <FaCar />
                <p>Chó mèo không được phép</p>
              </div>
              <div className="rule-item">
                <FaRegLightbulb />
                <p>Giới hạn số người: 2 người</p>
              </div>
            </div>
          </div>

          {/* Đặt phòng */}
          <div className="room-booking">
            <button className="book-now-button" onClick={() => setIsModalVisible(true)}>Đặt ngay</button>
          </div>
        </div>
      </div>

      {/* Hiển thị BookingModal khi isModalVisible = true */}
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
        calculateTotalAmount={calculateTotalAmount}
        isBookingConfirmed={isBookingConfirmed}  // Truyền prop isBookingConfirmed
        isHidden={isHidden}  // Truyền prop isHidden
      />

      {/* Phần thông báo đặt phòng thành công */}
      {isBookingConfirmed && !isHidden && (
        <div className="booking-confirmation">
          <h2>Đặt phòng thành công!</h2>
          <p>Cảm ơn bạn đã đặt phòng tại khách sạn của chúng tôi.</p>
        </div>
      )}

      {/* Phần đánh giá khách hàng */}
      <div className="room-review">
        <h3>Đánh giá khách hàng</h3>
        <div className="review-list">
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review-item">
                <strong>{review.name}</strong> - <span>{review.date}</span>
                <p>{review.comment}</p>
                <span>⭐ {review.rating}</span>
              </div>
            ))
          ) : (
            <p>Chưa có đánh giá nào</p>
          )}
        </div>

        {/* Phần nhập đánh giá */}
        <div className="add-review">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Nhập đánh giá của bạn..."
          ></textarea>
          <button onClick={handleAddReview}>Gửi đánh giá</button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
