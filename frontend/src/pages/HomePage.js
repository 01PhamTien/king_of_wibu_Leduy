// src/HomePage.js
import React from 'react';  
import '../assets/css/Home.css'; // Import CSS cho trang chủ  
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Sử dụng icon sao  
import Banner from '../components/Banner';  // Import Banner component
import rooms from '../data/data';  // Import dữ liệu phòng khách sạn từ file data.js

const SearchResult = () => {
  const data = [
    {
      location: 'Kraków',
      date: 'T6, 22 tháng 11–CN, 24 tháng 11',
      numPeople: '2 người lớn',
      imgSrc: '/images/001.jpg'
    },
    {
      location: 'Prague',
      date: 'T6, 22 tháng 11–CN, 24 tháng 11',
      numPeople: '2 người lớn',
      imgSrc: '/images/001.jpg'
    }
  ];

  return (
    <div className="search-container">
      <h2>Tìm kiếm gần đây của bạn</h2>
      <div className="result-container">
        {data.map((item, index) => (
          <div key={index} className="result-card">
            <img
              src={item.imgSrc}
              alt={item.location}
              className="result-img"
            />
            <div className="result-details">
              <h3>{item.location}</h3>
              <p>{item.date}</p>
              <p>{item.numPeople}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
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

  return (
    <div className="homepage">
      <Banner />
      <div className="promotion">
        <SearchResult />
        <div className="hotel-list">
          <h3>Bạn có còn quan tâm đến những chỗ nghỉ này?</h3>
          <div className="hotel-grid">
            {rooms.slice(0, 4).map((room) => (
              <div className="hotel-item" key={room.id}>
                <img
                  src={room.image}
                  alt={`Room ${room.id}`}
                />
                <h3>{room.name}</h3>
                <p>{room.address}</p>
                <p className="price"><strong>Giá từ: {room.price}/đêm</strong></p>
                <div className="rating">
                  {renderStars(room.rating)}
                  <div className="rating-info">
                    <span>{room.rating}</span>
                    <span> ({room.reviews} đánh giá)</span>
                  </div>
                </div>
                <button>Đặt ngay</button>
              </div>
            ))}
          </div>
        </div>

      <div className="special-rooms">  
        <div className="hotel-grid">  
          {rooms.slice(4, 8).map((room) => (  
            <div className="hotel-item" key={room.id}>  
              <img  
                src={room.image}  
                alt={`Room ${room.id}`}  
              />  
              <h3>{room.name}</h3>  
              <p>{room.address}</p>  
              <p className="price"><strong>Giá từ: {room.price}/đêm</strong></p>  
              <div className="rating">  
                {renderStars(room.rating)}  
                <div className="rating-info">
                  <span>{room.rating}</span> {/* Đánh giá */}
                  <span> ({room.reviews} đánh giá)</span> {/* Số người đánh giá */}
                </div>
              </div>  
              <button>Đặt Ngay</button>  
            </div>  
          ))}  
        </div>  
      </div>

      <h3>Mã giảm giá Khách sạn</h3>  
        <div className="promotion-item">  
          <span>Mã: HOTELGANNHA</span>  
          <p>Giảm đến 300K nội địa</p>  
          <p>Giảm 80K, đặt nội địa từ 3 triệu...</p>  
          <button>Sao chép mã</button>  
        </div>  
        <div className="promotion-item">  
          <span>Mã: STAYQUOCTE</span> 
          <p>Giảm đến 300K khi đặt Thái Lan, Singapore, Malaysia</p>  
          <p>Giảm 3% tối đa 300K...</p>  
          <button>Sao chép mã</button>  
        </div>  
       


      <div className="hotel-list">  
      <h3>Phòng khách sạn phổ biến</h3>  
        <div className="hotel-grid">  
          {rooms.slice(0, 4).map((room) => (  
            <div className="hotel-item" key={room.id}>  
              <img  
                src={room.image}  
                alt={`Room ${room.id}`}  
              />  
              <h3>{room.name}</h3>  
              <p>{room.address}</p>  
              <p className="price"><strong>Giá từ: {room.price}/đêm</strong></p>  
              <div className="rating">  
                {renderStars(room.rating)}  
                <div className="rating-info">
                  <span>{room.rating}</span> {/* Đánh giá */}
                  <span> ({room.reviews} đánh giá)</span> {/* Số người đánh giá */}
                </div>
              </div>  
              <button>Đặt Ngay</button>  
            </div>  
          ))}  
        </div> 
      </div>  

      <div className="special-rooms">  
        <h3>Phòng đặc biệt</h3>  
        <div className="hotel-grid">  
          {rooms.slice(4, 8).map((room) => (  
            <div className="hotel-item" key={room.id}><img  
            src={room.image}  
                alt={`Room ${room.id}`}  
              />  
              <h3>{room.name}</h3>  
              <p>{room.address}</p>  
              <p className="price"><strong>Giá từ: {room.price}/đêm</strong></p>  
              <div className="rating">  
                {renderStars(room.rating)}  
                <div className="rating-info">
                  <span>{room.rating}</span> {/* Đánh giá */}
                  <span> ({room.reviews} đánh giá)</span> {/* Số người đánh giá */}
                </div>
              </div>  
              <button>Đặt Ngay</button>  
            </div>  
          ))}  
        </div>  
      </div>    
      

      <div className="partners">
        <div className="hotel-partners">
          <div className="partners-text">
            <h3>Đối tác khách sạn</h3>
            <p>Đối tác khách sạn trong nước và quốc tế</p>
            <p>Chúng tôi hợp tác với các chuỗi khách sạn nổi tiếng trên toàn thế giới để mang lại cho khách hàng những trải nghiệm tuyệt vời nhất. Mỗi đối tác của chúng tôi đều cam kết chất lượng dịch vụ vượt trội và tiêu chuẩn quốc tế.</p>
          </div>
          <div className="partners-logos">
            <img src="/images/017.jpg" alt="Partner 1" />
            <img src="/images/18.jpg" alt="Partner 2" />
            <img src="/images/20.jpg" alt="Partner 3" />
            <img src="/images/019.jpg" alt="Partner 4" />
            <img src="/images/partner5.jpg" alt="Partner 5" />
            <img src="/images/partner6.jpg" alt="Partner 6" />
          </div>
        </div>

        <div className="payment-partners">
          <div className="payment-text">
            <h3>Đối tác thanh toán</h3>
            <p>Những đối tác thanh toán đáng tin cậy của chúng tôi</p>
            <p>Chúng tôi hợp tác với các đối tác thanh toán hàng đầu để mang lại cho bạn trải nghiệm thanh toán an toàn, nhanh chóng và thuận tiện nhất. Các đối tác thanh toán của chúng tôi đều được chứng nhận bảo mật và tuân thủ các tiêu chuẩn quốc tế về bảo mật thông tin cá nhân.</p>
          </div>
          <div className="payment-logos">
            <img src="/images/21.jpg" alt="Payment Partner 1" />
            <img src="/images/22.jpg" alt="Payment Partner 2" />
            <img src="/images/026.jpg" alt="Payment Partner 3" />
            <img src="/images/24.jpg" alt="Payment Partner 1" />
            <img src="/images/025.jpg" alt="Payment Partner 2" />
            <img src="/images/23.jpg" alt="Payment Partner 3" />
          </div>
        </div>
      </div>


      <div className="hot-destinations">  
        <h3>Điểm đến hot nhất do Traveloka đề xuất</h3>  
        <div className="destination-grid">  
          {[  
            { name: 'Đà Nẵng', imgSrc: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=', hotels: '763 khách sạn' },
            { name: 'Nha Trang', imgSrc: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=', hotels: '560 khách sạn' },  
            { name: 'Phú Quốc', imgSrc: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=', hotels: '925 khách sạn' },
            { name: 'Vũng Tàu', imgSrc: 'https://via.placeholder.com/200x150?text=Vũng+Tàu', hotels: '380 khách sạn' },  
            { name: 'Hà Nội', imgSrc: 'https://via.placeholder.com/200x150?text=Hà+Nội', hotels: '1060 khách sạn' },  
            { name: 'Đà Lạt', imgSrc: 'https://via.placeholder.com/200x150?text=Đà+Lạt', hotels: '591 khách sạn' },  
            { name: 'Hội An', imgSrc: 'https://via.placeholder.com/200x150?text=Hội+An', hotels: '563 khách sạn' },  
            { name: 'Phan Thiết', imgSrc: 'https://via.placeholder.com/200x150?text=Phan+Thiết', hotels: '243 khách sạn' },  
            { name: 'Quy Nhơn', imgSrc: 'https://via.placeholder.com/200x150?text=Quy+Nhơn', hotels: '80 khách sạn' },  
            { name: 'Thái Lan', imgSrc: 'https://via.placeholder.com/200x150?text=Thái+Lan', hotels: '1584 khách sạn' },
            { name: 'Singapore', imgSrc: 'https://via.placeholder.com/200x150?text=Singapore', hotels: '690 khách sạn' },  
            { name: 'Malaysia', imgSrc: 'https://via.placeholder.com/200x150?text=Malaysia', hotels: '846 khách sạn' },  
          ].map((destination, index) => (  
            <div className="destination" key={index}>  
              <img src={destination.imgSrc} alt={destination.name} />  
              <h3>{destination.name}</h3>  
              <p>{destination.hotels}</p>  
            </div>  
          ))}  
        </div>  
      </div>


      </div>
    </div>
  );


  
};

export default HomePage;
