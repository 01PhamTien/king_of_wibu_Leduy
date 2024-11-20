import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./route/routes"; // Đảm bảo đường dẫn chính xác
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchProvider } from "./context/SearchContext"; // Đảm bảo SearchProvider được import đúng


const App = () => {
  const location = useLocation();
  const noHeaderFooterPaths = ["/login", "/register"]; // Các đường dẫn không có Header và Footer

  const shouldHideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);

  return (
    <div className="App">
      {/* Header và Footer chỉ hiển thị nếu không nằm trong noHeaderFooterPaths */}
      {!shouldHideHeaderFooter && <Header />}
      <AppRoutes />
      {!shouldHideHeaderFooter && <Footer />}

      
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
