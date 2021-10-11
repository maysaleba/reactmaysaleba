import React from 'react';
import games from './csvjson.json';
import Navi from './Navi'
import { Button, Card } from "react-bootstrap";


const Content = ({match}) => {

  const matchGames = games.filter(game => {
    return game.Slug === match.params.games
  })
 // console.log(matchGames[0].Image)
  return (
    <div>
      <Navi />
      <h1 className="text-center m-3 p-auto"><img alt='' src={matchGames[0].Image} /></h1>
       <Card className="custom-container">
  <Card.Header>GAME INFO</Card.Header>
  <Card.Body>
    <Card.Title>{matchGames[0].Title}</Card.Title>
    <Card.Text className="mb-2 text-muted">
      {matchGames[0].description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    );


}

export default Content;