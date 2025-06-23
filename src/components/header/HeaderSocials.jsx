import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/Naveed-devcodes" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Naveed-Devcodes" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials
