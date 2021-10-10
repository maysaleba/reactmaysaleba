import React, { useState } from 'react';
import Navi from './Navi'
import CardGroup from './CardGroup'
import SearchBox from './SearchBox'
import './App.css';
import games from './csvjson.json';
import Content from './Content';
// import Search from './search';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";



function App()  {


  // constructor () {
  //   super()
  //   this.state = {
  //       games: games,
  //       searchfield: ''
  //   }
  // }

  // const [posts, setPosts] = useState([games])
  const [searchfield, setSearchfield] = useState('')

  // useEffect(() => {
  //   const res = games;
  //   setGames(res);
    
  // },[]);




  const onSearchChange = (event) => {
     
      setSearchfield(event.target.value)
      // event.preventDefault();
    }


        const filteredGames = games.filter(game => {
        return (game.Title.toLowerCase().includes(searchfield.toLowerCase()) || game.Publisher.toLowerCase().includes(searchfield.toLowerCase()))
        })

        return (
          <Router>
            <Route path="/" exact render={props => 
                <div>
                <Navi />
                <SearchBox searchChange={onSearchChange}/>
                <CardGroup games={filteredGames}/>
                </div> }/>
            <Route path="/games/:games" component={Content} />
          </Router>
        );
  }

 
export default App;