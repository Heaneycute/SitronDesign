import React from "react";
import { Link } from "react-router-dom";
import "../styles/ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="content">
        <div className="left-column">
          <h2>
            О моем опыте <br /> в цифрах
          </h2>
          <div className="row">
            <div className="block block-1"></div>
            <div className="block block-8">
              <span>
                <span className="number">3</span> года в дизайне презентаций
              </span>
            </div>
          </div>
          <div className="row">
            <div className="block block-2">
              <span>
                <span className="number">3550+</span> слайдов
              </span>
            </div>
            <div className="block block-3"></div>
          </div>
        </div>
        <div className="right-column">
          <div className="block block-4">
            <span>
              <span className="number">170+</span> контрактов заключено, после
              отправки моих презентаций
            </span>
          </div>
          <div className="row">
            <div className="block block-5">
              <span>
                <span className="number">320+</span> завершенных проектов
              </span>
            </div>
            <div className="block block-6"></div>
            <div className="block block-7"></div>
          </div>
          <div className="row">
            <div className="block block-9"></div>
            <div className="sub-column">
              <div className="row">
                <div className="block block-10"></div>
              </div>
              <div className="row">
                <div className="block block-11"></div>
                <div className="block block-12">
                  <span>
                    <span className="number">10 000 000₽</span> инвестиций
                    привлечено
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="block block-13"></div>
                <Link to="/about" className="block block-14">
                  Узнать обо мне больше
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
