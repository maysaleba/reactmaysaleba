import React from "react";
import { Dropdown } from "react-bootstrap";

function FilterDropDown({ clearSearchChange, onFilterChange, genreDropDown, onDropDownChange }) {
  const handleSelect = (e) => {
    console.log(e);
  };

  return (
    <Dropdown className="text-center m-3 p-auto">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {genreDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu>
       <Dropdown.Item
          href="#/Genre/All"
          onClick={() => {
			clearSearchChange();
            onFilterChange("");
            onDropDownChange("All genre");
          }}
        >
          All genre
        </Dropdown.Item>
        <Dropdown.Item
          href="#/Genre/Action"
          onClick={() => {
 			clearSearchChange();
            onFilterChange("Action");
            onDropDownChange("Action");
          }}
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item
          href="#/Genre/Adventure"
          onClick={() => {
          	clearSearchChange();
            onFilterChange("Adventure");
            onDropDownChange("Adventure");
          }}
        >
          Adventure
        </Dropdown.Item>
        <Dropdown.Item
          href="#/Genre/Role-Playing"
          onClick={() => {
          	clearSearchChange();
            onFilterChange("Role-Playing");
            onDropDownChange("Role-Playing");
          }}
        >
          Role-Playing
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterDropDown;