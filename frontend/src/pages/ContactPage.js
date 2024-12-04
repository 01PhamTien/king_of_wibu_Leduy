import React, { useState } from 'react';
import '../assets/css/Contact.css';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // Quản lý trạng thái sau khi gửi form

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn làm mới trang
    setFormSubmitted(true); // Cập nhật trạng thái
    setTimeout(() => setFormSubmitted(false), 3000); // Tự động ẩn thông báo sau 3 giây
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to contact us!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>

      {formSubmitted && (
        <div className="form-success">
          <p>Thank you for contacting us! We will get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
