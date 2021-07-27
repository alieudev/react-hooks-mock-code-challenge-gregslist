import React, { useState } from "react";

function ListingCard({description, image, location, handleRemove, id}) {
  const [isClicked, setClick] = useState(false)
  
  function handleClick(){
    setClick(!isClicked)
  }
  
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className ={isClicked ? "emoji-button favorite active" : "emoji-button favorite"} onClick={handleClick}>{isClicked? "★" : "☆"}</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleRemove(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
