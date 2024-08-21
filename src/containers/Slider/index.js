import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  // Initialise byDateDesc de manière sécurisée
  const byDateDesc = data?.focus?.length
    ? data.focus.sort((evtA, evtB) =>
      new Date(evtA.date) - new Date(evtB.date) // Tri croissant
      )
    :[];
    
    const nextCard = () => {
        setIndex((prevIndex) => (prevIndex + 1) % byDateDesc.length);
    };

  useEffect(() => {
      if (byDateDesc.length > 0) {
        const intervalId = setInterval(nextCard, 5000);
        return () => clearInterval(intervalId);
      }
      return undefined;
   }, [byDateDesc.length]);

  return (
    <div className="SlideCardList">
      {byDateDesc.map((event, idx) => (
        <React.Fragment key={event.title}>
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            {event.cover && <img src={event.cover} alt={event.title} />}
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={event.id}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  onChange={() => setIndex(radioIdx)} // Modification de l'index lorsqu'un bouton radio est sélectionné
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Slider;
