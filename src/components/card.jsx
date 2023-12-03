import React from "react";

function Card(props) {
  console.log(props.characters);
  return (
    <div className="card" onClick={() => props.onClick(props.id)}>
      <img
        className="card-image"
        src={props.characters[props.id]?.image}
        alt=""
      />
    </div>
  );
}

export default Card;
