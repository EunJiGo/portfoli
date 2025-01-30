import React, { useEffect, useState } from 'react';
import { Element, Link } from 'react-scroll';
import './header.css';
import './CareerSection.css';
import { FaPaperclip } from 'react-icons/fa'; // 필요한 아이콘 임포트

// career.json 파일에서 데이터 불러오기
import careerData from './data/career.json'; // JSON 파일 경로

const CareerSection = () => {

    const [career, setCareer] = useState(null);

    useEffect(() => {
        // JSON 파일 데이터를 컴포넌트 상태에 설정
        setCareer(careerData);
    }, []);

    // 데이터가 로드되지 않았을 경우 로딩 표시
    if (!career) {
        return <div>Loading...</div>;
    }

    return (
        <Element name="career" className="career-section">
            <div className="career-header">
                <Link to="career" smooth={true} duration={500} offset={-65}>
                    <FaPaperclip className="about-icon" />
                    <span>Career</span>
                </Link>
            </div>

            {/* Career Details */}
            <div className="career-details">
                {/* 1:3 레이아웃 박스 */}
                <div className="career-box">
                    {/* 왼쪽 영역 */}
                    <div className="left-section">
                        <div className="circle">
                            <img src={require('./images/gngsLogo.png')} alt="Logo" />
                        </div>
                    </div>

                    {/* 오른쪽 영역 */}
                    <div className="right-section">
                        {/* 회사명 */}
                        <h2>{career.company}</h2>
                        {/* 재직 기간 */}
                        <div className="employment_period">
                            {career.employment_period}
                        </div>
                        {/* 회사 소개 */}
                        <div className="company_description">
                            {career.company_description}
                        </div>

                        <div className="key_tasks">
                            {/* 주요 업무 */}
                            {career.key_tasks.map((task, index) => (
                                <div className="key_task" key={index}>
                                    {task}
                                </div>
                            ))}
                        </div>

                        {/* 프로젝트 */}
                        {career.projects.map((project, index) => (
                            <div className="career-project-box" key={index}>
                                <div className="career-project-title">{project.title}</div>
                                <div className="career-project-period">{project.period}</div>
                                <div className="career-project-description">{project.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default CareerSection;