import React, { useState, useEffect } from 'react';
import { Element, Link } from 'react-scroll';
import './header.css';
import './ProjectsSection.css';
import { FaPaperclip, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from './data/project.json';
import { FaBook, FaImage, FaVideo, FaLink, FaLightbulb, FaThumbtack, FaHammer, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // 적절한 아이콘 가져오기
import Modal from 'react-modal';
Modal.setAppElement('#root');

const ProjectsSection = () => {
  const [showMainOnly, setShowMainOnly] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [selectedProject, setSelectedProject] = useState(null); // 선택된 project 저장
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // 이미지 모달 상태
  const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지 경로
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 이미지 인덱스

  const filteredProjects = showMainOnly
    ? projectsData.filter((project) => project.main)
    : projectsData;

  const openModal = (project) => {
    setSelectedProject(project); // 선택된 project 저장
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setSelectedProject(null); // 선택된 project 초기화
    setIsModalOpen(false); // 모달 닫기
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsImageModalOpen(false); // 이미지 모달 닫기
  };

  const openImageModal = (project, index) => {
    setSelectedProject(project);
    setSelectedImage(require(`${project.images[index]}`)); // JSON 경로를 동적으로 처리
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };


  const prevImage = () => {
    if (currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(require(`${selectedProject.images[newIndex]}`)); // 이전 이미지로 이동
    }
  };

  const nextImage = () => {
    if (currentImageIndex < selectedProject.images.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(require(`${selectedProject.images[newIndex]}`)); // 다음 이미지로 이동
    }
  };

  useEffect(() => {
    if (isModalOpen || isImageModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen, isImageModalOpen]);

  return (
    <Element name="projects" className="projects-section">
      <div className="projects-header">
        <Link to="projects" smooth={true} duration={500} offset={-65}>
          <div>
            <FaPaperclip className="about-icon" />
            <span>Projects</span>
          </div>
        </Link>
      </div>
      <div className="filter-container">
        <label>
          <input
            type="checkbox"
            checked={showMainOnly}
            onChange={() => setShowMainOnly(!showMainOnly)}
          />
          主要プロジェクトのみ表示
        </label>
      </div>
      <div className="projects-details">
        {filteredProjects.map((project) => (
          <div key={project.title} className="project-box">
            <div className={`project-title ${project.main ? 'main' : 'sub'}`}>
              {project.title}
            </div>
            <div className="project-meta">
              <span>{project.date}</span>
              <span>({project.participants})</span>
            </div>
            <div className="project-subtitle">{project.subtitle}</div>
            <ul className="project-contents">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            {project.url && (
              <div className="project-url">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                  {project.url}
                </a>
              </div>
            )}
            <div className="project-tech">
              {project.technologies.join(', ')}
            </div>
            <div className="project-resources">
              {project.readme && (
                <button onClick={() => openModal(project)}>
                  <FaBook style={{ marginRight: '5px' }} /> README
                </button>
              )}
              {/* {project.images.length > 0 && (
                <button onClick={() => openImageModal(images[0])}>
                  <FaImage style={{ marginRight: '5px' }} /> 이미지
                </button>
              )} */}
              {/* {images.length > 0 && (
                <button onClick={() => openImageModal(images[0], 0)}>
                  <FaImage style={{ marginRight: '5px' }} /> イメージ
                </button>
              )} */}
              {project.images && project.images.length > 0 && (
                <button onClick={() => openImageModal(project, 0)}>
                  <FaImage style={{ marginRight: '5px' }} /> イメージ
                </button>
              )}
              {project.videos.length > 0 && (
                <button>
                  <FaVideo style={{ marginRight: '5px' }} /> 영상
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 모달 창 */}
      {/* {selectedProject && ( */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName="modal-overlay no-scroll-overlay" // 모달 오버레이에 추가 클래스 적용
          className="modal-content no-scroll-content" // 모달 콘텐츠에 추가 클래스 적용
          propagateSwipe={false} // 중요: 모달 내 스크롤 가능하게 설정 true
        >
          <div className="modal-header">
            README.md
            <button className="close-btn" onClick={closeModal}>
              <i className="fa fa-times"></i>{/* FontAwesome X 아이콘 */}
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-title">
              <h2>{selectedProject.title}</h2>
            </div>
            <div className="modal-meta">
              <span>{selectedProject.date}</span>
              <span>({selectedProject.participants})</span>
            </div>
            {selectedProject.url && (
              <div className="modal-box">
                <div className='modal-box-title'>
                  <FaLink />
                  <h3>Deployment URL</h3>
                </div>
                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                  {selectedProject.url}
                </a>
              </div>
            )}
            <div className="modal-box">
              <div className='modal-box-title'>
                <FaThumbtack />
                <h3>Summary</h3>
              </div>
              <div className="modal-subtitle">{selectedProject.subtitle}</div>
              <ul className="modal-contents">
                {selectedProject.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="modal-features">
                主要機能：{selectedProject.features.join(', ')}
              </div>
            </div>
            <div className="modal-box">
              <div className='modal-box-title'>
                <FaLightbulb />
                <h3>Background</h3>
              </div>
              <div className="modal-background">{selectedProject.background}</div>
            </div>
            <div className="modal-box">
              <div className='modal-box-title'>
                <FaSearch />
                <h3>meaning</h3>
              </div>
              <div className="modal-meaning">{selectedProject.meaning}</div>
            </div>
            <div className="modal-box">
              <div className='modal-box-title'>
                <FaHammer />
                <h3>Technology Stack(s)</h3>
              </div>
              <div className="modal-technologies">
                {selectedProject.technologies.join(', ')}
              </div>
            </div>
          </div>

        </Modal>
      )}

      {/* 이미지 모달 */}
      {selectedImage && (
        <Modal
          isOpen={isImageModalOpen}
          onRequestClose={closeImageModal}
          overlayClassName="modal-overlay"
          className="image-modal-content"
        >
          <div className="image-modal-body">
            {/* 현재 이미지 표시 */}
            <img src={selectedImage} alt="" />
          </div>
          {/* 이미지 슬라이드 버튼 */}
          <div className="image-nav">
            <button
              onClick={prevImage}
              disabled={currentImageIndex === 0} // 첫 번째 이미지에서 비활성화
            >
              <FaChevronLeft />
            </button>
            <span>
              {currentImageIndex + 1} / {selectedProject.images.length} {/* 총 이미지 수 */}
            </span>
            <button
              onClick={nextImage}
              disabled={currentImageIndex === selectedProject.images.length - 1}
            >
              <FaChevronRight />
            </button>
          </div>
        </Modal>
      )}
    </Element>
  );
}

export default ProjectsSection;