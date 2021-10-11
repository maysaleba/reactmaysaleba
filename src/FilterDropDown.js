import React from "react";
import { Container, Dropdown, Row, Col } from "react-bootstrap";

function FilterDropDown({ clearFilter, clearSearchChange, onFilterChange, genreDropDown, onDropDownChange }) {
  return (
<Container fluid="md">
<Row xs="auto" className="justify-content-md-center">
    <Col md="auto col-style">
    <Dropdown className="m-2">
      <Dropdown.Toggle size="sm" id="dropdown-basic" className="dropdown-style">
        {genreDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu>
       <Dropdown.Item 
          href="#"
          onClick={() => {
			clearSearchChange();
            clearFilter();
            onDropDownChange("All genres");
          }}
        >
          All genres
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
    </Col>
     <Col xs="auto" md="auto col-style">
     <Dropdown className="m-2">
      <Dropdown.Toggle size="sm" id="dropdown-basic" className="dropdown-style">
        {genreDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu>
       <Dropdown.Item
          href="#"
          onClick={() => {
      clearSearchChange();
            clearFilter();
            onDropDownChange("All genres");
          }}
        >
          All genres
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
    </Col>
      <Col md="auto col-style">
     <Dropdown className="m-2">
      <Dropdown.Toggle size="sm" id="dropdown-basic" className="dropdown-style">
        {genreDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu>
       <Dropdown.Item
          href="#"
          onClick={() => {
      clearSearchChange();
            clearFilter();
            onDropDownChange("All genres");
          }}
        >
          All genres
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
    </Col>
</Row>
    </Container>
  );
}

export default FilterDropDown;