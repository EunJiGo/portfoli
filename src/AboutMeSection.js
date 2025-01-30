import React, { useState, useEffect } from "react";
import { Element, Link } from 'react-scroll';
import './header.css';
import './AboutMeSection.css';
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGraduationCap, FaPaperclip } from 'react-icons/fa'; // 아이콘 임포트

const AboutMeSection = () => {
  
  return (
    <Element name="about" className="section">
      <div className="about-header">
        <Link to="about" smooth={true} duration={500} offset={-65}>
          <FaPaperclip className="about-icon" />
        </Link>
        <span>About Me</span>
      </div>

      <div className="about-details">
        {/* 첫 번째 행에 아이콘과 텍스트 표시 */}
        <div className="info-row">
          {/* 첫 번째 열 */}
          <div className="info-sub-row">
            <div className="info-sub">
              <div className="info-item">
                <FaUser size={30} />
              </div>
              <div className="info-text">
                <span className="sub-title">名前</span>
                <span className="sub-contents">高恩智</span>
              </div>
            </div>
          </div>

          {/* 두 번째 열 */}
          <div className="info-sub-row">
            <div className="info-sub">
              <div className="info-item">
                <FaCalendarAlt size={30} />
              </div>
              <div className="info-text">
                <span className="sub-title">生年月日</span>
                <span className="sub-contents">1997.11.18</span>
              </div>
            </div>
          </div>

          {/* 세 번째 열 */}
          <div className="info-sub-row">
            <div className="info-sub">
              <div className="info-item">
                <FaMapMarkerAlt size={30} />
              </div>
              <div className="info-text">
                <span className="sub-title">所在地</span>
                <span className="sub-contents">日本 東京</span>
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* 두 번째 행에 아이콘과 텍스트 표시 */}
          {/* <div className="info-row"> */}
          {/* 첫 번째 열 */}
          <div className="info-sub-row">
            <div className="info-sub">
              <div className="info-item">
                <FaPhoneAlt size={30} />
              </div>
              <div className="info-text">
                <span className="sub-title">電話番号</span>
                <span className="sub-contents">080-2039-1981</span>
              </div>
            </div>
          </div>

          {/* 두 번째 열 */}
          <div className="info-sub-row">
            <div className="info-sub">
              <div className="info-item">
                <FaEnvelope size={30} />
              </div>
              <div className="info-text">
                <span className="sub-title">メールアドレス</span>
                <span className="sub-contents">jieunko1118@gmail.com</span>
              </div>
            </div>
          </div>

          {/* 세 번째 열 */}
          <div className="info-sub-row">
            <div className="info-sub">
              <div className="info-item">
                <FaGraduationCap size={30} />
              </div>
              <div className="info-text">
                <span className="sub-title">学歴</span>
                <span className="sub-contents">白石大学 (IT学部)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutMeSection;
