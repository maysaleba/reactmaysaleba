import React, { useEffect, useMemo, useState } from "react";
import Pagination from '@mui/material/Pagination';
import usePagination from "./usePagination.js";
import reviews from "./csvjson.json";
import Navi from "./Navi";
import CardGroup from "./CardGroup2";
import "./App.css";
import { HashRouter as Router, Route, useLocation } from "react-router-dom";
import Content from "./Content"


export default function Main() {
    function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  const [filterField, setFilterField] = useState("");
    const [genreDropDown, setGenreDropDown] = useState("All genres");
  const onDropDownChange = (dropDownValue) => setGenreDropDown(dropDownValue);

  const clearFilter = (event) => {
    setFilterField("");
  }

  const onFilterChange = (filterGenre) => {
    setFilterField(filterGenre);
  };



  const [search, setSearch] = useState("");

      const clearSearchChange = (event) => {
    setSearch("");
  }


  // let filteredReviews = useMemo(
  //   () =>
  //     reviews.filter((review) => {
  //       return !search || review.Title.toLowerCase().includes(search.toLowerCase()) &&
  //                         review.genre.toLowerCase().includes(filterField.toLowerCase())
        
  //     }),
  //   [search]
  // );

  // console.log(filteredReviews)

  // let { pageData, page, maxPage, jumpPage } = usePagination(filteredReviews, 20);

  // useEffect(() => {
  //   if (search) jumpPage(1);
  // }, [search, jumpPage]);


    let filteredReviews = useMemo(
    () =>
      reviews.filter((review) => {
        return (review.Title.toLowerCase().includes(search.toLowerCase()) &&
      review.genre.toLowerCase().includes(filterField.toLowerCase()))
        
      })
  );

  console.log(filteredReviews)

  let { pageData, page, maxPage, jumpPage } = usePagination(filteredReviews, 20);

  useEffect(() => {
    if (search || filterField) jumpPage(1);
  }, [search, filterField, jumpPage]);


  return (
    <Router>
     <Route
        path="/"
        exact
        render={(props) => (
            <div>
              <Navi />
                    <CardGroup 
                    clearFilter={clearFilter}
                    genreDropDown={genreDropDown}
                    onDropDownChange={onDropDownChange}
                    onFilterChange={onFilterChange}
                    clearSearchChange={clearSearchChange} 
                    search={search} 
                    page={page} 
                    setSearch={setSearch} 
                    jumpPage={jumpPage} 
                    filteredReviews={filteredReviews} 
                    pageData={pageData} 
                    maxPage={maxPage}/>
            </div>

      )} />
        <Route path="/games/:games" component={Content} />
         <ScrollToTop />
      </Router>

  );
}
