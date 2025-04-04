import React from "react";
import "../styles/ContactsSection.css";
import pinterestIcon from '../assets/PI.png';
import instagramIcon from '../assets/INST.png';
import telegramIcon from '../assets/TG.png';

const ContactsSection = () => {
  return (
    <section className="contacts-section">
      <div className="contacts-content">
        <h2>Контакты</h2>
        <div className="button-and-socials">
          <a href="https://t.me/allrekli" target="_blank" rel="noopener noreferrer">
            <button className="contacts-cta-button">Обсудить проект</button>
          </a>
          <div className="contacts-social-links">
            <a href="https://ru.pinterest.com/sitronstudio/" target="_blank" rel="noopener noreferrer">
              <img src={pinterestIcon} alt="Pinterest" className="contacts-social-icon" />
            </a>
            <a href="https://www.instagram.com/sitron.design" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="contacts-social-icon" />
            </a>
            <a href="https://t.me/allrekli" target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram" className="contacts-social-icon" />
            </a>
          </div>
        </div>
        <div className="contacts-text-row">
          <span className="contacts-consultation-text">Первая консультация в подарок</span>
          <span className="contacts-social-text">Следите за мной в социальных сетях</span>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
