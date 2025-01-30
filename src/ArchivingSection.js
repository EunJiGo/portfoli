import React from 'react';
import { Element, Link as ScrollLink } from 'react-scroll'; // Link 이름을 변경하여 충돌 피하기
import './ArchivingSection.css';
import { FaPaperclip, FaFilePowerpoint, FaProjectDiagram, FaChalkboardTeacher, FaDesktop, FaUser } from 'react-icons/fa';

// 둥근 네모 상자 컴포넌트
const RoundedBox = ({ icons, title, text1, link, text2, pdfLink }) => {
    // PDF 파일을 열기 위한 함수
    const openPDF = () => {
        window.open(pdfLink.url, "_blank");
    };

    return (
        <div className="rounded-box"  onClick={openPDF}>
            <div className="rounded-box-header">
                <div className="icon-container">
                    {/* icons가 배열이면 map을 사용하여 반복하고, 아니라면 단일 아이콘을 그대로 사용 */}
                    {Array.isArray(icons)
                        ? icons.map((icon, index) => (
                            <div key={index} className="icon">
                                {icon}
                            </div>
                        ))
                        : <div className="icon">{icons}</div>}
                </div>
                <span className="rounded-box-title">{title}</span>
            </div>
            <div className="rounded-box-content">
                <span
                    className="open-pdf-button">
                    {text1}
                </span>
                <p>{text2}</p>
            </div>
        </div>
    );
};


const ArchivingSection = () => {
    const project1PDF = {
        url: process.env.PUBLIC_URL + "/pdf/test.pdf", // 첫 번째 PDF 파일 링크
    };

    const project2PDF = {
        url: process.env.PUBLIC_URL + "/pdf/test.pdf", // 두 번째 PDF 파일 링크
    };

    return (
        <Element name="archiving" className="archiving-section">
            <div className="archiving-header">
                {/* react-scroll Link 외부에서 처리 */}
                <ScrollLink to="archiving" smooth={true} duration={500} offset={-65}>
                    <FaPaperclip className="about-icon" />
                    <span>Archiving</span>
                </ScrollLink>
            </div>
            <div className="archiving-details">
                <RoundedBox
                    // icon={ <FaDesktop size={40} /> }
                    icons={[<FaDesktop size={40} />, <FaUser size={25} />]}
                    title="プロジェクト・参加した大会"
                    text1="「プロジェクト・参加した大会」閲覧"
                    text2="入社前のプロジェクトと参加した大会に対するパワーポイント"
                    pdfLink={project1PDF} // PDF 링크 전달 
                />
                {/* <RoundedBox
                    icons={<FaChalkboardTeacher size={40} />}
                    title="プロジェクト・参加した大会"
                    text1="「プロジェクト・参加した大会」閲覧"
                    text2="入社前のプロジェクトと参加した大会に対するパワーポイント"
                    pdfLink={project2PDF} // PDF 링크 전달 
                /> */}
            </div>
        </Element>
    );
};

export default ArchivingSection;
