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
    author: 'Nguyễn Văn Định',
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
    author: 'Nguyễn Văn Định',
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
    author: 'Nguyễn Văn Định',
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
    author: 'Nguyễn Văn Định',
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
    author: 'Nguyễn Văn Định',
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
    author: 'Nguyễn Văn Định',
  }, 
  {
    title: 'Khám phá Quảng Ngãi: Nơi bình yên ven biển',
    images: [
      'https://media.truyenhinhdulich.vn/upload/news/7544_quang_ngai_dep_hung_vi_thanh_binh_trong_loat_anh_f.jpg',
      'https://cdn.tgdd.vn/Files/2021/06/22/1362197/tron-bo-cam-nang-du-lich-quang-ngai-cac-dia-diem-checkin-202308251602081055.jpg',
      'https://i2.ex-cdn.com/crystalbay.com/files/content/2024/06/20/du-lich-quang-ngai-1-1616.jpg'
    ],
    description: 'Quảng Ngãi nổi tiếng với những bãi biển hoang sơ và vẻ đẹp yên bình, cùng với các món ăn đặc sản như cá bống sông Trà.',
    content: `
      <h2>Biển Quảng Ngãi: Sắc xanh quyến rũ</h2>
      <p>Quảng Ngãi được thiên nhiên ưu ái ban tặng những bãi biển đẹp như Sa Huỳnh, Mỹ Khê, với làn nước trong xanh và bãi cát dài trắng mịn. Đây là nơi lý tưởng để thư giãn, tận hưởng không khí trong lành và khám phá vẻ đẹp tự nhiên của vùng đất này. Bãi biển Mỹ Khê nổi tiếng với làn nước trong veo, thích hợp cho những ai yêu thích tắm biển và các hoạt động thể thao dưới nước như lướt sóng, chèo thuyền kayak.</p>
      <img src="https://ik.imagekit.io/tvlk/blog/2023/06/tHAbsLoi-image.png?tr=dpr-2,w-675" alt="Biển Sa Huỳnh" class="anh">
      <h3>Khám phá các bãi biển hoang sơ</h3>
      <p>Bên cạnh những bãi biển nổi tiếng như Mỹ Khê, Quảng Ngãi còn sở hữu nhiều bãi biển hoang sơ, ít người biết đến như bãi biển Bến Đình hay bãi biển Trung Luân. Những bãi biển này có vẻ đẹp tự nhiên, với cát vàng mịn màng và sóng biển vỗ về bờ, tạo nên không gian yên tĩnh, lý tưởng cho những ai tìm kiếm sự bình yên và tĩnh lặng.</p>
      
      <h2>Ẩm thực đặc sản Quảng Ngãi</h2>
      <p>Ẩm thực Quảng Ngãi là một phần không thể thiếu trong hành trình khám phá vùng đất này. Nơi đây nổi tiếng với những món ăn đặc sản như cá bống sông Trà, don (loại ốc biển đặc sản), hay món bún cá ngừ nấu măng.</p>
      <p><strong>Cá bống sông Trà</strong> là món ăn độc đáo chỉ có ở Quảng Ngãi. Với vị ngọt thanh, cá bống được chế biến theo nhiều cách như kho, nướng hay nấu canh. Mỗi món ăn đều mang đến hương vị riêng biệt, quyến rũ du khách ngay từ lần đầu thưởng thức.</p>
      <p><strong>Don</strong> là loại ốc biển có vỏ hình chóp, có thể nấu súp hoặc xào. Don có hương vị đặc biệt, dễ ăn và rất được ưa chuộng bởi người dân địa phương cũng như du khách. Món ăn này thường được chế biến cùng với những nguyên liệu tươi ngon nhất từ biển, tạo nên hương vị đặc biệt khó quên.</p>
  
      <h3>Khám phá làng chài</h3>
      <p>Quảng Ngãi không chỉ nổi bật với những bãi biển xinh đẹp mà còn với những làng chài truyền thống, nơi bạn có thể tìm hiểu đời sống của người dân địa phương. Các làng chài như Tịnh Kỳ hay Bình Hải mang đến trải nghiệm mới mẻ về văn hóa, phong tục của ngư dân. Bạn có thể tham gia vào các hoạt động đánh bắt cá cùng ngư dân hoặc thưởng thức các món hải sản tươi ngon được chế biến ngay tại chỗ.</p>
  
      <h3>Vẻ đẹp thiên nhiên Quảng Ngãi</h3>
      <p>Quảng Ngãi không chỉ có biển, mà còn có những khu rừng nguyên sinh, những thác nước hùng vĩ và các dãy núi xanh mát. Tham gia tour du lịch sinh thái tại các khu rừng quốc gia như Sơn Tây hay núi Thạch Bích sẽ mang lại cho bạn những trải nghiệm tuyệt vời với cảnh quan hoang sơ, không khí trong lành và cảm giác thư giãn tuyệt đối.</p>
  
      <h2>Kết luận</h2>
      <p>Quảng Ngãi là một điểm đến lý tưởng cho những ai yêu thích vẻ đẹp tự nhiên, sự bình yên và khám phá các nền văn hóa đặc sắc. Với các bãi biển tuyệt đẹp, ẩm thực phong phú và nền văn hóa độc đáo, nơi đây chắc chắn sẽ mang đến cho bạn một chuyến đi khó quên.</p>
    `,
    date: '10/11/2024',
    author: 'Nguyễn Văn Định',
  },  
  {
    title: 'Phú Yên - Xứ sở hoa vàng trên cỏ xanh',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_trtvALD6NHEcTJH4jhAzhOHwRdKyqLjmA&s',
      'https://baomoi.vinhphuc.gov.vn//Upload/baiviet/2023/11/24/dttlinh/999_1.jpg',
      'https://tourion.vn/wp-content/uploads/2023/08/tourion-lich-trinh-tour-du-lich-phu-yen-hoa-vang-co-xanh-thap-nghinh-phong-1.jpg'
    ],
    description: 'Phú Yên là điểm đến lãng mạn với những cánh đồng hoa vàng rực rỡ, bãi biển tuyệt đẹp và thiên nhiên trong lành.',
    content: `
      <h2>Thiên nhiên thơ mộng của Phú Yên</h2>
      <p>Phú Yên là vùng đất được thiên nhiên ưu ái với cảnh sắc tuyệt đẹp và đa dạng. Một trong những điểm đến nổi bật là <strong>Bãi Môn</strong>, nơi sở hữu bãi cát vàng trải dài, nước biển trong xanh như ngọc. Từ đây, bạn có thể chiêm ngưỡng <strong>Gành Đá Đĩa</strong>, một kỳ quan thiên nhiên với các khối đá hình lục giác xếp chồng lên nhau tạo thành những gành đá độc đáo, hấp dẫn du khách đến khám phá.</p>
      <img src="https://baolamdong.vn/file/e7837c02845ffd04018473e6df282e92/dataimages/202008/original/images2306515_ghenh_da_dia_1_01.jpg" alt="Gành Đá Đĩa" class="anh">
      <p>Khám phá Gành Đá Đĩa, bạn sẽ có cơ hội chiêm ngưỡng cảnh biển tuyệt vời, với làn sóng vỗ về bờ đá tạo thành những hình dáng kỳ lạ. Đây là điểm lý tưởng để check-in và chụp những bức ảnh đẹp mê hồn.</p>
  
      <h2>Các hoạt động du lịch thú vị</h2>
      <p>Bên cạnh các bãi biển tuyệt đẹp, Phú Yên còn là nơi lý tưởng để bạn khám phá các địa danh lịch sử, văn hóa. <strong>Nhà thờ Mằng Lăng</strong> nổi bật với kiến trúc cổ kính và được biết đến là nơi có cuốn sách in chữ quốc ngữ đầu tiên của Việt Nam. Đừng quên ghé thăm <strong>Tháp Nhạn</strong>, di tích lịch sử được xây dựng vào thế kỷ 11, nơi bạn có thể ngắm nhìn toàn cảnh thành phố Tuy Hòa từ trên cao.</p>
  
      <h3>Khám phá văn hóa và ẩm thực Phú Yên</h3>
      <p>Phú Yên không chỉ nổi tiếng với cảnh đẹp mà còn có một nền ẩm thực đa dạng và phong phú. Bạn sẽ có cơ hội thưởng thức các món đặc sản như <strong>bánh canh hẹ</strong>, <strong>mực rim me</strong>, hay <strong>gà nướng mắc mật</strong>, những món ăn đậm đà hương vị, phản ánh nét đặc trưng của vùng đất này.</p>
  
      <h2>Vẻ đẹp của biển Phú Yên</h2>
      <p>Với đường bờ biển dài hơn 100km, Phú Yên còn có nhiều bãi biển xinh đẹp khác như <strong>Bãi Xép</strong>, nơi đã được chọn làm bối cảnh cho bộ phim "Hoa vàng trên cỏ xanh". Nơi đây có không gian yên tĩnh, thích hợp cho những ai muốn thư giãn, tận hưởng không khí trong lành của biển cả. Các hoạt động thể thao biển như lướt sóng, chèo thuyền kayak cũng rất phổ biến tại các bãi biển này.</p>
  
      <h2>Kết luận</h2>
      <p>Phú Yên không chỉ là một thiên đường du lịch với những cảnh đẹp thiên nhiên hùng vĩ mà còn là một điểm đến tuyệt vời để khám phá văn hóa, ẩm thực độc đáo. Hãy đến và trải nghiệm vẻ đẹp của xứ sở hoa vàng trên cỏ xanh, nơi thiên nhiên và con người hòa quyện tạo nên một bức tranh sống động, đầy cảm hứng.</p>
    `,
    date: '05/11/2024',
    author: 'Nguyễn Văn Định',
  },  
  {
    title: 'Huế - Kinh đô cổ kính của Việt Nam',
    images: [
      'https://mia.vn/media/uploads/blog-du-lich/kinh-thanh-hue-chiem-nguong-kien-truc-vang-son-cua-13-vi-vua-trieu-dai-nha-nguyen-08-1638156842.jpg',
      'https://galatravel.vn/pic/destination/images/kinh%20th%C3%A0nh%20hu%E1%BA%BF.jpg',
      'https://cdn.tuoitre.vn/zoom/700_525/2020/6/10/do-thi-di-san-hue-15917810676011193841582-crop-1591781271054916672657.jpg'
    ],
    description: 'Huế với các di tích lịch sử như Đại Nội, lăng tẩm vua Nguyễn và các món ăn đặc trưng xứ Huế là điểm đến không thể bỏ qua.',
    content: `
      <h2>Đại Nội Huế: Di sản thế giới</h2>
      <p>Đại Nội Huế là một trong những biểu tượng vĩ đại của lịch sử Việt Nam, là nơi lưu giữ những dấu ấn của triều đại nhà Nguyễn. Được UNESCO công nhận là Di sản thế giới, Đại Nội không chỉ nổi bật với kiến trúc độc đáo mà còn chứa đựng những câu chuyện lịch sử về một vương triều hùng mạnh. Đi qua các cổng thành, du khách sẽ bước vào những cung điện, đền đài cổ kính, nơi các vua chúa và quan lại sinh sống và làm việc.</p>
      <img src="https://mia.vn/media/uploads/blog-du-lich/dai-noi-hue-net-dep-co-kinh-ben-dong-song-huong-tho-mong-1637860597.jpg" alt="Đại Nội Huế" class="anh">
      <p>Trong khuôn viên Đại Nội, bạn sẽ tìm thấy nhiều công trình nổi bật như <strong>Điện Thái Hòa</strong>, nơi diễn ra các nghi lễ hoàng gia, và <strong>Thái Miếu</strong>, nơi thờ các vị vua của triều Nguyễn. Mỗi công trình đều mang trong mình những giá trị văn hóa sâu sắc và là minh chứng cho sự phát triển của nền văn minh Việt Nam.</p>
  
      <h2>Ẩm thực đặc trưng</h2>
      <p>Huế nổi tiếng với nền ẩm thực cung đình tinh tế và độc đáo. Du khách sẽ có cơ hội thưởng thức các món ăn như <strong>nem công, chả phượng</strong>, những món ăn chỉ dành cho hoàng gia. Ngoài ra, <strong>bún bò Huế</strong> là món ăn phổ biến mà mọi du khách đều không thể bỏ qua. Hương vị đậm đà của nước dùng, kết hợp với những lát thịt bò tươi ngon, tạo nên một hương vị khó quên.</p>
      <p>Bên cạnh các món ăn cung đình, Huế cũng có nhiều món ăn bình dân hấp dẫn như <strong>chè hạt sen</strong> và <strong>cơm hến</strong>. Các món ăn này mang đậm đà bản sắc xứ Huế, luôn làm hài lòng du khách từ lần thưởng thức đầu tiên.</p>
  
      <h3>Khám phá các di tích lịch sử khác</h3>
      <p>Bên cạnh Đại Nội, Huế còn có rất nhiều lăng tẩm vua Nguyễn như <strong>Lăng Khải Định</strong> và <strong>Lăng Minh Mạng</strong>, là những công trình kiến trúc hoành tráng, kết hợp giữa yếu tố văn hóa dân gian và nghệ thuật phương Tây. Những nơi này không chỉ có giá trị lịch sử mà còn là những địa điểm du lịch hấp dẫn không thể bỏ qua khi đến Huế.</p>
  
      <h2>Vẻ đẹp của sông Hương và các cây cầu Huế</h2>
      <p>Sông Hương là biểu tượng của Huế, với vẻ đẹp lãng mạn và thơ mộng. Bạn có thể thưởng thức cảnh sắc tuyệt đẹp của sông Hương từ những cây cầu nổi tiếng như <strong>Cầu Tràng Tiền</strong> và <strong>Cầu Phú Xuân</strong>. Các cây cầu này không chỉ đẹp mà còn mang trong mình những câu chuyện lịch sử thú vị, gắn liền với quá trình phát triển của thành phố Huế qua các thời kỳ.</p>
  
      <h2>Kết luận</h2>
      <p>Huế không chỉ là một thành phố có giá trị lịch sử sâu sắc mà còn là điểm đến tuyệt vời cho những ai yêu thích văn hóa, ẩm thực và thiên nhiên. Những di tích lịch sử, cảnh đẹp tuyệt vời cùng những món ăn độc đáo sẽ khiến bạn không thể quên chuyến đi đến vùng đất này.</p>
    `,
    date: '30/10/2024',
    author: 'Nguyễn Văn Định',
  },  
  {
  title: 'Đắk Lắk - Vùng đất của đại ngàn',
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyBJeC9dVkCcrc5oRerFiSlVWP425RJfjXg&s',
    'https://vietair.com.vn/Media/Images/vietair/Tin-tuc/2022/8/ban-do-tay-nguyen.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqH8WnIMhsfeEArFQHgdW7DQUVvuGwwJvMFQ&s'
  ],
  description: 'Đắk Lắk nổi tiếng với văn hóa cồng chiêng Tây Nguyên, những thác nước hùng vĩ và cà phê thơm ngon.',
  content: `
    <h2>Văn hóa cồng chiêng Tây Nguyên</h2>
    <p>Đắk Lắk không chỉ thu hút du khách bởi vẻ đẹp thiên nhiên mà còn bởi nền văn hóa đậm đà bản sắc, đặc biệt là văn hóa cồng chiêng của người dân Tây Nguyên. Cồng chiêng không chỉ là nhạc cụ truyền thống mà còn là một phần không thể thiếu trong các lễ hội và sinh hoạt cộng đồng của người dân nơi đây. Du khách có thể tham gia vào những buổi biểu diễn cồng chiêng đầy màu sắc, được tổ chức tại các làng bản, nơi những nghệ nhân trình diễn những bản nhạc truyền thống mang đậm âm hưởng của núi rừng.</p>
    <img src="https://daklak.gov.vn/documents/10181/10956/9476002.JPG/7cddcfe1-fe90-4e47-aa57-d226950b27e1?t=1447838857143" alt="Biểu diễn cồng chiêng" class="anh">
    <p>Cồng chiêng Tây Nguyên không chỉ là nhạc cụ, mà còn là cầu nối giữa con người và thần linh, là biểu tượng của sự đoàn kết, gắn bó trong cộng đồng. Các lễ hội cồng chiêng Tây Nguyên diễn ra vào dịp đầu năm, lễ mừng mùa vụ hay các sự kiện quan trọng trong đời sống người dân, mang lại không khí rộn ràng, vui tươi và thấm đẫm tình cảm cộng đồng.</p>

    <h2>Thiên nhiên kỳ vĩ</h2>
    <p>Đắk Lắk nổi bật với hệ thống thác nước và hồ tự nhiên tuyệt đẹp, trong đó Thác Dray Nur và Hồ Lắk là hai điểm đến không thể bỏ qua. Thác Dray Nur nằm cách trung tâm Buôn Ma Thuột khoảng 30km, được mệnh danh là “nàng tiên trong rừng”, với làn nước trắng xóa đổ từ độ cao hơn 30m tạo thành một khung cảnh vô cùng kỳ vĩ. Thác Dray Nur không chỉ đẹp mà còn là một trong những thác nước lớn nhất Tây Nguyên, thu hút đông đảo du khách đến tham quan và khám phá.</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqH8WnIMhsfeEArFQHgdW7DQUVvuGwwJvMFQ&s" alt="Thác Dray Nur" class="anh">
    <h3>Khám phá hồ Lắk</h3>
    <p>Hồ Lắk, nằm trong khu vực của huyện Lắk, là một trong những hồ nước ngọt lớn nhất Tây Nguyên. Nơi đây không chỉ có cảnh quan thơ mộng mà còn là nơi sinh sống của nhiều loài động vật hoang dã. Du khách có thể trải nghiệm đi thuyền trên hồ, tham quan làng Buôn Jun, nơi người dân vẫn giữ gìn những nét văn hóa truyền thống, hay thử sức với các hoạt động như câu cá, chèo thuyền kayak, giúp bạn có những phút giây thư giãn giữa thiên nhiên hoang sơ.</p>

    <h2>Cà phê Đắk Lắk – Tinh hoa vùng đất đại ngàn</h2>
    <p>Không thể không nhắc đến cà phê khi nói về Đắk Lắk. Với điều kiện khí hậu lý tưởng và đất đai màu mỡ, Đắk Lắk là nơi sản xuất cà phê nổi tiếng nhất Việt Nam, đặc biệt là cà phê Arabica và Robusta. Du khách đến Đắk Lắk có thể tham quan các vườn cà phê, tìm hiểu về quy trình sản xuất và thưởng thức những ly cà phê nguyên chất, đậm đà hương vị núi rừng. Chắc chắn rằng hương cà phê Đắk Lắk sẽ để lại ấn tượng khó phai trong lòng mỗi người.</p>
    <img src="https://vietair.com.vn/Media/Images/vietair/Tin-tuc/2022/8/ban-do-tay-nguyen.jpg" alt="Cà phê Đắk Lắk" class="anh">

    <h3>Các điểm tham quan khác</h3>
    <p>Bên cạnh các thác nước, hồ, và vườn cà phê, Đắk Lắk còn sở hữu nhiều điểm du lịch hấp dẫn khác như Buôn Đôn, nơi nổi tiếng với truyền thống săn bắt voi, hay khu du lịch sinh thái Ea Kao với hệ sinh thái rừng ngập mặn độc đáo. Những ai yêu thích sự hòa mình vào thiên nhiên có thể khám phá các khu rừng nguyên sinh hay tham gia các tour trekking, leo núi tại các địa danh như núi Chư Yang Sin.</p>

    <h2>Kết luận</h2>
    <p>Đắk Lắk là vùng đất của đại ngàn, nơi có vẻ đẹp hùng vĩ của thiên nhiên và sự phong phú trong văn hóa. Từ những buổi biểu diễn cồng chiêng đầy âm hưởng đến những thác nước kỳ vĩ và những ly cà phê thơm ngon, tất cả tạo nên một Đắk Lắk quyến rũ, mê hoặc mọi du khách. Đến với Đắk Lắk, bạn không chỉ được chiêm ngưỡng thiên nhiên mà còn được đắm mình trong nền văn hóa độc đáo, ấm áp tình người nơi đây.</p>
  `,
  date: '25/10/2024',
  author: 'Nguyễn Văn Định',
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
    "author": "Nguyễn Văn Định"
  },  
  {
    title: 'Giảm giá khách sạn Tết 2025 tại Đà Nẵng',
    image: 'https://www.danangxanh.vn/wp-content/uploads/2019/12/khach-san-da-nang.jpg',
    description: 'Đặt phòng khách sạn Tết với mức giá ưu đãi hấp dẫn tại Đà Nẵng.',
    date: '03/12/2024',
    author: 'Nguyễn Văn Định',
    category: 'Ưu đãi',
    content: `
      <h2>Giảm Giá Khách Sạn Tết 2025 tại Đà Nẵng: Cơ Hội Vàng Cho Mùa Du Lịch Tết</h2>
      <p><strong>Mùa Tết 2025 đang đến gần</strong>, và bạn đang tìm kiếm một điểm đến lý tưởng để tận hưởng không khí lễ hội? Đà Nẵng, thành phố biển xinh đẹp, luôn là một lựa chọn hàng đầu cho những ai yêu thích vẻ đẹp thiên nhiên và các hoạt động giải trí hấp dẫn. Năm nay, bạn có thể tận dụng <strong>ưu đãi giảm giá lên đến 50% khi đặt phòng khách sạn Tết tại Đà Nẵng</strong>!</p>
      
      <h2>Đà Nẵng – Thành phố đáng sống</h2>
      <p>Đà Nẵng không chỉ nổi bật với những bãi biển tuyệt đẹp như Mỹ Khê, Non Nước mà còn là điểm đến lý tưởng để bạn tận hưởng một mùa Tết vui vẻ, ấm áp. Thành phố này còn có những địa điểm du lịch nổi tiếng như <strong>Bà Nà Hills</strong>, <strong>Cầu Vàng</strong>, và <strong>Ngũ Hành Sơn</strong>, thu hút hàng triệu du khách mỗi năm.</p>
      <img src="https://cdn.justfly.vn/2048x1535/media/202301/03/1672740553-bai-bien-my-khe-dia-diem-du-lich-da-nang-attdad03-14.jpg" alt="Bãi biển Mỹ Khê" class="anh">

      <h2>Ưu Đãi Khách Sạn Đặc Biệt Dành Cho Tết 2025</h2>
      <p>Với ưu đãi này, bạn sẽ được hưởng những mức giá cực kỳ hấp dẫn cho việc đặt phòng khách sạn từ 3 sao đến 5 sao tại Đà Nẵng trong dịp Tết 2025. Các khách sạn cung cấp các gói dịch vụ đặc biệt bao gồm bữa sáng miễn phí, xe đưa đón từ sân bay và các hoạt động giải trí, giúp bạn có một kỳ nghỉ trọn vẹn.</p>
      <p>Đặc biệt, các khách sạn nổi tiếng như <strong>Novotel Danang Premier Han River</strong>, <strong>InterContinental Danang Sun Peninsula Resort</strong>, và <strong>Furama Resort</strong> đều tham gia chương trình giảm giá này. Đây là cơ hội tuyệt vời để bạn tận hưởng không gian sang trọng với mức giá cực kỳ phải chăng.</p>

      <h2>Khám Phá Các Hoạt Động Du Lịch Tết 2025</h2>
      <p>Khi đến Đà Nẵng trong dịp Tết 2025, ngoài việc tận hưởng không gian nghỉ dưỡng tuyệt vời, bạn còn có thể tham gia nhiều hoạt động thú vị như tham quan các di tích lịch sử, chợ Tết, hay tham gia các lễ hội ánh sáng tại các khu du lịch nổi tiếng.</p>
      <img src="https://danang-shopping.com/wp-content/uploads/2019/07/banner-website-cau-rong.jpg" alt="Cầu Vàng" class="anh">

      <h2>Cách Đặt Phòng Và Tận Hưởng Ưu Đãi</h2>
      <p>Để nhận được ưu đãi này, bạn chỉ cần đặt phòng qua các website uy tín hoặc gọi điện trực tiếp đến các khách sạn tham gia chương trình. Hãy nhanh tay đặt phòng trước khi các ưu đãi hết hạn, vì số lượng phòng có hạn!</p>
      <p>Đừng bỏ lỡ cơ hội trải nghiệm một mùa Tết 2025 đầy vui vẻ và tiết kiệm tại Đà Nẵng, thành phố biển tuyệt vời này!</p>
    `,
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
    "author": "Nguyễn Văn Định"
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
    "author": "Nguyễn Văn Định"
  }, 
  {
    title: 'Cách chọn vé máy bay giá rẻ cho mùa Tết',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGmYtCE7B2I4ij0p0X7Jj6FSuxhHq_BZsrg&s',
    description: 'Tìm hiểu các mẹo để săn vé máy bay giá rẻ trong dịp Tết 2025.',
    date: '02/12/2024',
    author: 'Nguyễn Văn Định',
    category: 'Mẹo',
    content: `
      <h2>Cách Chọn Vé Máy Bay Giá Rẻ Cho Mùa Tết 2025</h2>
      <p>Mùa Tết là thời gian cao điểm du lịch tại Việt Nam, khi mà nhu cầu di chuyển tăng cao, và các chuyến bay dễ dàng bị cháy vé. Tuy nhiên, bạn vẫn có thể săn được vé máy bay giá rẻ nếu biết những mẹo vặt sau đây. Hãy cùng tìm hiểu cách chọn vé máy bay giá rẻ để có chuyến đi Tết tiết kiệm mà vẫn thoải mái.</p>
      
      <h3>1. Đặt Vé Sớm</h3>
      <p>Để có vé máy bay giá rẻ cho mùa Tết, việc đặt vé sớm là rất quan trọng. Các hãng hàng không thường mở bán vé trước từ 2 đến 3 tháng. Khi bạn đặt vé sớm, không chỉ có cơ hội sở hữu những chiếc vé giá rẻ mà còn có thể lựa chọn được những giờ bay thuận tiện.</p>
      <img src="https://hoabinhairlines.vn/public/userfiles/files/san-ve-may-bay-gia-re2-41.jpg" alt="Vé máy bay giá rẻ" class="anh">
      
      <h3>2. Lựa Chọn Thời Gian Bay Linh Hoạt</h3>
      <p>Để có vé máy bay giá rẻ, bạn cần phải linh hoạt về thời gian bay. Thường thì những chuyến bay vào các ngày cuối tuần hoặc gần với các ngày lễ Tết sẽ có giá cao. Vì vậy, nếu có thể, hãy lựa chọn các chuyến bay vào ngày thường hoặc tránh các ngày cao điểm như 28, 29 tháng Chạp. Bạn có thể thử bay vào các ngày trước Tết hoặc sau Tết để giảm chi phí vé máy bay.</p>

      <h3>3. Sử Dụng Các Công Cụ So Sánh Giá Vé</h3>
      <p>Để tiết kiệm thời gian và công sức, hãy sử dụng các công cụ so sánh giá vé máy bay như Skyscanner, Kayak, Google Flights. Các công cụ này giúp bạn tìm được vé máy bay giá rẻ từ nhiều hãng khác nhau và so sánh giá một cách dễ dàng. Bạn chỉ cần nhập điểm đến và thời gian bay, và công cụ sẽ giúp bạn tìm ra những lựa chọn tốt nhất.</p>
      
      <h3>4. Theo Dõi Các Khuyến Mãi Và Ưu Đãi</h3>
      <p>Các hãng hàng không thường xuyên có các chương trình khuyến mãi, giảm giá vé máy bay đặc biệt vào dịp cuối năm. Hãy đăng ký nhận thông báo từ các hãng hàng không hoặc các website du lịch để nắm bắt những ưu đãi tốt nhất. Ngoài ra, hãy theo dõi các trang mạng xã hội của hãng hàng không vì đôi khi họ cũng tung ra các chương trình ưu đãi độc quyền chỉ thông qua các kênh này.</p>
      
      <h3>5. Đặt Vé Chuyến Bay Một Chiều Thay Vì Khứ Hồi</h3>
      <p>Một mẹo để có vé máy bay giá rẻ cho mùa Tết là đặt vé máy bay một chiều thay vì vé khứ hồi. Đôi khi việc mua vé một chiều sẽ tiết kiệm hơn rất nhiều so với vé khứ hồi, đặc biệt là khi bạn có thể kết hợp các chuyến bay của các hãng hàng không khác nhau. Bạn có thể mua vé cho chuyến đi đến điểm đến từ một hãng và vé trở về từ hãng khác, giúp tiết kiệm chi phí.</p>

      <h3>6. Sử Dụng Các Mã Giảm Giá</h3>
      <p>Trước khi đặt vé, hãy kiểm tra các mã giảm giá từ các trang web bán vé máy bay. Các mã giảm giá này có thể giúp bạn tiết kiệm thêm một khoản chi phí. Đặc biệt là trong mùa Tết, các hãng hàng không thường cung cấp mã giảm giá cho các khách hàng đặt vé qua các kênh trực tuyến.</p>

      <h3>7. Kiểm Tra Các Chuyến Bay Bay Vào Các Sân Bay Nhỏ</h3>
      <p>Một số sân bay lớn như Nội Bài (Hà Nội), Tân Sơn Nhất (Sài Gòn) thường có vé máy bay cao trong mùa Tết. Nếu bạn muốn tiết kiệm chi phí, hãy thử kiểm tra các chuyến bay đến các sân bay gần khu vực bạn cần đến. Các sân bay nhỏ hơn đôi khi có vé máy bay rẻ hơn, và bạn có thể dễ dàng di chuyển từ đó đến thành phố chính.</p>

      <h2>Kết Luận</h2>
      <p>Săn vé máy bay giá rẻ cho mùa Tết 2025 không hề khó khăn nếu bạn áp dụng đúng những mẹo trên. Hãy chuẩn bị và lên kế hoạch sớm, theo dõi các chương trình khuyến mãi và so sánh giá vé để tìm được lựa chọn tốt nhất. Chúc bạn có một chuyến bay thật thuận lợi và tiết kiệm cho dịp Tết!</p>
    `,
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