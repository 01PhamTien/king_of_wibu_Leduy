import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/News.css';

const NewsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      title: 'Khám phá Đà Nẵng: Thành phố đáng sống',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6jnrEhscF17B742FQoZQvoXo3vOG0mwsQ3w&s',
      description: 'Đà Nẵng là thành phố đáng sống với bãi biển đẹp, con đường Bà Nà Hills huyền bí, và nền ẩm thực phong phú.',
      date: '01/12/2024',
      author: 'Nguyễn Văn Định',
    },
    {
      title: 'Chuyến đi Nha Trang: Biển xanh, cát trắng',
      image: 'https://tinviettravel.com.vn/uploads/cam-nang-du-lich/2024_09/vinwonders-nha-trang.jpg',
      description: 'Nha Trang là điểm đến tuyệt vời cho những ai yêu thích biển, với các resort sang trọng và các hoạt động thể thao nước hấp dẫn.',
      date: '28/11/2024',
      author: 'Nguyễn Văn Định',
    },
    {
      title: 'Hà Nội - Thủ đô nghìn năm văn hiến',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wsV2O-j_URDsvkP3hExx3HFpRjGVGP2Nrg&s',
      description: 'Hà Nội là thành phố có lịch sử lâu dài, với những di tích cổ kính và những món ăn đường phố đặc trưng.',
      date: '25/11/2024',
      author: 'Nguyễn Văn Định',
    },
    {
      title: 'Sài Gòn - Thành phố không ngủ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenZgggicvr6FGkmYj5_o1Z0ET-ZZ6wXmhUQ&s',
      description: 'Sài Gòn, hay TP. Hồ Chí Minh, là nơi không bao giờ thiếu sự sôi động, từ các trung tâm mua sắm cho đến các khu vui chơi giải trí hấp dẫn.',
      date: '20/11/2024',
      author: 'Nguyễn Văn Định',
    },
    {
      title: 'Phú Quốc - Đảo ngọc thiên đường',
      image: 'https://mia.vn/media/uploads/blog-du-lich/dao-ngoc-phu-quoc-thien-duong-nghi-duong-tai-phuong-nam-1681783792.jpg',
      description: 'Phú Quốc là một điểm đến du lịch nổi tiếng của Việt Nam với những bãi biển đẹp và các khu nghỉ dưỡng cao cấp.',
      date: '15/11/2024',
      author: 'Nguyễn Văn Định',
    },
  ];

  const promotions = [
    {
      title: 'Ưu đãi vé máy bay Tết 2025',
      image: 'https://vegiagoc.com/Upload/images/ve-may-bay-tet-2025-di-hue-gia-cuc-tot-1.jpg',
      description: 'Săn vé máy bay giá rẻ dịp Tết với ưu đãi lớn từ các hãng hàng không.',
      date: '02/12/2024',
      author: 'Nguyễn Văn Định',
      category: 'Ưu đãi',
    },
  ];

  const tips = [
    {
      title: '10 mẹo du lịch tiết kiệm chi phí',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZe7EFILTIAQfOnqZ97WznQv7BuCL0lNobg&s',
      description: 'Tận dụng các mẹo hữu ích để tiết kiệm chi phí cho chuyến du lịch của bạn.',
      date: '01/12/2024',
      author: 'Nguyễn Văn Định',
      category: 'Mẹo',
    },
    {
      title: 'Cách chọn khách sạn phù hợp với ngân sách',
      image: 'https://cdn-kfcff.nitrocdn.com/JOhfqzIngfwJwqHdKpFveKRwEIgjfSJW/assets/images/optimized/rev-a7e77c4/dodungkhachsancaocap.vn/wp-content/uploads/2023/10/tieu-chi-lua-chon-khach-san.jpg',
      description: 'Hướng dẫn chi tiết để chọn khách sạn tốt nhất với ngân sách của bạn.',
      date: '28/11/2024',
      author: 'Nguyễn Văn Định',
      category: 'Mẹo',
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleReadMore = (articleTitle) => {
    navigate(`/news/${articleTitle.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const filterItems = (items) => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const renderSection = (title, items) => (
    <section className="news-section">
      <h2>{title}</h2>
      <div className="articles">
        {filterItems(items).map((item, index) => (
          <div key={index} className="article-card">
            <img src={item.image} alt={item.title} className="article-image" />
            <h3>{item.title}</h3>
            <p className="article-description">{item.description}</p>
            <button onClick={() => handleReadMore(item.title)} className="read-more-btn">
              Đọc thêm
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="news-page">
      <section className="search-section-2">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Tìm kiếm bài viết..."
          className="search-input"
        />
      </section>

      {renderSection('Khám phá', articles)}
      {renderSection('Ưu đãi', promotions)}
      {renderSection('Mẹo', tips)}
    </div>
  );
};

export default NewsPage;
