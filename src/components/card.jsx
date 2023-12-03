import React from "react";

function Card(props) {
  console.log(props.character);
  return (
    <div className="card" onClick={() => props.onClick(props.character)}>
      <img className="card-image" src={props.character?.image} alt="" />
    </div>
  );
}

export default Card;
