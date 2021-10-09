import React from 'react';
import Navi from './Navi'
import CardGroup from './CardGroup'
import SearchBox from './SearchBox'
import './App.css';
import games from './csvjson.json';
import Results from './Results';
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';



const filterGames = (games, query) => {
    if (!query) {
        return games;
    }

    return games.filter((game) => {
        const gameTitle = game.Title.toLowerCase();
        return gameTitle.includes(query);
    });
};

// console.log(query);


const App = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredGames = filterGames(games, searchQuery);


return (
	<Router>
	<div>
	      <Navi />
	         <SearchBox searchQuery={searchQuery}
	         setSearchQuery={setSearchQuery}

	         />
	           <CardGroup games={filteredGames}/>
                    </div> 
	</Router>

	);
}

 
export default App;