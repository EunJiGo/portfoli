import React from 'react';
import { Element, Link } from 'react-scroll';
import './header.css';
import './SkillsSection.css';
import { FaPaperclip, FaLaptopCode, FaDatabase, FaCloud, FaHtml5 } from 'react-icons/fa'; // 필요한 아이콘 임포트

import skillsData from './data/skills.json';  // JSON 파일 임포트

const SkillsSection = () => {
  const renderSkills = (skills, categoryIcon) => (
    <div className="skills-category">
      <div className="category-header">
        {categoryIcon}
        <span>{skills.category}</span>
      </div>
      <div className="skills-list">
        {skills.items.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            style={{
              backgroundColor: skill.backgroundColor,
              color: skill.textColor
            }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Element name="skills" className="skills-section">
      <div className="skills-header">
        <Link to="skills" smooth={true} duration={500} offset={-65}>
          <FaPaperclip className="about-icon" />
          <span>Skills</span>
        </Link>
      </div>

      <div className="skills-details">  
        {renderSkills({
          category: 'Language',
          items: skillsData.Language
        }, <FaLaptopCode className="skill-icon"/>)}
            
        {renderSkills({
          category: 'Frontend',
          items: skillsData.Frontend
        }, <FaHtml5 className="skill-icon"/>)}

        {renderSkills({
          category: 'Backend',
          items: skillsData.Backend
        }, <FaDatabase className="skill-icon"/>)}

        {renderSkills({
          category: 'DevOps',
          items: skillsData.DevOps
        }, <FaCloud className="skill-icon"/>)}

        {renderSkills({
          category: 'Markup\nLanguage',
          items: skillsData.DataFormatsMarkup
        }, <FaHtml5 className="skill-icon"/>)}
      </div>
    </Element>
  );
};

export default SkillsSection;
