import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './route/routes'; // Đảm bảo tên import khớp với tên export
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  const location = useLocation();

  // Các đường dẫn không muốn hiển thị Header và Footer
  const noHeaderFooterPaths = ['/login', '/register'];

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

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
