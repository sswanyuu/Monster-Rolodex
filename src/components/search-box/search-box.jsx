import React from "react";
//the css will be present on the entire app
import "./search-box.styles.css";
const SearchBox = ({ className, placeHolder, onChangeHandler }) => {
  return (
    <input
      //the input has two className
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
