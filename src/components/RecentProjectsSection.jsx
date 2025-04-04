import React from "react";
import "../styles/RecentProjectsSection.css";
import clubnika from "../assets/clubnika.png";
import astralGardens from "../assets/astralGardens.png";
import vladivostok from "../assets/vladivostok.png";

const RecentProjectsSection = () => {
  return (
    <section className="recent-projects-section">
      <h2>Недавние проекты:</h2>
      <div className="projects-gallery">
        <div className="image-container">
          <img src={clubnika} alt="Clubnika" className="project-image left" />
          <img src={astralGardens} alt="Astral Gardens" className="project-image center" />
          <img src={vladivostok} alt="Vladivostok" className="project-image right" />
          <div className="curved-line"></div>
        </div>
      </div>
      <div className="project-description">
        <h3>Презентация игры</h3>
        <p>
          Цель: выделиться на фоне конкурентов<br />и привлечь инвесторов к проекту
        </p>
        <div className="stats">
          <div className="stat">
            <span className="number fifteen">15</span>
            <span className="label">слайдов</span>
          </div>
          <div className="stat">
            <span className="number">7</span>
            <span className="label">дней</span>
          </div>
        </div>
        <p className="result">
          Результат: получено 7 000 000 рублей<br />на реализацию идеи
        </p>
        <button className="next-button">Перейти к другим работам</button>
      </div>
    </section>
  );
};

export default RecentProjectsSection;
