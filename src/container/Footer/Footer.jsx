import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { FaFileDownload } from "react-icons/fa";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "../../i18n"
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text-w">{t("TakeA")} <span>{t("Coffee")} </span>{t("&")} <span>{t("Chat")}</span> {t("WithMe")}</h2>
      <div className="footer_container">
        <div className="cv">
          <h3>{t("Resumé")}</h3>
          <p className="p-text-w">{t("DownloadText")}</p>
          {/* eslint-disable-next-line */}
          <a 
          href="https://documentcloud.wondershare.com/clientShare/review/bpcFVoayn8Msp0rtjRcN4d4TEmhBGtE5NJ-SLCRhVxHqMG4UiHbsDxnCwGQjnzYJq5dNDlS7A4-oJrjJTd2_3g"
          target="_blank"
          >
            <FaFileDownload style={{ marginRight: '5px'}} />
            {t("PortugueseV")}
          </a>
          {/* eslint-disable-next-line */}
          <a 
          href="https://documentcloud.wondershare.com/clientShare/review/bpcFVoayn8Msp0rtjRcN4dlmNlBXEypALcNsvS_IeM0-7t7BpppK8tEe2hGuSA8N-NZhyBp5-T19f0_HFWKjKw" 
          target="_blank"
          >
            <FaFileDownload style={{ marginRight: '5px'}}/>
            {t("EnglishV")}
          </a>
        </div>

        <div className="app__footer-cards">
          <div className="app__footer-card ">
              <AiOutlineMail />

            <a href="mailto:brian_saka@hotmail.com" className="p-text-w">
              brian_saka@hotmail.com
            </a>
          </div>
          <div className="app__footer-card">
              <AiOutlineWhatsApp />

          {/* eslint-disable-next-line */}
            <a 
            href="https://wa.me/5511930011359" className="p-text-w" 
            target="_blank"
            >+55 (11) 93001-1359</a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input className="p-text" type="text" placeholder={t("YourName")} name="username" value={username} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder={t("YourEmail")} name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder={t("YourMessage")}
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? t("Send") : t("Sending")}</button>
          </div>
        ) : (
          <div>
            <h3 className="head-text-w">
              {t("ThankYou")}
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__tertiarybg',
);