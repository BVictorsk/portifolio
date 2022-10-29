import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { LngSwitcher } from "../i18nComponent/LngSwitcher";
import { images } from '../../constants';
import './Navbar.scss';
import "../../i18n"


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { t } = useTranslation();

  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <a href="#skills">{t('skills')}</a>
        </li>
        <li className="app__flex p-text">
          <a href="#work">{t('work')}</a>
        </li>
        <li className="app__flex p-text">
          <a href="#contact">{t('contact')}</a>
        </li>
      </ul>


      <LngSwitcher />

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['skills', 'work', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              {['skills', 'trabalhos', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;