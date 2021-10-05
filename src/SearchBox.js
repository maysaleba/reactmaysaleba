import React from 'react';
import './Cards.css';
import { FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, FormControl } from 'react-bootstrap';



const SearchBox = ({searchChange}) => {
	return (

  // <InputGroup className="m-3 mx-auto">
  //   <FormControl
  //     placeholder="Search Title, Publisher in All Games..."
  //   />
  //   <InputGroup.Text type="submit" id="basic-addon2"><FaSearch /></InputGroup.Text>
  // </InputGroup>

		<div className="text-center m-3 p-auto">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"/>
		<input className="searchbox"
		type='search' 
		placeholder="&#xF002;  Search Title, Publisher in All Games..."
		onChange={searchChange}
		/>
		
		</div>
		
		)
}

export default SearchBox;