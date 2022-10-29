import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { useTranslation } from "react-i18next";
import "../../i18n"
import './Header.scss';



const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  
};

const Header = () => {
  const { t } = useTranslation();

  return(
    <div className="app__header app__flex">
      
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text"> {t('welcome')} {t('portfolio')}</p>
              <h2>{t('MyName')}</h2>
              <p className="p-text">{t('portfolio2')}</p>
            </div>
          </div>

          <div className="tag1-cmp app__flex">
            <p className="p-text">{t('dev')}</p>
          </div>
          <div className="tag2-cmp app__flex">
            <p className="p-text">{t('About')}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.typescript, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
};

export default AppWrap(Header, 'home');