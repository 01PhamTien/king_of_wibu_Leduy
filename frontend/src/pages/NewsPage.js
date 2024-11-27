import React from 'react';
import '../assets/css/News.css';  // CSS cho trang tin tức

const NewPage = () => {
  const categories = [
    { name: 'Căn hộ', count: '156.786 chỗ nghỉ', image: '/images/001.jpg' },
    { name: 'Nhà cho thuê', count: '517.703 chỗ nghỉ', image: '/images/001.jpg' },
    { name: 'Biệt thự riêng', count: '181.167 chỗ nghỉ', image: '/images/001.jpg' },
    { name: 'Nhà trệt', count: '8.801 chỗ nghỉ', image: '/images/001.jpg' },
  ];

  const destinations = [
    { name: 'Hồ Chí Minh', count: '15.546 khách sạn' },
    { name: 'Hà Nội', count: '10.744 khách sạn' },
    { name: 'Vũng Tàu', count: '6.329 khách sạn' },
    { name: 'Đà Lạt', count: '5.165 khách sạn' },
    { name: 'Nha Trang', count: '4.098 khách sạn' },
    { name: 'Hạ Long', count: '2.981 khách sạn' },
    { name: 'Đảo Phú Quốc', count: '2.236 khách sạn' },
    { name: 'Huế', count: '1.501 khách sạn' },
    { name: 'Cần Thơ', count: '1.203 khách sạn' },
    { name: 'Quảng Bình', count: '980 khách sạn' },
    { name: 'Huế', count: '1.203 khách sạn' },
    { name: 'Hà Tĩnh', count: '980 khách sạn' },
  ];

  // Hàm chia danh sách thành 4 cột
  const chunkDestinations = (arr, chunkSize) => {
    return arr.reduce((result, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  };

  const destinationChunks = chunkDestinations(destinations, Math.ceil(destinations.length / 4));

  return (
    <div className="new-page">
      <h2>Khám phá thêm nhà cho thuê du lịch</h2>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.count}</p>
          </div>
        ))}
      </div>

      
      <h2>Các điểm đến nổi tiếng ở Việt Nam</h2>
      <div className="destinations">
        {destinationChunks.map((chunk, index) => (
          <ul key={index} className="destination-column">
            {chunk.map((destination, i) => (
              <li key={i}>
                {destination.name} - {destination.count}
              </li>
            ))}
          </ul>
        ))}
      </div>
    

      <div className="da-nang-experience">
        <h2>Kinh nghiệm du lịch Việt Nam </h2>

        <h3>Những trải nghiệm thú vị khi đến Đà Nẵng</h3>
        <p>
          Nếu bạn muốn tìm kiếm một trải nghiệm thú vị khi đến Đà Nẵng, hãy thử một số hoạt động như lướt sóng, lặn biển hoặc đi bộ trên bãi biển.
          Bạn cũng có thể tham gia vào các hoạt động như đua thuyền buồm hoặc chèo thuyền trên sông Hàn.
        </p>
        <p>
          Nếu bạn muốn tham gia vào các hoạt động văn hóa và nghệ thuật, hãy đến với lễ hội ánh sáng Đà Nẵng, một sự kiện diễn ra vào tháng 3 hằng năm.
          Lễ hội này có nhiều hoạt động thú vị, như các buổi biểu diễn âm nhạc, triển lãm ánh sáng và pháo hoa.
        </p>
        <p>
          Nếu bạn muốn thưởng thức ẩm thực, hãy thử một số món đặc sản của Đà Nẵng như bánh tráng cuốn thịt heo, mì Quảng, bún mắm và bánh bèo.
          Bạn cũng có thể thưởng thức các món ăn địa phương tại các quán ăn, nhà hàng và chợ địa phương.
        </p>

        <h3>Tại sao nên đặt khách sạn ở Đà Nẵng trên Agoda.com</h3>
        <p>
          Agoda.com là một trong những trang web đặt phòng khách sạn hàng đầu thế giới, với nhiều lựa chọn khách sạn tại Đà Nẵng.
          Tại Agoda.com, bạn có thể tìm kiếm và đặt phòng khách sạn một cách nhanh chóng và dễ dàng. Agoda.com cũng cung cấp cho bạn
          các ưu đãi và giá cả hấp dẫn cho các khách sạn tại Đà Nẵng.
        </p>
        <p>
          Bạn có thể tìm kiếm các khách sạn tốt nhất tại Đà Nẵng trên Agoda.com, từ các khách sạn sang trọng đến các khách sạn giá rẻ.
          Bạn cũng có thể tìm kiếm các khách sạn gần bãi biển, gần trung tâm thành phố hoặc gần các điểm tham quan.
        </p>

        <h3>Thời điểm tốt nhất để đến Đà Nẵng là khi nào?</h3>
        <p>
          Đà Nẵng có khí hậu nhiệt đới, với mùa mưa và mùa khô rõ ràng. Thời điểm tốt nhất để đến Đà Nẵng là từ tháng 2 đến tháng 5,
          khi thời tiết khô ráo và mát mẻ. Thời điểm này cũng là thời điểm diễn ra nhiều sự kiện và lễ hội tại Đà Nẵng.
        </p>

        <h3>Một số lưu ý hữu ích cho du khách muốn đến Đà Nẵng</h3>
        <p>
          Nếu bạn muốn tham gia vào các hoạt động ngoài trời tại Đà Nẵng, hãy mang theo quần áo phù hợp và giày dép thoải mái.
          Nếu bạn muốn tìm hiểu về lịch sử và văn hóa của Đà Nẵng, hãy mang theo sách hướng dẫn hoặc tham gia các tour du lịch địa phương.
        </p>
        <p>
          Nếu bạn muốn thưởng thức ẩm thực địa phương, hãy tìm kiếm các quán ăn địa phương và hỏi xem có những món ăn đặc trưng nào bạn nên thử.
          Nếu bạn muốn mua sắm, hãy đến với khu chợ Hàn hoặc các cửa hàng địa phương để tìm kiếm các sản phẩm địa phương và quà lưu niệm.
        </p>

        <h3>Nên ở đâu ở Đà Nẵng?</h3>
        <p>
          Đà Nẵng có nhiều lựa chọn khách sạn, từ các khách sạn sang trọng đến các khách sạn giá rẻ. Nếu bạn muốn ở gần bãi biển,
          bạn có thể tìm kiếm các khách sạn ở khu vực Mỹ Khê hoặc khu vực Non Nước. Nếu bạn muốn ở gần trung tâm thành phố,
          bạn có thể tìm các khách sạn ở khu vực Hải Châu hoặc khu vực Thanh Khê.
        </p>
      </div>
    </div>
  );
};

export default NewPage;

