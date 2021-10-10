import React from 'react';
import Cards from './Cards';
import { Row } from 'react-bootstrap';
import Content from './Content'
import './Cards.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const CardGroupSearch = ({ games }) => {
	console.log(games)
	

	var sliced = games.slice(0,20);
	console.log(sliced[0])
	return(
					<div className="custom-container">
			  		<Row xs={2} md={4} className="g-2">
			  		{
			  			sliced.map((user,i) => 

							{
								return (
	              				<Cards key={i} 
								Score={sliced[i].SCORE}
								Title={sliced[i].Title}
								SaleEnds={sliced[i].SaleEnds}
								Genre={sliced[i].genre}
								Slug={sliced[i].Slug}
								Image={sliced[i].Image} />
								);
							}
						)
			  		}
					</Row>
					</div>
	);
}

export default CardGroupSearch;
