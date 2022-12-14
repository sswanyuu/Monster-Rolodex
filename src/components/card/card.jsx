import React from "react";
import "./card.styles.css";
//{monster} = props
const Card = ({ monster }) => {
  //encapsulate in one div
  //destructuring
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={name}
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
