import { Component } from "react";
import React from "react";
import "./card-list.styles.css";
import Card from "../card/card";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(this.props);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          //don't forget the "return"
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
//allow other file to import
export default CardList;
