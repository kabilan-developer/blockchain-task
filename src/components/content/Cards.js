import React from "react";
import { CardsUtil } from "../../Helpers/CardsUtil";
import "./Cards.css";
import heart from '../../assets/heart.svg'
import buybutton from '../../assets/buybutton.png'

function Cards() {
  return (
    <div className="row cards-container">
      {CardsUtil.map((card) => {
        return (
          <div className="col-md-3 card">
              <div className="d-flex justify-content-around">
                <small>Alien Bot World</small>
                 <small> . . .</small>
              </div>
              <div className="d-flex justify-content-around mt-2">
                <img src={card.avatar} alt="test" height={30} width={30}/>
                 <small>{card.avatarName}</small>
                 <small>{card.likes}</small>
                 <img src={heart} alt="test" height={20} width={20}/>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <img src={card.img} alt="bitmap" className="bitmap" height={180} width={180}/>
              </div>
              <div className="d-flex justify-content-around mt-2">
                <span>price</span>
                <div className='buy-now'>
                <img src={buybutton} alt="buy"/>
                </div>
              </div>
              <span>{card.price}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
