import React from 'react';
import { useParams } from 'react-router-dom';
import "../assets/css/ArticleDetailPage.css";

// Dữ liệu bài viết giả lập
const articles = [
  {
    title: 'Khám phá Đà Nẵng: Thành phố đáng sống',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMhayL7Fx1iw6Mznh4piG7_Q9BV24tv2MyQ&s', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6jnrEhscF17B742FQoZQvoXo3vOG0mwsQ3w&s', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszGyeVEw8pCdqb8NrXV5UsUnsdOOfQysawg&s'
    ], 
    description: 'Đà Nẵng là thành phố đáng sống với bãi biển đẹp, con đường Bà Nà Hills huyền bí, và nền ẩm thực phong phú.',
    content: `
      <h2>Bãi biển Đà Nẵng: Thiên đường nghỉ dưỡng</h2>
      <p>Đà Nẵng nổi tiếng với những bãi biển đẹp như Mỹ Khê, Non Nước, và Nam Ô. Đây là điểm đến lý tưởng cho những ai yêu thích biển cả và các hoạt động ngoài trời. Bãi biển Mỹ Khê từng được tạp chí Forbes bình chọn là một trong những bãi biển đẹp nhất hành tinh.</p>
      <img src="https://cdn.justfly.vn/2048x1535/media/202301/03/1672740553-bai-bien-my-khe-dia-diem-du-lich-da-nang-attdad03-14.jpg" alt="Bãi biển Mỹ Khê" class="anh">
      <h2>Điểm du lịch nổi bật: Bà Nà Hills</h2>
      <p>Không thể không nhắc đến Bà Nà Hills khi nói về Đà Nẵng. Đây là khu du lịch nổi tiếng với cảnh quan thiên nhiên tuyệt đẹp, khí hậu mát mẻ quanh năm, và đặc biệt là Cầu Vàng – công trình độc đáo thu hút hàng triệu du khách mỗi năm.</p>
      <blockquote>“Đà Nẵng là điểm đến không thể bỏ qua khi đến Việt Nam” – Lonely Planet</blockquote>
      <img src="https://danang-shopping.com/wp-content/uploads/2019/07/banner-website-cau-rong.jpg" alt="Cầu Vàng" class="anh">
    `,
    date: '01/12/2024',
    author: 'Nguyễn Văn A',
  },
  {
    title: 'Chuyến đi Nha Trang: Biển xanh, cát trắng',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxNggciTFO-Ze_071HMzWG1ZnuSWzhAlpTg&s', 
      'https://sixsensestravel.com.vn/wp-content/uploads/2022/12/tour-du-lich-nha-trang-2-ngay-3-dem-ngai-gi-khong-di-1.jpg', 
      'https://dulitravel.com/wp-content/uploads/2020/11/vinpearl-nha-trang.jpg'
    ], 
    description: 'Nha Trang là điểm đến tuyệt vời cho những ai yêu thích biển, với các resort sang trọng và các hoạt động thể thao nước hấp dẫn.',
    content: `
      <h2>Khám phá biển xanh Nha Trang</h2>
      <p>Nha Trang nổi tiếng với những bãi biển dài, cát trắng mịn, và làn nước trong vắt. Đây là điểm đến lý tưởng cho những ai yêu thích các hoạt động thể thao dưới nước như lặn biển, chèo thuyền kayak, và lướt sóng.</p>
      <img src="https://i2.ex-cdn.com/crystalbay.com/files/content/2024/01/26/anh-nha-trang-dep-moi-nhat-1-1544.jpeg" alt="Bãi biển Nha Trang" class="anh">
      <h2>Resort sang trọng và tiện nghi</h2>
      <p>Thành phố này nổi bật với các khu nghỉ dưỡng cao cấp, mang đến những trải nghiệm đẳng cấp cho du khách. Các khu resort như Vinpearl, Six Senses đều cung cấp các tiện nghi tuyệt vời và dịch vụ chăm sóc khách hàng xuất sắc.</p>
    `,
    date: '28/11/2024',
    author: 'Trần Thị B',
  },
  {
    title: 'Hà Nội - Thủ đô nghìn năm văn hiến',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPuxpVTdiqXbTLggSyOcZKg4CRqcdu5fXgQ&s', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBCpZAmqOji-u-zBLv1Z5Xe7ItLs_G63w4w&s', 
      '/images/ha-noi-3.jpg'
    ], 
    description: 'Hà Nội là thành phố có lịch sử lâu dài, với những di tích cổ kính và những món ăn đường phố đặc trưng.',
    content: `
      <h2>Lịch sử lâu dài của Hà Nội</h2>
      <p>Hà Nội, thủ đô của Việt Nam, là nơi lưu giữ nhiều giá trị lịch sử và văn hóa. Thành phố này nổi bật với những di tích lịch sử lâu đời, từ Hoàng Thành Thăng Long cho đến Chùa Một Cột – biểu tượng của sự trường tồn.</p>
      <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/5/7/1189286/Anh-Hoang-Thanh-Than-11.jpg" alt="Hoàng Thành Thăng Long" class="anh">
      <h2>Chùa Một Cột và các di tích nổi tiếng</h2>
      <p>Chùa Một Cột, với kiến trúc độc đáo, là một trong những di tích nổi tiếng của Hà Nội. Được xây dựng từ thời Lý, chùa thể hiện sự kết hợp hài hòa giữa văn hóa Phật giáo và kiến trúc dân gian Việt Nam.</p>
    `,
    date: '25/11/2024',
    author: 'Lê Minh C',
  },
   
  {
    title: 'Phú Quốc - Đảo ngọc thiên đường',
    images: [
      'https://mia.vn/media/uploads/blog-du-lich/dao-ngoc-phu-quoc-thien-duong-nghi-duong-tai-phuong-nam-1681783792.jpg',
      'https://sungroupvn.com.vn/wp-content/uploads/2018/01/trai-nghiem-ve-dep-thien-duong-cua-hon-dao-ngoc-phu-quoc-2.jpg.jpg', 
      'https://scov.gov.vn/upload/2005660/20210923/0cd063450e0e3f47b1db64b28dd16a81154306_dn_PhuQuoc-_8_.jpg'
    ],
    description: 'Phú Quốc là một điểm đến lý tưởng với những bãi biển hoang sơ, các khu nghỉ dưỡng sang trọng, và hệ sinh thái phong phú.',
    content: `
      <h2>Khám phá vẻ đẹp hoang sơ của Phú Quốc</h2>
      <p>Phú Quốc, hòn đảo lớn nhất Việt Nam, nổi bật với những bãi biển tuyệt đẹp như Bãi Sao, Bãi Dài, và Bãi Khem. Hệ sinh thái đa dạng và khí hậu nhiệt đới gió mùa giúp Phú Quốc trở thành điểm đến lý tưởng cho những ai yêu thích thiên nhiên hoang dã.</p>
      <img src="https://thuthachviet.com/images/uploads/kham-pha-nhung-bai-bien-dep-nhat-o-phu-quoc.jpg" alt="Bãi biển Phú Quốc" class="anh">
      <h2>Các hoạt động hấp dẫn tại Phú Quốc</h2>
      <p>Du khách có thể tham gia các hoạt động như lặn biển, câu cá, và tham quan các khu du lịch sinh thái, vườn tiêu, và trang trại ngọc trai.</p>
    `,
    date: '18/11/2024',
    author: 'Trương Hoàng L',
  },
  {
    title: 'Sài Gòn - Thành phố không ngủ',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenZgggicvr6FGkmYj5_o1Z0ET-ZZ6wXmhUQ&s',
      'https://cdn-petrotimes.mastercms.vn/stores/news_dataimages/phamlinh/082022/08/12/9c72b93e7367d09519c449d932531231.jpg?rt=20220808130008', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMovWJYYEXnHEpQVGPQcJXBWMASxqZjP4ZRw&s'
    ],
    description: 'Sài Gòn là thành phố sôi động, không bao giờ ngủ, với các khu vui chơi giải trí, trung tâm mua sắm, và những món ăn đường phố nổi tiếng.',
    content: `
      <h2>Khám phá cuộc sống sôi động của Sài Gòn</h2>
      <p>Sài Gòn, hay TP. Hồ Chí Minh, nổi tiếng với nhịp sống sôi động và hiện đại. Đây là nơi hội tụ của các trung tâm mua sắm, quán cà phê, nhà hàng, và các địa điểm vui chơi giải trí. Sài Gòn luôn tấp nập và nhộn nhịp suốt ngày đêm.</p>
      <img src="https://static.vinwonders.com/production/dia-diem-chup-hinh-dep-o-sai-gon-1.jpg" alt="Sài Gòn về đêm" class="anh">
      <h2>Ẩm thực đường phố Sài Gòn</h2>
      <p>Sài Gòn cũng nổi tiếng với các món ăn đường phố hấp dẫn, như phở, hủ tiếu, bún thịt nướng, và đặc biệt là món bánh mì. Hãy thưởng thức ẩm thực phong phú và đa dạng tại các quán ăn vỉa hè, các khu chợ đêm.</p>
    `,
    date: '10/11/2024',
    author: 'Nguyễn Thị D',
  }, 
  
];


const ArticleDetailPage = () => {
  const { title } = useParams(); // Lấy tham số 'title' từ URL

  // Hàm để loại bỏ dấu và chuyển sang chữ thường
  const normalizeString = (str) => {
    return str
      .toLowerCase() // Chuyển thành chữ thường
      .normalize('NFD') // Loại bỏ dấu
      .replace(/[\u0300-\u036f]/g, '') // Xóa dấu
      .replace(/\s+/g, '-'); // Thay đổi khoảng trắng thành dấu gạch nối
  };

  // Tìm bài viết dựa trên tiêu đề
  const article = articles.find((article) =>
    normalizeString(article.title) === normalizeString(title)
  );

  if (!article) {
    return <div>Không tìm thấy bài viết này.</div>;
  }

  return (
    <div className="article-detail-page">
      <header className="article-header">
        <h1>{article.title}</h1>
        <p><strong>Ngày:</strong> {article.date}</p>
        <p><strong>Tác giả:</strong> {article.author}</p>
      </header>

      {/* Hiển thị 3 ảnh theo layout báo */}
      <div className="article-images">
        {article.images.map((image, index) => (
          <img key={index} src={image} alt={`${article.title} - ${index + 1}`} className="article-image" />
        ))}
      </div>

      {/* Mô tả bài viết */}
      <section className="article-description">
        <p>{article.description}</p>
      </section>

      {/* Hiển thị nội dung bài viết, sử dụng dangerouslySetInnerHTML */}
      <section className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArticleDetailPage;
