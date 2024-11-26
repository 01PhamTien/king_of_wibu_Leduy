import React, { useState } from 'react';
import '../../assets/css/SingleRoomPage.css'; // Để áp dụng CSS  

const hotels = [  
  {  
      name: "New Star Inn Boutique",  
      location: "TP. Hồ Chí Minh, Việt Nam",  
      price: "1,000,000 VND/đêm",  
      rating: 4.5,  
      reviews: 100,  
      image: "https://th.bing.com/th/id/OIP.0dOBx9hwZHgbfebi2gwEvAHaFj?w=231&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
      type: "Standard"
  },  
  {  
      name: "Skylark Boutique Hotel",  
      location: "Hà Nội, Việt Nam",  
      price: "1,000,000 VND/đêm",  
      rating: 3,  
      reviews: 45,  
      image: "https://images.trvl-media.com/lodging/103000000/102530000/102529700/102529624/04261f5f.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
      type: "Standard"
  },  
  {  
      name: "Flamingo Hotel",  
      location: "Đà Nẵng, Việt Nam",  
      price: "1,000,000 VND/đêm",  
      rating: 4,  
      reviews: 200,  
      image: "https://th.bing.com/th/id/OIP.SDghLniNNvxx4aSThDmoHAHaFd?w=244&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" ,
      type: "Standard" 
  },  
  {  
      name: "Sài Gòn Hotel",  
      location: "Sài Gòn, Việt Nam",  
      price: "1,000,000 VND/đêm",  
      rating: 5,  
      reviews: 350,  
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/612638276.webp?k=a920791473b0ec06e413d8b9a4d598ead352a64831203e96c0e06991381789d0&o=" ,
      type: "Standard"
  },  
  {  
    name: "Sofitel Legend Hotel",  
    location: "Đà Nẵng, Việt Nam",  
    price: "2,000,000 VND/đêm",  
    rating: 4,  
    reviews: 200,  
    image: "https://th.bing.com/th/id/OIP.ijpXH2Dg4iywBtLNF3lq_QHaEw?w=261&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"  ,
    type: "Luxury"
  },  
  {  
    name: "JW Marriott Hotel",  
    location: "Đà Nẵng, Việt Nam",  
    price: "2,000,000 VND/đêm",  
    rating: 4,  
    reviews: 200,  
    image: "https://th.bing.com/th/id/OIP.XqzNaW9fRDH2qOX2Xn_xOgHaE8?w=228&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"  ,
    type: "Luxury"
  },  
  {  
    name: "InterContinental Hotel",  
    location: "Đà Nẵng, Việt Nam",  
    price: "2,000,000 VND/đêm",  
    rating: 4,  
    reviews: 200,  
    image: "https://th.bing.com/th/id/OIF.EuqiUCIDvD3M4vJbB6nZBA?w=322&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" ,
    type: "Luxury" 
  },  
  {  
    name: "Hilton Opera Hotel",  
    location: "Đà Nẵng, Việt Nam",  
    price: "2,000,000 VND/đêm",  
    rating: 4,  
    reviews: 200,  
    image: "https://th.bing.com/th/id/OIP.4IP4oAId9P-iIPOfbhlKKAHaE7?w=297&h=197&c=7&r=0&o=5&dpr=2&pid=1.7"  ,
    type: "Luxury"
  },  
];  

const SingleRoomPage = () => {  
  const [selectedType, setSelectedType] = useState('Standard'); // Mặc định là Standard  
  const [showModal, setShowModal] = useState(false); // Trạng thái hiển thị modal
  const [showConfirmation, setShowConfirmation] = useState(false); // Trạng thái hiển thị thông báo đặt phòng thành công
  const [selectedHotel, setSelectedHotel] = useState(null); // Lưu thông tin khách sạn đã chọn
  const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      paymentMethod: 'credit_card',
  }); // Dữ liệu từ form

  const handleTypeChange = (type) => {  
      setSelectedType(type); // Cập nhật loại phòng được chọn  
  };

  const handleBookNow = (hotel) => {
      setSelectedHotel(hotel); // Lưu thông tin khách sạn đã chọn
      setShowModal(true); // Hiển thị modal
  };

  const handleCloseModal = () => {
      setShowModal(false); // Đóng modal
      setSelectedHotel(null); // Reset thông tin khách sạn
  };

  const handleFormChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setShowModal(false); // Đóng modal sau khi đặt phòng
      setShowConfirmation(true); // Hiển thị thông báo xác nhận
      setFormData({
          name: '',
          phone: '',
          email: '',
          paymentMethod: 'credit_card',
      }); // Reset form
  };

  const handleCloseConfirmation = () => {
      setShowConfirmation(false); // Đóng thông báo xác nhận
  };

  const filteredHotels = hotels.filter(hotel => hotel.type === selectedType); // Lọc theo loại phòng  

  return (  
      <div className="hotel-booking">  
          <h1 className="header-title">Single Room Booking</h1>  

          <div className="room-type-buttons">  
              <button onClick={() => handleTypeChange('Standard')} className={selectedType === 'Standard' ? 'active' : ''}>  
                  Phòng Standard  
              </button>  
              <button onClick={() => handleTypeChange('Luxury')} className={selectedType === 'Luxury' ? 'active' : ''}>  
                  Phòng Luxury  
              </button>  
          </div>  

          <div className="hotel-list">  
              {filteredHotels.map((hotel, index) => (  
                  <div className="hotel-card" key={index}>  
                      <img src={hotel.image} alt={hotel.name} />  
                      <h2>{hotel.name}</h2>  
                      <p>{hotel.location}</p>  
                      <p>Giá từ: {hotel.price} VND/đêm</p>  
                      <p>{hotel.rating} ⭐ ({hotel.reviews} đánh giá)</p>  
                      <p>Loại phòng: {hotel.type}</p>  
                      <button className="book-button" onClick={() => handleBookNow(hotel)}>Đặt ngay</button>  
                  </div>  
              ))}  
          </div>  

          {/* Modal hiển thị thông tin đặt phòng */}
          {showModal && selectedHotel && (
              <div className="modal">
                  <div className="modal-content">
                      <h2>Thông tin đặt phòng</h2>
                      <p><strong>Khách sạn:</strong> {selectedHotel.name}</p>
                      <p><strong>Giá phòng:</strong> {selectedHotel.price}</p>
                      <p><strong>Loại phòng:</strong> {selectedHotel.type}</p>

                      <form onSubmit={handleSubmit}>
                          <div className="form-group">
                              <label htmlFor="name">Họ và tên</label>
                              <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleFormChange}
                                  required
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="phone">Số điện thoại</label>
                              <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleFormChange}
                                  required
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleFormChange}
                                  required
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="paymentMethod">Phương thức thanh toán</label>
                              <select
                                  name="paymentMethod"
                                  id="paymentMethod"
                                  value={formData.paymentMethod}
                                  onChange={handleFormChange}
                                  required
                              >
                                  <option value="credit_card">Thẻ tín dụng</option>
                                  <option value="bank_transfer">Chuyển khoản ngân hàng</option>
                                  <option value="cash_on_arrival">Thanh toán khi nhận phòng</option>
                              </select>
                          </div>
                          <button type="submit" className="submit-button">Xác nhận đặt phòng</button>
                      </form>

                      <button className="close-button" onClick={handleCloseModal}>Đóng</button>
                  </div>
              </div>
          )}

          {/* Modal hiển thị thông báo đặt phòng thành công */}
          {showConfirmation && (
              <div className="confirmation-modal">
                  <div className="modal-content">
                      <h2>Đặt phòng thành công!</h2>
                      <p>Chúng tôi sẽ liên hệ với bạn qua email: {formData.email}</p>
                      <button onClick={handleCloseConfirmation} className="close-button">Đóng</button>
                  </div>
              </div>
          )}
      </div>  
  );  
};  

export default SingleRoomPage;