import React, { Component } from 'react';
import Navi from './Navi'
import CardList from './CardGroup'
import SearchBox from './SearchBox'
import './App.css';
import games from './csvjson.json';
import Search from './search';




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
    console.log(event.target.value);
   
    // console.log(filteredGames);
  }

  render(){
      const filteredGames = this.state.games.filter(game => {
      return (game.Title.toLowerCase().includes(this.state.searchfield.toLowerCase()) || game.Publisher.toLowerCase().includes(this.state.searchfield.toLowerCase()))
    })
     return (
      <div>
    <Navi />
    <SearchBox searchChange={this.onSearchChange}/>
    <CardList games={filteredGames}/>
    </div>
      );
  }
   
  }
 
export default App;