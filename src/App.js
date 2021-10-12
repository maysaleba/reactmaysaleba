import React, { useState, useEffect } from "react";
import Navi from "./Navi";
import CardGroup from "./CardGroup";
import SearchBox from "./SearchBox";
import "./App.css";
import games from "./csvjson.json";
import Content from "./Content";
import FilterDropDown from "./FilterDropDown";
import { HashRouter as Router, Route, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";



function App() {


    function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


    const gameFromApp = (games) => {
    var x = 0;
    var y = 20;
    var slicedArray = games.slice(0, 20); //50
    var asliced = [];
    while (slicedArray.length > 0) {
      asliced.push(slicedArray);
      x += 20; //x50
      y += 20; //y100
      slicedArray = games.slice(x, y); //50
    }

    return asliced;
  };



  let asliced = gameFromApp(games);
  let totalPage = Math.ceil(asliced.length);
  // console.log(totalpage);

  const [pageNumber, setPageNumber] = useState(asliced[0]);
  //       // console.log(pageGames)

  const fetchGames = (currentPage) => {
    const data = asliced[currentPage];
    return data;
  };

  const handlePageClick = (data) => {
    let currentPage = data.selected;
    console.log(currentPage);
    const currentPagex = fetchGames(currentPage);
    console.log(currentPagex);
    setPageNumber(currentPagex);
    setCurrPage(currentPage);
    window.scrollTo(0, 0)
  };


  const [searchfield, setSearchfield] = useState("");
  const [filterField, setFilterField] = useState("");
  const [currPage, setCurrPage] = useState(0);
  const [genreDropDown, setGenreDropDown] = useState("All genres");
  const onDropDownChange = (dropDownValue) => setGenreDropDown(dropDownValue);



  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
    // event.preventDefault();
  };

  const clearSearchChange = (event) => {
    setSearchfield("");
  }

  const clearFilter = (event) => {
    setFilterField("");
  }

  const onFilterChange = (filterGenre) => {
    setFilterField(filterGenre)
  };





  const filteredGames = games.filter((game) => {
    return (
      game.Title.toLowerCase().includes(searchfield.toLowerCase()) &&
      game.genre.toLowerCase().includes(filterField.toLowerCase())
    );
  });



  return (
    <div>
    <Router>
      <Route
        path="/"
        exact
        render={(props) => (
          <div>
            <Navi />
            <SearchBox 
              searchfield={searchfield}
              onSearchChange={onSearchChange} 
              onFilterChange={onFilterChange}
              genreDropDown={genreDropDown}
              onDropDownChange={onDropDownChange}
            />

            <CardGroup 
              games={pageNumber} 
              clearFilter={clearFilter} 
              clearSearchChange={clearSearchChange} 
              onFilterChange={onFilterChange} 
              genreDropDown={genreDropDown} 
              onDropDownChange={onDropDownChange}/>

                                  <ReactPaginate
                                  initialPage={currPage}
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />

          </div>
        )}      
      />

      
      <Route path="/games/:games" component={Content} />
      <ScrollToTop />
    </Router>
    </div>
  );
}

export default App;