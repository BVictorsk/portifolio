import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import './SocialMedia.scss'

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://www.instagram.com/bvictor__/" target="_blank">
      <BsInstagram />
    </a>
    </div>
    <div>
      <a href="https://github.com/BVictorsk" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/brian-victor-d-97970bba/" target="_blank">
        <FaLinkedinIn />
      </a>
    </div>
  </div>
);

export default SocialMedia;