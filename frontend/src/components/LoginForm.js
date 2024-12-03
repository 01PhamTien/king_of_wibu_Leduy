import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/Login.css";

const LoginForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (emailOrPhone === "admin" && password === "admin123") {
      localStorage.setItem("adminToken", "your_admin_token");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ name: "Admin", role: "admin" })
      );
      navigate("/admin");
    } else {
      const user = users.find(
        (user) => user.emailOrPhone === emailOrPhone && user.password === password
      );

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        navigate("/x");
      } else {
        setErrorMessage("Tên đăng nhập hoặc mật khẩu không hợp lệ");
      }
    }
  };

  // Handle navigation to Home page
  const handleHomeClick = () => {
    navigate("/"); // Điều hướng về trang Home
  };

  return (
    <div>
      {/* Header with logo and buttons */}
      <header className="custom-header">
        <div className="custom-logo-container" onClick={() => navigate("/")}>
          <i className="bi bi-house-door-fill custom-home-icon"></i>
          <span className="custom-brand-name">BOOKING.COM</span>
        </div>
      </header>





      {/* Nội dung form */}
      <div className="login-form-container">
        <h2>Đăng nhập hoặc tạo tài khoản</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Địa chỉ email:</label>
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
              className="input-field"
              placeholder="Nhập địa chỉ email của bạn"
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>
          <button type="submit" className="btn-login">Đăng nhập</button>
        </form>

        <div className="social-login-container">
          <p>Hoặc đăng nhập bằng:</p>
          <button className="btn-google">Google</button>
          <button className="btn-facebook">Facebook</button>
        </div>

        <div className="register-link-container">
          <p>Chưa có tài khoản?</p>
          <Link to="/register" className="register-link">Đăng ký ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
