import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Dùng icon từ react-icons

const RegisterForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Tên quá ngắn!")
      .max(50, "Tên quá dài!")
      .required("Tên là bắt buộc"),
    lastName: Yup.string()
      .min(2, "Họ quá ngắn!")
      .max(50, "Họ quá dài!")
      .required("Họ là bắt buộc"),
    emailOrPhone: Yup.string()
      .matches(
        /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$|^\d{10,12}$/,
        "Email hoặc số điện thoại không hợp lệ"
      )
      .required("Email hoặc Số điện thoại là bắt buộc"),
    password: Yup.string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .required("Mật khẩu là bắt buộc"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Mật khẩu xác nhận không khớp")
      .required("Xác nhận mật khẩu là bắt buộc"),
    gender: Yup.string()
      .oneOf(["Nam", "Nữ", "Khác"], "Giới tính không hợp lệ")
      .required("Giới tính là bắt buộc"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailOrPhone: "",
      password: "",
      confirmPassword: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const isEmailExist = users.some(user => user.emailOrPhone === values.emailOrPhone);

      if (isEmailExist) {
        setErrorMessage("Email đã tồn tại, vui lòng thử email khác.");
      } else {
        users.push(values);
        localStorage.setItem("users", JSON.stringify(users));
        setSuccessMessage("Đăng ký thành công!");
        setErrorMessage(null);

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    },
  });

  return (
    <div className="register-form-container">
      <h2>Tạo tài khoản mới</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Tên:</label>
          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="error-message">{formik.errors.firstName}</p>
          )}
        </div>
        <div className="form-group">
          <label>Họ:</label>
          <input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="error-message">{formik.errors.lastName}</p>
          )}
        </div>
        <div className="form-group">
          <label>Email hoặc Số điện thoại:</label>
          <input
            type="text"
            name="emailOrPhone"
            value={formik.values.emailOrPhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
            <p className="error-message">{formik.errors.emailOrPhone}</p>
          )}
        </div>
        <div className="form-group password-container">
          <label>Mật khẩu:</label>
          <div className="input-with-icon">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span
              className="icon"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="error-message">{formik.errors.password}</p>
          )}
        </div>
        <div className="form-group password-container">
          <label>Xác nhận mật khẩu:</label>
          <div className="input-with-icon">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span
              className="icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ cursor: "pointer" }}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="error-message">{formik.errors.confirmPassword}</p>
          )}
        </div>
        <div className="form-group">
          <label>Giới tính:</label>
          <select
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <p className="error-message">{formik.errors.gender}</p>
          )}
        </div>
        <button type="submit" className="register-button">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
