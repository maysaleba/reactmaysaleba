import React from 'react';
import Cards from './Cards';
import { Card, Row } from 'react-bootstrap';
import './Cards.css';
import FilterDropDown from './FilterDropDown'

const CardGroup = ({ games, posts, loading, clearFilter, clearSearchChange, onFilterChange, genreDropDown, onDropDownChange }) => {

	

	var sliced = games.slice(0,20);
	if (games.length === 0)
	{
		return(

					<div className="custom-container">
					<div className="card-header-custom">
						<FilterDropDown
				              clearFilter={clearFilter}
				              clearSearchChange={clearSearchChange}
				              onFilterChange={onFilterChange}
				              genreDropDown={genreDropDown}
				              onDropDownChange={onDropDownChange}
				        />
					</div>
			  		<Row xs={2} md={4} className="g-2">
			  		<p className="m-3">No Games Found!</p>
			  		</Row>
			  		</div>
			) 


		
	}
	else {

	return(

					<div className="custom-container">
					<div className="card-header-custom">
						<FilterDropDown
				              clearFilter={clearFilter}
				              clearSearchChange={clearSearchChange}
				              onFilterChange={onFilterChange}
				              genreDropDown={genreDropDown}
				              onDropDownChange={onDropDownChange}
				        />
					</div>
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
