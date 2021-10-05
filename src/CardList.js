import React from 'react';
import Cards from './Cards';
import { Row } from 'react-bootstrap';
import './Cards.css';

const CardList = ({ games }) => {
	// console.log(games)
	

	var sliced = games.slice(0,20);
	console.log(sliced);
	
	return(



  		<div className="custom-container">
  		<Row xs={2} md={4} className="g-2">
  		{
  			sliced.map((user,i) => 

	{

		return (<Cards key={i} 
		Score={sliced[i].SCORE}
		Title={sliced[i].Title}
		SaleEnds={sliced[i].SaleEnds} 
		Image={sliced[i].Image} />);
	})
  		}
		</Row>
		</div>
		 


		
		);
}

export default CardList;