import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";



function ListingsContainer({ searchData }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/listings')
    .then(res => res.json())
    .then(data => setCardData(data))
  }, [])
  
  function handleRemove(id) {
    setCardData(cardData.filter( card => card.id !== id ))
    // fetch('http://localhost:3000/listings/' + id, {
    //   method: 'DELETE',
    //   })
    // .then(res => res.json()) // or res.json()
    // .then(res => console.log(res))
  }

  console.log(cardData)
  const cardsToDisplay = cardData.filter(card => card.description.toLowerCase().includes(searchData.toLowerCase()))

  const cards = cardsToDisplay.map((card) => <ListingCard key={card.id}
    description={card.description}
    image={card.image}
    location={card.location}
    id={card.id}
    handleRemove={handleRemove} />)
  
  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
