// src/components/SkillIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faPython, faReact, faWordpress, faJs, faPhp, faWebflow } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faCode, faBullhorn, faDatabase } from '@fortawesome/free-solid-svg-icons';

const SkillIcons = ({ skills }) => {
  const skillIcons = {
    Javascript: faJs,
    Github: faGithub,
    React: faReact,
    WordPress: faWordpress,
    SEO: faSearch,
    Database: faDatabase,
    Python: faPython,
    Webflow: faWebflow,
    PHP: faPhp,
    Coding: faCode,
    "Digital Marketing": faBullhorn,
  };

  return (
    <div className="flex   justify-center space-x-2 flex-wrap">
      {skills.map((skill, index) => (
        <div key={index} className="text-xl ">
          {skillIcons[skill] ? (
            <FontAwesomeIcon icon={skillIcons[skill]} />
          ) : (
            <span>{skill}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillIcons;
