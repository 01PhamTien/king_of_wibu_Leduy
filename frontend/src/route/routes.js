import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import BookingPage from '../pages/BookingPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RoomDetailPage from '../pages/RoomDetailPage';
import RoomListPage from '../pages/RoomListPage';
import NewsPage from '../pages/NewsPage';
import AuthLayout from '../components/AuthLayout'; 
import SearchResults from '../components/SearchResults'; 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/room/:id" element={<RoomDetailPage />} />
      <Route path="/room-list" element={<RoomListPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/search-results" element={<SearchResults />} />

      {/* Đường dẫn Login và Register sử dụng AuthLayout */}
      <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
      <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />
    </Routes>
  );
}

export default AppRoutes;
