import React, { Component, useState, useEffect } from 'react';
import Navi from './Navi'
import CardGroup from './CardGroup'
import SearchBox from './SearchBox'
import './App.css';
import games from './csvjson.json';
import Content from './Content';
// import Search from './search';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pagination1 from './Pagination'



class App extends Component  {
  constructor () {
    super()
    this.state = {
        games: games,
        searchfield: ''
    }
  }

  onSearchChange = (event) => {
     
      this.setState({ searchfield: event.target.value })
      event.preventDefault();
      // console.log(event.target[0].value);
      // console.log(filteredGames);
    }

  render(){
        const filteredGames = this.state.games.filter(game => {
        return (game.Title.toLowerCase().includes(this.state.searchfield.toLowerCase()) || game.Publisher.toLowerCase().includes(this.state.searchfield.toLowerCase()))
        })

        return (
          <Router>
            <Route path="/" exact render={props => 
                <div>
                <Navi />
                <SearchBox searchChange={this.onSearchChange}/>
                <CardGroup games={filteredGames}/>
                </div> }/>
            <Route path="/games/:games" component={Content} />
          </Router>
        );
  }
}
 
export default App;