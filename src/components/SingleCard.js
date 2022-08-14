import React from "react";

function SingleCard({cards, handleChoice}){
  const handleClick = () =>
  {
    handleChoice(cards)
  }
    return(
        <div className='card'>
        <div>
          <img className='front' src={cards.src} alt="card front" />
          <img 
          className='back' 
          src="/img/cover.png" 
          onClick={handleClick} 
          alt='card back'/>
        </div>
      </div>
    )
}
export default SingleCard