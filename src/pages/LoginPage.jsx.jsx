import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [isOpening, setIsOpening] = useState(false); // State สำหรับเล่น Animation
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '1234') { 
      setIsOpening(true); // เริ่มเล่นอนิเมชั่นเปิดกล่อง
      
      // รอให้แอนิเมชั่นทำงาน 1 วินาทีแล้วค่อยเปลี่ยนหน้า
      setTimeout(() => {
        navigate('/surprise');
      }, 1000);
    } else {
      alert('รหัสผิดน้าา ลองใหม่อีกรอบครับ ❤️');
    }
  };

  return (
    <div className="login-container">
      {/* เพิ่ม class 'open' เมื่อกดรหัสถูก เพื่อเริ่มเล่น Animation */}
      <div className={`gift-card ${isOpening ? 'open' : ''}`}>
        <div className="gift-content">
          <div className="floating-heart">💖</div>
          <h1>สำหรับคนเอาแต่ใจ  ขี้ร้อง กินเก่ง</h1>
          <p>ใส่รหัสสิเร็วๆๆ</p>
          
          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="reveal-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="รหัสคืออะไรน้า..."
              required
              autoComplete="off"
            />
            <button type="submit">Unlock Surprise</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;