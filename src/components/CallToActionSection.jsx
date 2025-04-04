import React from "react";
import "../styles/CallToActionSection.css";
import blackLeftArrow from "../assets/blackLeftArrow.png";
import secondHeroPhoto from "../assets/secondHeroPhoto.png";

const CallToActionSection = () => {
  return (
    <section className="call-to-action-section">
      <div className="content">
        <div className="call-text-block">
          <div className="title-with-arrow">
            <h2>Нравятся работы?</h2>
            <img
              src={blackLeftArrow}
              alt="Black Left Arrow"
              className="call-arrow"
            />
          </div>
          <p>
            Вложу душу в ваш проект и сделаю
            <br />
            такую же классную презентацию для него.
          </p>
          <div className="button-with-text">
            <a
              href="https://t.me/allrekli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cta-button">Обсудить проект</button>
            </a>
            <span className="consultation-text">
              Первая консультация бесплатно
            </span>
          </div>
        </div>
        <img src={secondHeroPhoto} alt="Second Hero" className="second-hero-photo" />
      </div>
    </section>
  );
};

export default CallToActionSection;
