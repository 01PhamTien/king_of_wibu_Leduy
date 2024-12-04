import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./route/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchProvider } from "./context/SearchContext"; 

const App = () => {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);

  const noHeaderFooterPaths = ["/login", "/register"];
  const shouldHideHeaderFooter =
    noHeaderFooterPaths.includes(location.pathname) || isAdmin; // Ẩn nếu là admin hoặc ở trang login/register

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    try {
      const parsedUser = loggedInUser ? JSON.parse(loggedInUser) : null;
      if (parsedUser && parsedUser.role === "admin") {
        setIsAdmin(true); // Xác định là admin
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.error("Error parsing loggedInUser:", error);
      setIsAdmin(false); // Đảm bảo không phải admin nếu lỗi xảy ra
    }
  }, [location.pathname]); // Thêm `location.pathname` để kiểm tra khi chuyển trang

  return (
    <div className="App">
      {!shouldHideHeaderFooter && <Header />}
      <AppRoutes />
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <SearchProvider> {/* Sử dụng SearchContextProvider ở đây */}
    <Router>
      <App />
    </Router>
  </SearchProvider>
);

export default AppWrapper;
