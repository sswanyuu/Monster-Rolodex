import React from "react";
import { Component } from "react";
//the css will be present on the entire app
import "./search-box.styles.css";
class SearchBox extends Component {
  render() {
    return (
      <input
        //the input has two className
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeHolder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
