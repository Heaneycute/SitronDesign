import React from "react";
import "../styles/StrengthsSection.css";
import rightArrow from "../assets/rightArrow.png";

const StrengthsSection = () => {
  return (
    <section className="strengths-section">
      <h2>Мои сильные стороны:</h2>
      <div className="strengths-content">
        <div className="strengths-row">
          <div className="strengths-block with-arrow">
            <img
              src={rightArrow}
              alt="Right Arrow"
              className="strengths-arrow"
            />
            <div className="text-block">
              <h3 className="subheading">Тандем креатива и смыслов</h3>
              <p>
                Кто-то топит за смыслы, а кто-то за красивые <br />
                слайды. Я предлагаю сочетать их и делать <br />
                запоминающиеся слайды с понятной логикой.
              </p>
            </div>
          </div>
        </div>
        <div className="strengths-row">
          <div className="strengths-block">
            <div className="text-block">
              <h3 className="subheading">Тандем креатива и смыслов</h3>
              <p>
                Кто-то топит за смыслы, а кто-то за красивые <br />
                слайды. Я предлагаю сочетать их и делать <br />
                запоминающиеся слайды с понятной логикой.
              </p>
            </div>
          </div>
          <div className="strengths-block">
            <div className="text-block">
              <h3 className="subheading">Тандем креатива и смыслов</h3>
              <p>
                Кто-то топит за смыслы, а кто-то за красивые <br />
                слайды. Я предлагаю сочетать их и делать <br />
                запоминающиеся слайды с понятной логикой.
              </p>
            </div>
          </div>
        </div>
        <div className="strengths-row">
          <div className="strengths-block">
            <div className="text-block">
              <h3 className="subheading">Тандем креатива и смыслов</h3>
              <p>
                Кто-то топит за смыслы, а кто-то за красивые <br />
                слайды. Я предлагаю сочетать их и делать <br />
                запоминающиеся слайды с понятной логикой.
              </p>
            </div>
          </div>
          <div className="strengths-block">
            <div className="text-block">
              <h3 className="subheading">Тандем креатива и смыслов</h3>
              <p>
                Кто-то топит за смыслы, а кто-то за красивые <br />
                слайды. Я предлагаю сочетать их и делать <br />
                запоминающиеся слайды с понятной логикой.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
