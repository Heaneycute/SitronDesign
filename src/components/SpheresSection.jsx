import React from "react";
import "../styles/SpheresSection.css";

const SpheresSection = () => {
  const leftItems = [
    { text: "IT-компании" },
    { text: "E-learning", className: "item light-blue", },
    { text: "Бьюти-сфера" },
    { text: "Недвижимость и строительство" },
    { text: "Инвестиции и финансы" },
    { text: "Путешествия", className: "item yellow" },
    { text: "Рестораны и кафе" },
  ];

  const rightItems = [
    { text: "Тренинги" },
    { text: "Портфолио и резюме" },
    { text: "Свадебные организаторы", className: "item pink" },
    { text: "Учебные презентации" },
    { text: "Логистика", className: "item green" },
    { text: "Сельское хозяйство" },
    { text: "Стартапы" },
  ];

  return (
    <section className="spheres-section">
      <h2>Работаю с различными сферами:</h2>
      <div className="marquee">
        <div className="marquee-left">
          {leftItems.map((item, index) => (
            <span key={index} className={item.className}>
              {item.text}
            </span>
          ))}
          {leftItems.map((item, index) => (
            <span key={`duplicate-${index}`} className={item.className}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-right">
          {rightItems.map((item, index) => (
            <span key={index} className={item.className}>
              {item.text}
            </span>
          ))}
          {rightItems.map((item, index) => (
            <span key={`duplicate-${index}`} className={item.className}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpheresSection;
