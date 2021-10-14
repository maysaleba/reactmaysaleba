import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { Card, Row } from "react-bootstrap";
import "./Cards.css";
import FilterDropDown from "./FilterDropDown";
import ReactPaginate from "react-paginate";
import { usePagination } from '@mui/material/Pagination';

const CardGroup = ({
  currPage,
  totalPage,
  handlePageClick,
  games,
  posts,
  loading,
  clearFilter,
  clearSearchChange,
  onFilterChange,
  genreDropDown,
  onDropDownChange,
}) => {
  console.log(games);



  if (typeof games === 'undefined') {
    return (
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
    );
  } else {
    return (
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
          {games.map((user, i) => {
            return (
              <Cards
                key={i}
                Score={games[i].SCORE}
                Title={games[i].Title}
                SaleEnds={games[i].SaleEnds}
                Genre={games[i].genre}
                Slug={games[i].Slug}
                Image={games[i].Image}
                SalePrice={games[i].SalePrice}
                Discount={games[i].PercentOff}
                URL={games[i].URL}
              />
            );
          })}
        </Row>
      </div>
    );
  }
};

export default CardGroup;
