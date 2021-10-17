import React from 'react';
import games1 from './csvjson.json';
import games2 from './csvjsonus.json'
import Navi from './Navi'
import { Button, Card, Row, Col } from "react-bootstrap";
import SearchAppBar from './SearchAppBar'

let games = games1.concat(games2);


const Content = ({search, setSearch, match}) => {

              var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;

                          var theURL = 'https://api.exchangerate.host/latest?base=PHP&v=_' + today + '_';

            function httpGet(theUrl) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", theURL, false); // false for synchronous request
                xmlHttp.send(null);
                return xmlHttp.response;
            }

            let fxc = httpGet();
            const fxcp = JSON.parse(fxc)
            

            var phpExchange = 1 / fxcp.rates.USD;

      

  const matchGames = games.filter(game => {
    return game.Slug === match.params.games
  })

          function PesoPrice(props){
            console.log(props.props)
              return (
              
                  "₱ "+Math.round(props.props * phpExchange)

                )
            }


  // console.log(matchGames[0].description.split('\n'));
 // console.log(matchGames[0].Image)
  return (
    <div>
      <SearchAppBar search={search} setSearch={setSearch} />
      <div className="text-center m-3 p-auto"><img alt='' style={{borderRadius: "5px"}} src={matchGames[0].Image} /></div>
       <div className="content-container">
          {/*<Card className="content-container-gameinfo">*/}
            <Card.Header style={{backgroundColor: 'white' , fontWeight: 'bold'}}>{matchGames[0].Title}</Card.Header>
            <Card.Body>
              <Card.Text>
                <Row>
                    <Col><span style={{color: '#9c27b0'}}>Publisher:</span> {matchGames[0].Publisher}</Col>
                    <Col><span style={{color: '#9c27b0'}}>Release Date:</span> {matchGames[0].ReleaseDate}</Col>
                 </Row>
                 <Row>
                    <Col><span style={{color: '#9c27b0'}}>Genre:</span> {matchGames[0].genre}</Col>
                    <Col><span style={{color: '#9c27b0'}}>OpenCritic Rating:</span> <a href={matchGames[0].OpenCriticURL}>{matchGames[0].SCORE}</a></Col>
                  </Row>
              </Card.Text>
            </Card.Body>
              <Card.Footer className="content-container-gameinfo" style={{backgroundColor: 'black',  width: '100%'}}>
                <Row>
                  <Col xs={2} style={{paddingLeft: '20px', display: 'inline-flex' , justifyContent: 'center',  alignItems: 'flex-end'}}>
                    <span style={{ color: '#ffb912', fontSize: '1rem' }}>-{matchGames[0].PercentOff}</span>
                 </Col>
                 <Col xs={8}> 
                    <Row>
                    <span style={{color:'grey', fontSize: '0.7rem'}}>Retail Price: <PesoPrice props={matchGames[0].Price}/></span>
                    </Row>
                    <Row>
                    <span style={{lineHeight: '30px' , paddingBottom: '5px' , color:'white',fontSize: '2rem'}}><PesoPrice props={matchGames[0].SalePrice}/></span>
                    </Row>
                  </Col>
                  <Col xs={2}><button>Hello</button></Col>



                </Row>
            </Card.Footer>
            {/*</Card>*/}
            <Card.Header style={{backgroundColor: 'white'}}>DESCRIPTION</Card.Header>
            <Card.Body>
              <Card.Text className="text-muted">
                {matchGames[0].description}
              </Card.Text>
            </Card.Body>
      </div>
    </div>
    );


}

export default Content;