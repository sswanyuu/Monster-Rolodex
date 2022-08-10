import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box";
const App = () => {
  const [searchField, setSearchField] = useState("");
  console.log(searchField);
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  //a promise is asynchonous in javaScript
  //get the data from this url
  //fetch from foreign API
  useEffect(() => {
    console.log("Effect is triggered");
    fetch("https://jsonplaceholder.typicode.com/users")
      //tranlate the data into json type
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilterMonsters);
  }, [monsters, searchField]);
  //     //generate new array for the filter
  //     //inmutabability

  const handleSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    //when it detect that the stated value change, render.
    setSearchField(searchFieldString);
  };
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
  //class App extends Component {
  //   constructor() {
  //     super();
  //     //this state object should be always a json object
  //     //set the initial value
  //     this.state = {
  //       monsters: [],
  //       searchField: "",
  //     };
  //     console.log("constructor");
  //   }

  //   }
  //   //just initialized once (optimized method)

  //   //what to show
  //   render() {
  //     //using destructuring
  //
  //
  //   }
  // }
};
export default App;
