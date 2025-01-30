import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import './App.css';
import AboutMeSection from './AboutMeSection';  // AboutMeSection 컴포넌트 임포트
import SkillsSection from './SkillsSection';
import ArchivingSection from './ArchivingSection';
import ProjectsSection from './ProjectsSection';
import CareerSection from './CareerSection';
import 'font-awesome/css/font-awesome.min.css';  // FontAwesome CSS 파일 임포트 

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // 화면 크기 상태
  const [menuIconClicked, setMenuIconClicked] = useState(false); // 메뉴 아이콘 클릭 상태
  const [showScrollTopIcon, setShowScrollTopIcon] = useState(false); // 위로 향하는 화살표 표시 상태
  const menuRef = useRef(null); // 메뉴 영역 참조

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  // 스크롤 이벤트 핸들링
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
        setShowScrollTopIcon(true); // 50px 이상 스크롤하면 화살표 표시
      } else {
        setScrolling(false);
        setShowScrollTopIcon(false); // 스크롤 위치가 50px 이하일 때는 화살표 숨김
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 화면 크기 변경 이벤트 핸들링
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // 화면 크기 변경 시 상태 업데이트
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 메뉴 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 메뉴 외부를 클릭하거나 메뉴 아이콘을 클릭하면 메뉴를 닫음
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-icon')) {
        setMenuIconClicked(false); // 메뉴 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // header-title 클릭 시 페이지 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* 헤더 */}
      <header className={`header ${scrolling ? "scrolled" : ""} ${screenWidth <= 1000 ? "small-screen" : ""}`}>
        <div className="header-content">
          <button className="header-title" onClick={scrollToTop}>GEJ's Portfolio</button>
          <nav className={`navigation`}>
            <Link to="about" smooth={true} duration={500} offset={-65}>
              <button className="navItem">About me</button>  {/* <button>로 대체 */}
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-65}>
              <button className="navItem">Skills</button>
            </Link>
            <Link to="archiving" smooth={true} duration={500} offset={-65}>
              <button className="navItem">Archiving</button>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-65}>
              <button className="navItem">Projects</button>
            </Link>
            <Link to="career" smooth={true} duration={500} offset={-65}>
              <button className="navItem">Career</button>
            </Link>
          </nav>
          <button
            className="menu-icon"
            onClick={() => setMenuIconClicked(!menuIconClicked)}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
        {menuIconClicked && (
          <div className="dropdown-menu" ref={menuRef}>
            <Link to="about" smooth={true} duration={500} offset={-65} onClick={() => setMenuIconClicked(false)} >
              <div className="dropdown-item">About me</div>
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-65} onClick={() => setMenuIconClicked(false)} >
              <div className="dropdown-item">Skills</div>
            </Link>
            <Link to="archiving" smooth={true} duration={500} offset={-65} onClick={() => setMenuIconClicked(false)} >
              <div className="dropdown-item">Archiving</div>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-65} onClick={() => setMenuIconClicked(false)} >
              <div className="dropdown-item">Projects</div>
            </Link>
            <Link to="career" smooth={true} duration={500} offset={-65} onClick={() => setMenuIconClicked(false)} >
              <div className="dropdown-item">career</div>
            </Link>
          </div>
        )}
      </header>

      {/* 마스트헤드 */}
      <div className="masthead">
        <div className="masthead-content">
          <h1 onClick={() => console.log('Button clicked')}>- 高恩智 -<br />モバイル開発者ポートフォリオ</h1>
          <hr />
          <h2>始めなして。<br />本質に集中するモバイル開発者<br />「高恩智」です。</h2>
          <Link to="about" smooth={true} duration={500} offset={-65} >
            <button className="see-more">もっと見る ↓</button>
          </Link>
        </div>
      </div>


      {/* 위로 향하는 화살표 */}
      {showScrollTopIcon && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa fa-arrow-up"></i>
        </button>
      )}

      {/* 섹션들 */}
      <AboutMeSection />
      <SkillsSection />
      <ArchivingSection />
      <ProjectsSection />
      <CareerSection />

      {/* 푸터 */}
      <footer className="footer">
        © 2025. Go Eun Ji.
      </footer>
    </div>
  );
}

export default App;