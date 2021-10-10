import React from 'react';
import games from './csvjson.json';
import Navi from './Navi'


const Content = ({match}) => {

  const matchGames = games.filter(game => {
    return game.Slug === match.params.games
  })
 console.log(matchGames[0].Image)
  return (
    <div>
      <Navi />
      <h1 className="text-center m-3 p-auto"><img alt='' src={matchGames[0].Image} /></h1>
    </div>
    );


}

export default Content;