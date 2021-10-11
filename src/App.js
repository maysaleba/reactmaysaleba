import React, { useState } from "react";
import Navi from "./Navi";
import CardGroup from "./CardGroup";
import SearchBox from "./SearchBox";
import "./App.css";
import games from "./csvjson.json";
import Content from "./Content";
import FilterDropDown from "./FilterDropDown";
// import Search from './search';
import { HashRouter as Router, Route, useLocation } from "react-router-dom";

function App() {
  const [searchfield, setSearchfield] = useState("");
  const [filterField, setFilterField] = useState("");

  const [genreDropDown, setGenreDropDown] = useState("All genre");
  const onDropDownChange = (dropDownValue) => setGenreDropDown(dropDownValue);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
    // event.preventDefault();
  };

  const clearSearchChange = (event) => {
    setSearchfield("");
  }

  const clearFilter = (event) => {
    setFilterField("");
  }

  const onFilterChange = (filterGenre) => setFilterField(filterGenre);




  const filteredGames = games.filter((game) => {
    return (
      game.Title.toLowerCase().includes(searchfield.toLowerCase()) &&
      game.genre.toLowerCase().includes(filterField.toLowerCase())
    );
  });

  return (
    <Router>
      <Route
        path="/"
        exact
        render={(props) => (
          <div>
            <Navi />
            <SearchBox 
            searchfield={searchfield}
              onSearchChange={onSearchChange} 
              onFilterChange={onFilterChange}
              genreDropDown={genreDropDown}
              onDropDownChange={onDropDownChange}
            />
            <FilterDropDown
            clearFilter={clearFilter}
              clearSearchChange={clearSearchChange}
              onFilterChange={onFilterChange}
              genreDropDown={genreDropDown}
              onDropDownChange={onDropDownChange}
            />
            <CardGroup games={filteredGames} />
          </div>
        )}
      />
      <Route path="/games/:games" component={Content} />

      {/*{console.log("/" + `${filterField}`)}*/}
   {/*   <Route
        path={"/Genre/" + `${filterField}`}
        render={(props) => (
          <div>
            <Navi />
             <SearchBox 
             searchfield={searchfield}
              onSearchChange={onSearchChange} 
              onFilterChange={onFilterChange}
              genreDropDown={genreDropDown}
              onDropDownChange={onDropDownChange}
            />
            <FilterDropDown
            clearFilter={clearFilter}
              clearSearchChange={clearSearchChange}
              onFilterChange={onFilterChange}
              genreDropDown={genreDropDown}
              onDropDownChange={onDropDownChange}
            />
            <CardGroup games={filteredGames} />
          </div>
        )}
      />*/}
    </Router>
  );
}

export default App;