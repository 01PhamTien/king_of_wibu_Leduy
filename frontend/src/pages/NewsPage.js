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
        author: 'Nguyễn Văn A',
      },
      {
        title: 'Chuyến đi Nha Trang: Biển xanh, cát trắng',
        image: 'https://tinviettravel.com.vn/uploads/cam-nang-du-lich/2024_09/vinwonders-nha-trang.jpg',
        description: 'Nha Trang là điểm đến tuyệt vời cho những ai yêu thích biển, với các resort sang trọng và các hoạt động thể thao nước hấp dẫn.',
        date: '28/11/2024',
        author: 'Trần Thị B',
      },
      {
        title: 'Hà Nội - Thủ đô nghìn năm văn hiến',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wsV2O-j_URDsvkP3hExx3HFpRjGVGP2Nrg&s',
        description: 'Hà Nội là thành phố có lịch sử lâu dài, với những di tích cổ kính và những món ăn đường phố đặc trưng.',
        date: '25/11/2024',
        author: 'Lê Minh C',
      },
      
      {
        title: 'Sài Gòn - Thành phố không ngủ',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenZgggicvr6FGkmYj5_o1Z0ET-ZZ6wXmhUQ&s',
        description: 'Sài Gòn, hay TP. Hồ Chí Minh, là nơi không bao giờ thiếu sự sôi động, từ các trung tâm mua sắm cho đến các khu vui chơi giải trí hấp dẫn.',
        date: '20/11/2024',
        author: 'Phạm Minh D',
      },
      {
        title: 'Phú Quốc - Đảo ngọc thiên đường',
        image: 'https://mia.vn/media/uploads/blog-du-lich/dao-ngoc-phu-quoc-thien-duong-nghi-duong-tai-phuong-nam-1681783792.jpg',
        description: 'Phú Quốc là một điểm đến du lịch nổi tiếng của Việt Nam với những bãi biển đẹp và các khu nghỉ dưỡng cao cấp.',
        date: '15/11/2024',
        author: 'Trần Hoàng H',
      },
    ];
    

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleReadMore = (articleTitle) => {
      navigate(`/news/${articleTitle.toLowerCase().replace(/\s+/g, '-')}`);
    };

    return (
      <div className="news-page">
        <section className="search-section">
          <input 
            type="text" 
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Tìm kiếm bài viết..."
            className="search-input"
          />
        </section>

        <section className="featured-articles">
          <h2>Bài viết nổi bật</h2>
          <div className="articles">
            {filteredArticles.slice(0, 1).map((article, index) => (
              <div key={index} className="article-card">
                <img src={article.image} alt={article.title} className="article-image" />
                <h3>{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <button onClick={() => handleReadMore(article.title)} className="read-more-btn">Đọc thêm</button>
              </div>
            ))}
          </div>
        </section>

        <section className="latest-articles">
          <h2>Bài viết mới</h2>
          <div className="articles">
            {filteredArticles.map((article, index) => (
              <div key={index} className="article-card">
                <img src={article.image} alt={article.title} className="article-image" />
                <h3>{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <button onClick={() => handleReadMore(article.title)} className="read-more-btn">Đọc thêm</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

  export default NewsPage;
