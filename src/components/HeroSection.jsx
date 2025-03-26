import React from 'react';
import '../styles/HeroSection.css';
import heroPhoto from '../assets/heroPhoto.png';
import rightArrow from '../assets/rightArrow.png';
import leftArrow from '../assets/leftArrow.png';
import pinterestIcon from '../assets/pinterest.png';
import instagramIcon from '../assets/instagram.png';
import telegramIcon from '../assets/telegram.png';
import whatsappIcon from '../assets/whatsapp.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="yellow-square">
            <img src={heroPhoto} alt="Hero" className="hero-photo" />
          </div>
        </div>
        <div className="hero-right">
          <div className="text-with-arrow">
            <img src={rightArrow} alt="Right Arrow" className="arrow right-arrow" />
            <h1 className="inline-text upper-hero-text">Помогаю</h1>
          </div>
          <h1>
            <span className="highlight-pink">компаниям</span> достигать
          </h1>
          <div className="text-with-arrow">
            <h1 className="inline-text">целей</h1>
            <img src={leftArrow} alt="Left Arrow" className="arrow left-arrow" />
          </div>
          <h1>
            через <span className="highlight-green">презентации</span>
          </h1>
          <div className='social'>
          <p className="social-text">
            Следите за мной в социальных сетях. Для заказа 
            <br />презентации вы можете написать в удобном мессенджере.
          </p>
          <div className="social-icons">
            <a href="https://ru.pinterest.com/sitronstudio/" target="_blank" rel="noopener noreferrer">
              <img src={pinterestIcon} alt="Pinterest" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/sitron.design" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://t.me/allrekli" target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram" className="social-icon" />
            </a>
            <a href="https://wa.me/79255480710" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
