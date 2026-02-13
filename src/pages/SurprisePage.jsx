import React, { useEffect, useState } from 'react';
import './SurprisePage.css';
import myPhoto from '../assets/LINE_ALBUM_211268_260214_1.jpg'; // เปลี่ยน path เป็นรูปของคุณนะ

const SurprisePage = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="surprise-container">
      <div className={`main-wrapper ${isReady ? 'active' : ''}`}>
        
        {/* 1. ส่วนรูปภาพเดี่ยวๆ (ด้านบน) */}
        <div className="photo-card">
          <img src={myPhoto} alt="My Photo" className="personal-photo" />
        </div>

        {/* 2. ส่วนดอกไม้ + ข้อความ (รวมใน Container เดียวกัน) */}
        <div className="greeting-card">
          <div className="flower-section">
            <span className="bouquet-emoji">💐</span>
            <div className="sparkle-layer">✨💖✨</div>
          </div>
          
          <div className="message-section">
            <h2>Happy Valentine's Day</h2>
            <p>ช่อดอกไม้สำหรับใบเตย</p>
            <p>ต้นกล้ารักใบเตยนะครับ ❤️</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SurprisePage;