import React from 'react';
import './Cards.css';
import { FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const SearchBox = ({searchChange}) => {
// console.log(searchQuery);
 const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchChange}`)
        e.preventDefault()
    };

	return (



	// <Form>
 //  <InputGroup className="m-3 mx-auto" >
 //    <FormControl id="header-search" action="/" method="GET" name="s" autoComplete="off"  onSubmit={onSubmit} placeholder="Search Title, Publisher in All Games..."
 //    />
 //       <button type="submit">Search</button>
 //  </InputGroup>
 //  </Form>


   // <form className="text-center m-3 p-auto" action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
   //      <label htmlFor="header-search">
   //          <span className="visually-hidden">Search blog posts</span>
   //      </label>

   //     {/* value={searchQuery}
   //              onInput={(e) => setSearchQuery(e.target.value)}*/}
   //              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"/>
   //      <input className="searchbox"
   //         // value={searchQuery}
   //              type="text"
   //               // onInput={(e) => searchChange(e.target.value)}
   //              id="header-search"
   //              placeholder="&#xF002;  Search Title, Publisher in All Games..."
   //              name="s" 
   //      />
   //      <button type="submit">Search</button>
   //  </form>


  // <form className="text-center m-3 p-auto" action="/" method="get" onSubmit={searchChange}>
  //       <label htmlFor="header-search">
  //           <span className="visually-hidden">Search blog posts</span>
  //       </label>
  //       <input
  //           type="text"
  //           id="header-search"
  //           placeholder="Search blog posts"
  //           name="s" 
  //           // onChange = {searchChange}
  //       />
  //       <button type="submit">Search</button>
  //   </form>



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