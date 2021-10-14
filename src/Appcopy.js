import React, { useEffect, useMemo, useState } from "react";
import Pagination from '@mui/material/Pagination';
import usePagination from "./usePagination.js";
import reviews from "./csvjson.json";
import Navi from "./Navi";
import CardGroup from "./CardGroup2";
import "./App.css";
import { HashRouter as Router, Route, useLocation } from "react-router-dom";
import Content from "./Content"






// console.log(gamesxx)

export default function Main() {

function sortJson(element, prop, propType, asc) {
  switch (propType) {
    case "int":
      element = element.sort(function (a, b) {
        if (asc) {
          return (parseInt(a[prop]) > parseInt(b[prop])) ? 1 : ((parseInt(a[prop]) < parseInt(b[prop])) ? -1 : 0);
        } else {
          return (parseInt(b[prop]) > parseInt(a[prop])) ? 1 : ((parseInt(b[prop]) < parseInt(a[prop])) ? -1 : 0);
        }
      });
      break;
    default:
      element = element.sort(function (a, b) {
        if (asc) {
          return (a[prop].toLowerCase() > b[prop].toLowerCase()) ? 1 : ((a[prop].toLowerCase() < b[prop].toLowerCase()) ? -1 : 0);
        } else {
          return (b[prop].toLowerCase() > a[prop].toLowerCase()) ? 1 : ((b[prop].toLowerCase() < a[prop].toLowerCase()) ? -1 : 0);
        }
      });
  }
}


    function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



  const [filterField, setFilterField] = useState("");
  const [genreDropDown, setGenreDropDown] = useState("All Genres");

  const [latestField, setLatestField] = useState(reviews);
  const [latestDropDown, setLatestDropDown] = useState("Top Rated");

  const onLatestDrop = (dropDownValue) => setLatestDropDown(dropDownValue);
  const onDropDownChange = (dropDownValue) => setGenreDropDown(dropDownValue);


  const clearFilter = (event) => {
    setFilterField("");
  }

  const onLatestChange = (filterLatest) => {

    if (filterLatest == "Top Rated")
    {
      sortJson(reviews , "SCORE", "string", false);
    }
    if (filterLatest === "New Discounts")
    {
      sortJson(reviews , "SaleStarted", "string", false);

    } 
    if (filterLatest === "Price ↓")
    {
      sortJson(reviews , "SalePrice", "int", false);

    }
    if (filterLatest === "Price ↑")
    {
      sortJson(reviews , "SalePrice", "int", true);

    }
    else {}
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
      latestField.filter((review) => {
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
                    onLatestDrop = {onLatestDrop}
                    onLatestChange = {onLatestChange}
                    latestDropDown={latestDropDown}
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
