import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import roomsData from '../data/data'; // Dữ liệu phòng lấy từ data.js
import '../assets/css/AdminDashboard.css'; // Đảm bảo bạn tạo CSS để phân khu giao diện

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState(roomsData); // Dữ liệu phòng lấy từ data.js
  const [orders, setOrders] = useState([]);
  const [activeSection, setActiveSection] = useState('users'); // Quản lý phần nội dung hiện tại
  const [editingUser, setEditingUser] = useState(null); // Trạng thái để chỉnh sửa người dùng
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user' }); // Thêm người dùng mới
  const [newRoom, setNewRoom] = useState({ name: '', address: '', price: '', rating: '', reviews: '', image: '' }); // Thêm phòng mới
  const [editingRoom, setEditingRoom] = useState(null); // Trạng thái chỉnh sửa phòng
  const [editingOrder, setEditingOrder] = useState(null); // Trạng thái chỉnh sửa đơn đặt phòng
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra quyền admin, nếu không phải admin thì điều hướng về trang đăng nhập
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || loggedInUser.role !== 'admin') {
      navigate('/login');
    }

    // Lấy danh sách người dùng từ localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);

    // Lấy danh sách đơn đặt phòng (nếu có)
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, [navigate]);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const handleDeleteRoom = (roomId) => {
    const updatedRooms = rooms.filter(room => room.id !== roomId);
    setRooms(updatedRooms);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find(user => user.id === userId);
    setEditingUser(userToEdit);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const updatedUsers = users.map(user =>
      user.id === editingUser.id ? editingUser : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUserWithId = { ...newUser, id: Date.now() };
    const updatedUsers = [...users, newUserWithId];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setNewUser({ name: '', email: '', role: 'user' });
  };

  const handleAddRoom = (e) => {
    e.preventDefault();
    const newRoomWithId = { ...newRoom, id: Date.now() };
    const updatedRooms = [...rooms, newRoomWithId];
    setRooms(updatedRooms);
    setNewRoom({ name: '', address: '', price: '', rating: '', reviews: '', image: '' });
  };

  const handleEditRoom = (roomId) => {
    const roomToEdit = rooms.find(room => room.id === roomId);
    setEditingRoom(roomToEdit);
  };

  const handleUpdateRoom = (e) => {
    e.preventDefault();
    const updatedRooms = rooms.map(room =>
      room.id === editingRoom.id ? editingRoom : room
    );
    setRooms(updatedRooms);
    setEditingRoom(null);
  };

  const handleEditOrder = (orderId) => {
    const orderToEdit = orders.find(order => order.id === orderId);
    setEditingOrder(orderToEdit);
  };

  const handleUpdateOrder = (e) => {
    e.preventDefault();
    const updatedOrders = orders.map(order =>
      order.id === editingOrder.id ? editingOrder : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setEditingOrder(null);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <h2>Quản lý</h2>
        <div className="dropdown">
          <button className="dropdown-btn" onClick={() => setActiveSection('users')}>Quản lý người dùng</button>
          <div className="dropdown-content">
            <button onClick={() => setActiveSection('addUser')}>Thêm người dùng</button>
            <button onClick={() => setActiveSection('editUser')}>Sửa người dùng</button>
            <button onClick={() => setActiveSection('deleteUser')}>Xóa người dùng</button>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-btn" onClick={() => setActiveSection('rooms')}>Quản lý phòng</button>
          <div className="dropdown-content">
            <button onClick={() => setActiveSection('addRoom')}>Thêm phòng</button>
            <button onClick={() => setActiveSection('editRoom')}>Sửa phòng</button>
            <button onClick={() => setActiveSection('deleteRoom')}>Xóa phòng</button>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-btn" onClick={() => setActiveSection('orders')}>Quản lý đặt phòng</button>
          <div className="dropdown-content">
            <button onClick={() => setActiveSection('deleteOrder')}>Hủy đơn</button>
          </div>
        </div>

        <button onClick={handleLogout}>Đăng xuất</button>
      </div>

      <div className="admin-main">
        <h1>Admin Dashboard</h1>

        {activeSection === 'users' && (
          <section className="user-management">
            <h2>Quản lý người dùng</h2>
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  <p>Tên: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Vai trò: {user.role}</p>
                  <button onClick={() => handleEditUser(user.id)}>Sửa người dùng</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Xóa người dùng</button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeSection === 'addUser' && (
          <section className="add-user">
            <h2>Thêm người dùng mới</h2>
            <form onSubmit={handleAddUser}>
              <label>Tên:</label>
              <input
                type="text"
                value={newUser.name}
                onChange={e => setNewUser({ ...newUser, name: e.target.value })}
              />
              <label>Email:</label>
              <input
                type="email"
                value={newUser.email}
                onChange={e => setNewUser({ ...newUser, email: e.target.value })}
              />
              <label>Vai trò:</label>
              <input
                type="text"
                value={newUser.role}
                onChange={e => setNewUser({ ...newUser, role: e.target.value })}
              />
              <button type="submit">Thêm người dùng</button>
            </form>
          </section>
        )}

        {activeSection === 'editUser' && editingUser && (
          <section className="edit-user">
            <h2>Sửa người dùng</h2>
            <form onSubmit={handleUpdateUser}>
              <label>Tên:</label>
              <input
                type="text"
                value={editingUser.name}
                onChange={e => setEditingUser({ ...editingUser, name: e.target.value })}
              />
              <label>Email:</label>
              <input
                type="email"
                value={editingUser.email}
                onChange={e => setEditingUser({ ...editingUser, email: e.target.value })}
              />
              <label>Vai trò:</label>
              <input
                type="text"
                value={editingUser.role}
                onChange={e => setEditingUser({ ...editingUser, role: e.target.value })}
              />
              <button type="submit">Cập nhật người dùng</button>
            </form>
          </section>
        )}

        {activeSection === 'deleteUser' && (
          <section className="delete-user">
            <h2>Xóa người dùng</h2>
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  <p>Tên: {user.name}</p>
                  <button onClick={() => handleDeleteUser(user.id)}>Xóa người dùng</button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Sửa và Thêm Phòng */}
        {activeSection === 'rooms' && (
          <section className="room-management">
            <h2>Quản lý phòng</h2>
            <ul>
              {rooms.map(room => (
                <li key={room.id}>
                  <p>Tên phòng: {room.name}</p>
                  <p>Địa chỉ: {room.address}</p>
                  <p>Giá: {room.price}</p>
                  <p>Đánh giá: {room.rating}</p>
                  <button onClick={() => handleEditRoom(room.id)}>Sửa phòng</button>
                  <button onClick={() => handleDeleteRoom(room.id)}>Xóa phòng</button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeSection === 'addRoom' && (
          <section className="add-room">
            <h2>Thêm phòng mới</h2>
            <form onSubmit={handleAddRoom}>
              <label>Tên phòng:</label>
              <input
                type="text"
                value={newRoom.name}
                onChange={e => setNewRoom({ ...newRoom, name: e.target.value })}
              />
              <label>Địa chỉ:</label>
              <input
                type="text"
                value={newRoom.address}
                onChange={e => setNewRoom({ ...newRoom, address: e.target.value })}
              />
              <label>Giá:</label>
              <input
                type="number"
                value={newRoom.price}
                onChange={e => setNewRoom({ ...newRoom, price: e.target.value })}
              />
              <label>Đánh giá:</label>
              <input
                type="number"
                value={newRoom.rating}
                onChange={e => setNewRoom({ ...newRoom, rating: e.target.value })}
              />
              <label>Nhận xét:</label>
              <input
                type="text"
                value={newRoom.reviews}
                onChange={e => setNewRoom({ ...newRoom, reviews: e.target.value })}
              />
              <label>Ảnh phòng:</label>
              <input
                type="text"
                value={newRoom.image}
                onChange={e => setNewRoom({ ...newRoom, image: e.target.value })}
              />
              <button type="submit">Thêm phòng</button>
            </form>
          </section>
        )}

        {activeSection === 'editRoom' && editingRoom && (
          <section className="edit-room">
            <h2>Sửa phòng</h2>
            <form onSubmit={handleUpdateRoom}>
              <label>Tên phòng:</label>
              <input
                type="text"
                value={editingRoom.name}
                onChange={e => setEditingRoom({ ...editingRoom, name: e.target.value })}
              />
              <label>Địa chỉ:</label>
              <input
                type="text"
                value={editingRoom.address}
                onChange={e => setEditingRoom({ ...editingRoom, address: e.target.value })}
              />
              <label>Giá:</label>
              <input
                type="number"
                value={editingRoom.price}
                onChange={e => setEditingRoom({ ...editingRoom, price: e.target.value })}
              />
              <label>Đánh giá:</label>
              <input
                type="number"
                value={editingRoom.rating}
                onChange={e => setEditingRoom({ ...editingRoom, rating: e.target.value })}
              />
              <label>Nhận xét:</label>
              <input
                type="text"
                value={editingRoom.reviews}
                onChange={e => setEditingRoom({ ...editingRoom, reviews: e.target.value })}
              />
              <button type="submit">Cập nhật phòng</button>
            </form>
          </section>
        )}

        {/* Quản lý đơn đặt phòng */}
        {activeSection === 'orders' && (
          <section className="order-management">
            <h2>Quản lý đơn đặt phòng</h2>
            <ul>
              {orders.map(order => (
                <li key={order.id}>
                  <p>ID đơn hàng: {order.id}</p>
                  <p>Người đặt: {order.user}</p>
                  <p>Phòng: {order.roomName}</p>
                  <button onClick={() => handleEditOrder(order.id)}>Sửa đơn hàng</button>
                  <button onClick={() => handleDeleteOrder(order.id)}>Xóa đơn hàng</button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
