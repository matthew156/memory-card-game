import React from "react";
import { useState } from "react";

function SingleCard(cards, id){
    return(
        <div className='card' key={id}>
        <div>
          <img className='front' src={cards.cards.src} alt="card front" />
          <img className='back' src="/img/cover.png" alt='card back'/>
        </div>
      </div>
    )
}
export default SingleCard