import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box";
class App extends Component {
  constructor() {
    super();
    //this state object should be always a json object
    //set the initial value
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }
  componentDidMount() {
    //a promise is asynchonous in javaScript
    //get the data from this url
    console.log("componentdidmount!");
    fetch("https://jsonplaceholder.typicode.com/users")
      //tranlate the data into json type
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }
  //just initialized once (optimized method)
  handleSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  //what to show
  render() {
    //using destructuring
    const { monsters, searchField } = this.state;
    const { handleSearchChange } = this;
    console.log("render");
    //generate new array for the filter
    //inmutabability
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="title">Get A Partner of Your Life</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={handleSearchChange}
          placeHolder="Search monsters..."
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
