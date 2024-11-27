import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "./route/routes"; // Đảm bảo đường dẫn chính xác
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchProvider } from "./context/SearchContext"; // Đảm bảo SearchProvider được import đúng

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false); // Kiểm tra vai trò admin

  const noHeaderFooterPaths = ["/login", "/register"]; // Các đường dẫn không có Header và Footer
  const shouldHideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser && loggedInUser.role === "admin") {
      setIsAdmin(true); // Xác định người dùng là admin
      navigate("/AdminDashboard"); // Điều hướng đến trang admin
    }
  }, [navigate]);

  return (
    <div className="App">
      {/* Ẩn Header và Footer nếu đường dẫn nằm trong noHeaderFooterPaths hoặc người dùng là admin */}
      {!shouldHideHeaderFooter && !isAdmin && <Header />}
      <AppRoutes />
      {!shouldHideHeaderFooter && !isAdmin && <Footer />}
    </div>
  );
};

// Bao bọc App bằng SearchProvider và Router
const AppWrapper = () => (
  <SearchProvider>
    <Router>
      <App />
    </Router>
  </SearchProvider>
);

export default AppWrapper;
