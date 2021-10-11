import React from 'react';
import Cards from './Cards';
import { Row } from 'react-bootstrap';
import './Cards.css';


const CardGroup = ({ games, posts, loading }) => {

	

	var sliced = games.slice(0,20);

	console.log(games.length);
	console.log(sliced[0].SalePrice);
	if (games.length === 0)
	{
		return(
					<div className="custom-container">
			  		<Row xs={2} md={4} className="g-2">
			  		<p className="m-3">No Games Found!</p>
			  		</Row>
			  		</div>
			) 


		
	}
	else {

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
								Image={sliced[i].Image} 
								SalePrice={sliced[i].SalePrice}
								Discount={sliced[i].PercentOff}
								URL={sliced[i].URL}
								/>
								);
							}

						)
			  		}
					</Row>
					</div>
	);
	}
}

export default CardGroup;
