import React, { useState } from 'react'
import { Dropdown } from  'react-bootstrap';
  

 
function FilterDropDown ({onFilterChange}) {

	const handleSelect=(e)=>{
    console.log(e);
  }

	 const onDropDownChange = (dropDownValue) => setGenreDropDown(dropDownValue);
	 	const [genreDropDown, setGenreDropDown] = useState('')


	return (
	<Dropdown className="text-center m-3 p-auto">
  	<Dropdown.Toggle variant="success" id="dropdown-basic">
    	{genreDropDown}
  	</Dropdown.Toggle>

  	<Dropdown.Menu>
    	<Dropdown.Item href="#/Genre/Action" onClick={() => { onFilterChange("Action"); onDropDownChange("Action");}}>Action</Dropdown.Item>
    	<Dropdown.Item href="#/Genre/Adventure" onClick={() => { onFilterChange("Adventure"); onDropDownChange("Adventure");}}>Adventure</Dropdown.Item>
    	<Dropdown.Item href="#/Genre/Role-Playing" onClick={() => { onFilterChange("Role-Playing"); onDropDownChange("Role-Playing");}}>Role-Playing</Dropdown.Item>
  	</Dropdown.Menu>
	</Dropdown>
		)
}


export default FilterDropDown