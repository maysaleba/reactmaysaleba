import React, { useEffect, useMemo, useState } from "react";
import usePagination from "./usePagination.js";
import reviewssw from "./csvjson.json";
import reviewsps from "./csvjsonus.json";
import CardGroup from "./CardGroup2";
import "./App.css";
import { HashRouter as Router, Route, useLocation } from "react-router-dom";
import Content from "./Content";
import SearchAppBar from "./SearchAppBar";
import {styled, createGlobalStyle} from "styled-components";




// console.log(reviews);
console.log(reviewssw);
console.log(reviewsps);
export default function Main() {
  function sortJson(element, prop, propType, asc) {
    switch (propType) {
      case "int":
        element = element.sort(function (a, b) {
          if (asc) {
            return parseInt(a[prop]) > parseInt(b[prop])
              ? 1
              : parseInt(a[prop]) < parseInt(b[prop])
              ? -1
              : 0;
          } else {
            return parseInt(b[prop]) > parseInt(a[prop])
              ? 1
              : parseInt(b[prop]) < parseInt(a[prop])
              ? -1
              : 0;
          }
        });
        break;
      default:
        element = element.sort(function (a, b) {
          if (asc) {
            return a[prop].toLowerCase() > b[prop].toLowerCase()
              ? 1
              : a[prop].toLowerCase() < b[prop].toLowerCase()
              ? -1
              : 0;
          } else {
            return b[prop].toLowerCase() > a[prop].toLowerCase()
              ? 1
              : b[prop].toLowerCase() < a[prop].toLowerCase()
              ? -1
              : 0;
          }
        });
    }
  }

  function ScrollToTop() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior: 'instant'});
  }, [pathname]);


    return null;
  }

  const [platformField, setPlatformField] = useState("");
  const [filterField, setFilterField] = useState("");
  const [genreDropDown, setGenreDropDown] = useState("All Genres");
  const [platformDropDown, setPlatformDropDown] = useState("All Platforms")
  const [latestField, setLatestField] = useState([]);
  const [latestDropDown, setLatestDropDown] = useState("New Discounts");

  useEffect(() => {
    const reviews = reviewssw.concat(reviewsps);
    sortJson(reviews, "SaleStarted", "string", false);
    setLatestField(reviews);
  }, []);



  const onPlatformDrop = (dropDownValue) => setPlatformDropDown(dropDownValue);
  const onLatestDrop = (dropDownValue) => setLatestDropDown(dropDownValue);
  const onDropDownChange = (dropDownValue) => setGenreDropDown(dropDownValue);

  const clearFilter = (event) => {
    setFilterField("");
    setPlatformField("");
  };

  const clearGenre = (event) => {
    setFilterField("");
  }

  const onLatestChange = (filterLatest) => {
    if (filterLatest === "Top Rated") {
      sortJson(latestField, "SCORE", "string", false);
    }
    if (filterLatest === "New Discounts") {
      sortJson(latestField, "SCORE", "string", false);
      sortJson(latestField, "SaleStarted", "string", false);
    }
    if (filterLatest === "Latest Release") {
      sortJson(latestField, "SCORE", "string", false);
      sortJson(latestField, "ReleaseDate", "string", false);
    }
    if (filterLatest === "Price ↓") {
      sortJson(latestField, "SCORE", "string", false);
      sortJson(latestField, "SalePrice", "int", false);
    }
    if (filterLatest === "Price ↑") {
      sortJson(latestField, "SCORE", "string", false);
      sortJson(latestField, "SalePrice", "int", true);
    } else {
    }
  };

  const onPlatformChange = (filterPlatform) => {
    setPlatformField(filterPlatform)
  }

  const onFilterChange = (filterGenre) => {
    setFilterField(filterGenre);
  };

  const [search, setSearch] = useState("");

  const clearSearchChange = (event) => {
    setSearch("");
  };

  let filteredReviews = useMemo(() =>
    latestField.filter((review) => {
      return (
        review.Title.toLowerCase().includes(search.toLowerCase()) &&
        review.genre.toLowerCase().includes(filterField.toLowerCase()) &&
        review.platform.toLowerCase().includes(platformField.toLowerCase())
        );
    })
  );

  console.log(reviewssw[0].Image);

  let { pageData, page, maxPage, jumpPage } = usePagination(
    filteredReviews,
    24
  );

  useEffect(() => {
    if (search || filterField || latestDropDown || platformField) jumpPage(1);
  }, [search, filterField, latestDropDown, platformField, jumpPage]);



// const GlobalStyle = createGlobalStyle`
//   body {

//      background: linear-gradient(black, white);
    
//        background-image: url(${reviewssw[0].Image});
//        background-position: center center;
//         background-repeat: no-repeat;
//         background-attachment: fixed;
//         background-size: cover;
//   }
// `


  return (
    <Router>
    {/*<GlobalStyle />*/}
      <Route
        path="/"
        exact
        render={(props) => (
          <div>
            <SearchAppBar search={search} setSearch={setSearch} clearGenre = {clearGenre} onDropDownChange={onDropDownChange}/>
            <CardGroup
              onPlatformDrop = {onPlatformDrop}
              onPlatformChange = {onPlatformChange}
              platformDropDown={platformDropDown}
              onLatestDrop={onLatestDrop}
              onLatestChange={onLatestChange}
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
              maxPage={maxPage}
            />
          </div>
        )}
      />
      <Route path="/games/:games" component={Content} />
      <ScrollToTop />
    </Router>
  );
}
