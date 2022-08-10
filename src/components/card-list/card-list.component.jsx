import React from "react";
import "./card-list.styles.css";
import Card from "../card/card";
const CardList = ({ monsters }) => {
  console.log({ monsters });
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        //don't forget the "return"
        return <Card monster={monster} />;
      })}
    </div>
  );
};

//allow other file to import
export default CardList;
