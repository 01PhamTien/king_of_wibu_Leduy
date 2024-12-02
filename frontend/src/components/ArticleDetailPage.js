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
      'https://cdnmedia.baotintuc.vn/Upload/CCcQv1fjdlI5Hob1jh0mA/files/2020/10/04/IMG_0505.JPG'
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
  {
    "title": "Ưu đãi vé máy bay Tết 2025",
    "images": [
      "https://vegiagoc.com/Upload/images/ve-may-bay-tet-2025-di-hue-gia-cuc-tot-1.jpg"
    ],
    "description": "Săn vé máy bay giá rẻ dịp Tết với ưu đãi lớn từ các hãng hàng không.",
    "content": `
      <h2>Chương trình ưu đãi</h2>
      <p>Giảm giá đến 50% trên các chặng bay nội địa. Bạn cũng có thể nhận voucher hoàn tiền lên đến 200,000 VNĐ khi đặt vé qua các ứng dụng đối tác.</p>
      <img src="https://vietnam-tickets.com/images/ve-may-bay-tet-2025-4.gif" alt="Chương trình ưu đãi vé máy bay Tết" class="anh">
      <h2>Cách săn vé giá rẻ</h2>
      <p>Đặt vé sớm ít nhất 2 tháng trước Tết để tránh tình trạng hết vé, và theo dõi các chương trình flash sale để nhận mức giá tốt nhất.</p>
      <blockquote>“Hãy đặt vé ngay để tận dụng mức giá thấp nhất cho mùa Tết này!”</blockquote>
    `,
    "date": "02/12/2024",
    "author": "Nguyễn Thảo Linh"
  },  
  {
    "title": "10 mẹo du lịch tiết kiệm chi phí",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZe7EFILTIAQfOnqZ97WznQv7BuCL0lNobg&s"
    ],
    "description": "Tận dụng các mẹo hữu ích để tiết kiệm chi phí cho chuyến du lịch của bạn.",
    "content": `
      <h2>Mẹo 1: Đặt vé sớm</h2>
      <p>Đặt vé máy bay và khách sạn trước ít nhất 2-3 tháng để nhận giá ưu đãi.</p>
      <h2>Mẹo 2: Chọn điểm đến ít nổi tiếng</h2>
      <p>Những địa điểm ít nổi tiếng không chỉ tiết kiệm chi phí mà còn mang lại những trải nghiệm mới lạ.</p>
      <h2>Mẹo 3: Sử dụng phương tiện công cộng</h2>
      <p>Thay vì taxi hoặc dịch vụ xe riêng, hãy chọn xe buýt hoặc tàu điện để tiết kiệm chi phí đi lại.</p>
      <h2>Kết luận</h2>
      <p>Với những mẹo nhỏ này, bạn có thể tiết kiệm rất nhiều chi phí cho chuyến du lịch của mình mà vẫn có những trải nghiệm tuyệt vời.</p>
    `,
    "date": "01/12/2024",
    "author": "Nguyễn Huyền Trang"
  },  

  {
    "title": "Cách chọn khách sạn phù hợp với ngân sách",
    "images": [
      "https://cdn-kfcff.nitrocdn.com/JOhfqzIngfwJwqHdKpFveKRwEIgjfSJW/assets/images/optimized/rev-a7e77c4/dodungkhachsancaocap.vn/wp-content/uploads/2023/10/tieu-chi-lua-chon-khach-san.jpg"
    ],
    "description": "Hướng dẫn chi tiết để chọn khách sạn tốt nhất với ngân sách của bạn.",
    "content": `
      <h2>Mẹo 1: Xác định ngân sách trước khi đặt phòng</h2>
      <p>Đặt ra ngân sách cụ thể để tránh chi tiêu vượt quá khả năng của mình khi chọn khách sạn.</p>
      <h2>Mẹo 2: Xem xét vị trí của khách sạn</h2>
      <p>Chọn khách sạn gần các điểm tham quan hoặc khu vực thuận tiện đi lại để tiết kiệm chi phí vận chuyển.</p>
      <h2>Mẹo 3: So sánh giá trên các nền tảng khác nhau</h2>
      <p>Sử dụng các trang web so sánh giá để tìm mức giá tốt nhất cho khách sạn mong muốn.</p>
      <h2>Kết luận</h2>
      <p>Chọn đúng khách sạn phù hợp với ngân sách là một trong những yếu tố quan trọng giúp chuyến du lịch của bạn trở nên trọn vẹn và tiết kiệm.</p>
    `,
    "date": "28/11/2024",
    "author": "Trần Văn Khoa"
  },  
  
];


const ArticleDetailPage = () => {
  const { title } = useParams(); // Get 'title' from URL

  // Function to normalize the string (remove accents and spaces)
  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .normalize('NFD') 
      .replace(/[\u0300-\u036f]/g, '') 
      .replace(/\s+/g, '-'); 
  };

  // Find the article based on the title parameter
  const article = articles.find((article) =>
    normalizeString(article.title) === normalizeString(title)
  );

  if (!article) {
    return <div>Không tìm thấy bài viết này.</div>; // Article not found
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <div className="article-meta">
        <span>{article.author}</span> | <span>{article.date}</span>
      </div>
      <div className="article-description">
        <p>{article.description}</p>
      </div>

      {/* Hiển thị ảnh dưới phần mô tả */}
      <div className="article-images">
        {article.images && article.images.slice(0, 3).map((img, index) => (
          <img key={index} src={img} alt={`Article Image ${index + 1}`} className="article-main-image"/>
        ))}
      </div>

      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};


export default ArticleDetailPage;