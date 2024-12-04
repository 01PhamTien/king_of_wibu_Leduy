import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import roomsData from '../data/data'; // Đảm bảo đúng tên file và đường dẫn
import '../assets/css/AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState(roomsData); // Sử dụng dữ liệu từ data.js
  const [activeSection, setActiveSection] = useState('users');
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    fullName: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: ''
  });
  const [newRoom, setNewRoom] = useState({ name: '', description: '', price: '', rating: '', reviews: '', image: '', address: '' });
  const [editingRoom, setEditingRoom] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || loggedInUser.role !== 'admin') {
      navigate('/login');
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, [navigate]);

  const handleDeleteUser = (emailOrPhone) => {
    const updatedUsers = users.filter(user => user.emailOrPhone !== emailOrPhone);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUserWithId = { ...newUser, id: Date.now() };
    const updatedUsers = [...users, newUserWithId];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setNewUser({
      fullName: '',
      emailOrPhone: '',
      password: '',
      confirmPassword: '',
      dateOfBirth: '',
      gender: ''
    });
  };

  const handleEditUser = (emailOrPhone) => {
    const userToEdit = users.find(user => user.emailOrPhone === emailOrPhone);
    setEditingUser(userToEdit);
    setActiveSection('editUser');
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const updatedUsers = users.map(user =>
      user.emailOrPhone === editingUser.emailOrPhone ? editingUser : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setEditingUser(null);
    setActiveSection('users');
  };

  const handleDeleteRoom = (name) => {
    const updatedRooms = rooms.filter(room => room.name !== name);
    setRooms(updatedRooms);
  };

  const handleAddRoom = (e) => {
    e.preventDefault();
    const newRoomWithId = { ...newRoom, id: Date.now() };
    setRooms([...rooms, newRoomWithId]);
    setNewRoom({ name: '', description: '', price: '', rating: '', reviews: '', image: '', address: '' });
  };

  const handleEditRoom = (room) => {
    setEditingRoom(room);
    setActiveSection('editRoom');
  };

  const handleUpdateRoom = (e) => {
    e.preventDefault();
    const updatedRooms = rooms.map(room =>
      room.id === editingRoom.id ? editingRoom : room
    );
    setRooms(updatedRooms);
    setEditingRoom(null);
    setActiveSection('rooms');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <h2>Quản lý</h2>
        <button onClick={() => setActiveSection('users')}>Quản lý người dùng</button>
        <button onClick={() => setActiveSection('addUser')}>Thêm người dùng</button>
        <button onClick={() => setActiveSection('rooms')}>Quản lý phòng</button>
        <button onClick={() => setActiveSection('addRoom')}>Thêm phòng</button>
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>

      <div className="admin-main">
        <h1>Admin Dashboard</h1>

        {activeSection === 'users' && (
          <section className="user-management">
            <h2>Quản lý người dùng</h2>
            <ul>
              {users.map(user => (
                <li key={user.emailOrPhone}>
                  <p>Tên: {user.fullName}</p>
                  <p>Email/Phone: {user.emailOrPhone}</p>
                  <p>Ngày sinh: {user.dateOfBirth}</p>
                  <p>Giới tính: {user.gender}</p>
                  <button onClick={() => handleEditUser(user.emailOrPhone)}>Sửa người dùng</button>
                  <button onClick={() => handleDeleteUser(user.emailOrPhone)}>Xóa người dùng</button>
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
                value={newUser.fullName}
                onChange={e => setNewUser({ ...newUser, fullName: e.target.value })}
              />
              <label>Email/Phone:</label>
              <input
                type="email"
                value={newUser.emailOrPhone}
                onChange={e => setNewUser({ ...newUser, emailOrPhone: e.target.value })}
              />
              <label>Mật khẩu:</label>
              <input
                type="password"
                value={newUser.password}
                onChange={e => setNewUser({ ...newUser, password: e.target.value })}
              />
              <label>Xác nhận mật khẩu:</label>
              <input
                type="password"
                value={newUser.confirmPassword}
                onChange={e => setNewUser({ ...newUser, confirmPassword: e.target.value })}
              />
              <label>Ngày sinh:</label>
              <input
                type="date"
                value={newUser.dateOfBirth}
                onChange={e => setNewUser({ ...newUser, dateOfBirth: e.target.value })}
              />
              <label>Giới tính:</label>
              <select
                value={newUser.gender}
                onChange={e => setNewUser({ ...newUser, gender: e.target.value })}
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
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
                value={editingUser.fullName}
                onChange={e => setEditingUser({ ...editingUser, fullName: e.target.value })}
              />
              <label>Email/Phone:</label>
              <input
                type="email"
                value={editingUser.emailOrPhone}
                onChange={e => setEditingUser({ ...editingUser, emailOrPhone: e.target.value })}
              />
              <label>Mật khẩu:</label>
              <input
                type="password"
                value={editingUser.password}
                onChange={e => setEditingUser({ ...editingUser, password: e.target.value })}
              />
              <label>Xác nhận mật khẩu:</label>
              <input
                type="password"
                value={editingUser.confirmPassword}
                onChange={e => setEditingUser({ ...editingUser, confirmPassword: e.target.value })}
              />
              <label>Ngày sinh:</label>
              <input
                type="date"
                value={editingUser.dateOfBirth}
                onChange={e => setEditingUser({ ...editingUser, dateOfBirth: e.target.value })}
              />
              <label>Giới tính:</label>
              <select
                value={editingUser.gender}
                onChange={e => setEditingUser({ ...editingUser, gender: e.target.value })}
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
              <button type="submit">Cập nhật</button>
            </form>
          </section>
        )}

        {activeSection === 'rooms' && (
          <section className="room-management">
            <h2>Quản lý phòng</h2>
            <ul>
              {rooms.map(room => (
                <li key={room.id} className="room-item">
                  <div className="room-info">
                    <div className="room-img">
                      <img src={room.image} alt={room.name} />
                    </div>
                    <div className="room-details">
                      <h3>{room.name}</h3>
                      <p>{room.description}</p>
                      <p>Giá: {room.price}</p>
                      <p>Đánh giá: {room.rating}</p>
                      <p>Số lượt đánh giá: {room.reviews}</p>
                      <p>Địa chỉ: {room.address}</p>
                    </div>
                  </div>
                  <button onClick={() => handleEditRoom(room)}>Sửa phòng</button>
                  <button onClick={() => handleDeleteRoom(room.name)}>Xóa phòng</button>
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
              <label>Mô tả:</label>
              <textarea
                value={newRoom.description}
                onChange={e => setNewRoom({ ...newRoom, description: e.target.value })}
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
              <label>Số lượt đánh giá:</label>
              <input
                type="number"
                value={newRoom.reviews}
                onChange={e => setNewRoom({ ...newRoom, reviews: e.target.value })}
              />
              <label>Hình ảnh:</label>
              <input
                type="text"
                value={newRoom.image}
                onChange={e => setNewRoom({ ...newRoom, image: e.target.value })}
              />
              <label>Địa chỉ:</label>
              <input
                type="text"
                value={newRoom.address}
                onChange={e => setNewRoom({ ...newRoom, address: e.target.value })}
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
              <label>Mô tả:</label>
              <textarea
                value={editingRoom.description}
                onChange={e => setEditingRoom({ ...editingRoom, description: e.target.value })}
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
              <label>Số lượt đánh giá:</label>
              <input
                type="number"
                value={editingRoom.reviews}
                onChange={e => setEditingRoom({ ...editingRoom, reviews: e.target.value })}
              />
              <label>Hình ảnh:</label>
              <input
                type="text"
                value={editingRoom.image}
                onChange={e => setEditingRoom({ ...editingRoom, image: e.target.value })}
              />
              <label>Địa chỉ:</label>
              <input
                type="text"
                value={editingRoom.address}
                onChange={e => setEditingRoom({ ...editingRoom, address: e.target.value })}
              />
              <button type="submit">Cập nhật phòng</button>
            </form>
          </section>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
