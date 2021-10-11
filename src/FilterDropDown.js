import React from "react";
import { Dropdown } from "react-bootstrap";

function FilterDropDown({ clearFilter, clearSearchChange, onFilterChange, genreDropDown, onDropDownChange }) {
  return (
    <div className="m-3" style={{display: 'flex', justifyContent: 'center'}}>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {genreDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu>
       <Dropdown.Item
          href="#"
          onClick={() => {
			clearSearchChange();
            clearFilter();
            onDropDownChange("All genre");
          }}
        >
          All genre
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
 			clearSearchChange();
            onFilterChange("Action");
            onDropDownChange("Action");
          }}
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
          	clearSearchChange();
            onFilterChange("Adventure");
            onDropDownChange("Adventure");
          }}
        >
          Adventure
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
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
    </div>
  );
}

export default FilterDropDown;