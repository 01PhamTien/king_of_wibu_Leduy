const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Cho phép frontend kết nối
app.use(express.json()); // Để parse JSON body từ request

// Giả lập dữ liệu phòng khách sạn
const hotels = [
  {
    "name": "Hotel ABC",
    "location": "Phu Quoc",
    "price": 120,
    "availableRooms": 10
  },
  {
    "name": "Resort XYZ",
    "location": "Hanoi",
    "price": 200,
    "availableRooms": 5
  },
  {
    "name": "Grand Palace",
    "location": "Ho Chi Minh City",
    "price": 150,
    "availableRooms": 8
  }
];

// API tìm kiếm khách sạn
app.get('/api/search', (req, res) => {
  const { destination, startDate, endDate, guests, rooms } = req.query;

  // Kiểm tra input
  if (!destination || !startDate || !guests || !rooms) {
    return res.status(400).json({ message: 'Missing required query parameters.' });
  }

  // Kiểm tra định dạng số cho guests và rooms
  if (isNaN(guests) || isNaN(rooms)) {
    return res.status(400).json({ message: 'Guests and Rooms must be numbers.' });
  }

  // Lọc khách sạn dựa trên điểm đến và số phòng còn trống
  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.location.toLowerCase() === destination.toLowerCase() &&
      hotel.availableRooms >= parseInt(rooms)
  );

  if (filteredHotels.length === 0) {
    return res.status(404).json({ message: 'No hotels found matching the search criteria.' });
  }

  // Format lại cấu trúc trả về cho phù hợp với yêu cầu
  const formattedResults = filteredHotels.map((hotel) => ({
    name: hotel.name,
    location: hotel.location,
    price: hotel.price,
    availableRooms: hotel.availableRooms,
    imageUrl: `/images/${hotel.name.toLowerCase().replace(/\s/g, '')}.jpg`, // Ví dụ đường dẫn ảnh khách sạn
  }));

  // Trả về kết quả
  res.status(200).json(formattedResults);
});

// Lắng nghe cổng
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
