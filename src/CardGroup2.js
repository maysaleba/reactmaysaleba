import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";
import "./Cards.css";
import FilterDropDown from "./FilterDropDown";
import Pagination from '@mui/material/Pagination';

const CardGroup = ({  
  search, 
  page, 
  setSearch, 
  filtered, 
  filteredReviews, 
  pageData, 
  maxPage, 
  jumpPage,
  clearFilter,
  clearSearchChange,
  onFilterChange,
  genreDropDown,
  onDropDownChange,
}) => {

  return (
    <div>
          <div className="text-center m-3 p-auto">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"/>
    <input className="searchbox"
    value={search}
    type='search' 
    placeholder="&#xF002;  Search Title, Publisher in All Games..."
    onChange= {(e) => {
            setSearch(e.target.value);
            
          }}
    />
    </div>
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
            {filteredReviews.length > 0 ? (
              <>        
                <Row xs={2} md={4} className="g-2">
                  {pageData().map((review, key) => (
                    <div key={key}>
                                  <Cards
                                          key={review.Title}
                                          Score={review.SCORE}
                                          Title={review.Title}
                                          SaleEnds={review.SaleEnds}
                                          Genre={review.genre}
                                          Slug={review.Slug}
                                          Image={review.Image}
                                          SalePrice={review.SalePrice}
                                          Discount={review.PercentOff}
                                          URL={review.URL}
                                  />
                    </div>
                ))}
                </Row>
              </>
            ) : (
                  <div style={{ textAlign: "center" }}>
                      <h4>No search results.</h4>
                  </div>
                )
          }
          <p/>
             <Pagination className="pagination"
                  color="secondary"
                  size="small"
                  count={maxPage}
                  page={page}
                  onChange={(e, p) => jumpPage(p)}
                />

                  </div>


                </div>
    )
};

export default CardGroup;
