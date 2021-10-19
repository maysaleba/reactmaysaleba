import React from 'react';
import games1 from './csvjson.json';
import games2 from './csvjsonus.json'
import { Card, Row, Col } from "react-bootstrap";
import NaviBar from './NaviBar'
import Paper from '@mui/material/Paper';

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
      <NaviBar search={search} setSearch={setSearch} />
      <div className="text-center m-3 p-auto"><img alt='' style={{width: '50px' , borderRadius: "5px"}} src={matchGames[0].Image} /></div>
       <Paper elevation={2} className="content-container">
          {/*<Card className="content-container-gameinfo">*/}
            <Card.Header style={{backgroundColor: 'white' , fontWeight: 'bold'}}>{matchGames[0].Title}</Card.Header>
            <Card.Body>
              <Card.Text>
                <Row>
                    <Col><span style={{color: '#9c27b0'}}>Publisher:</span> {matchGames[0].Publisher}</Col>
                    <Col><span style={{color: '#9c27b0'}}>Release Date:</span> {matchGames[0].ReleaseDate}</Col>
                 </Row>
                 <Row>
                    
                    <Col><span style={{color: '#9c27b0'}}>OpenCritic Rating:</span> <a href={matchGames[0].OpenCriticURL}>{matchGames[0].SCORE}</a></Col>
                  </Row>
                  <Row>
                  <Col><span style={{color: '#9c27b0'}}>Genre:</span> {matchGames[0].genre}</Col>
                  </Row>
              </Card.Text>
            </Card.Body>
              
                <Row xs={2}>
                  <Col sm={1} style={{display: 'block' , flexDirection: 'column', justifyContent: 'flex-end',  alignItems: 'flex-end'}}>
                   
                 </Col>
                 <Col sm={3} style={{display: 'block' , justifyContent: 'center',  alignItems: 'flex-end'}}> 
                    <Row>
                    
                    </Row>
                    <Row>
                    <span style={{lineHeight: '30px' , paddingBottom: '5px' , color:'white',fontSize: '1.5rem'}}><PesoPrice props={matchGames[0].SalePrice}/></span>
                    </Row>
                    </Col>
                  </Row>
                 {/* <Card.Footer className="content-container-gameinfo" style={{backgroundColor: '#55597d',  width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>

                  <div style={{width: '50px' , color: '#ffb912', marginRight: '10px', fontSize: '1rem', fontWeight: 'bold' }}>-{matchGames[0].PercentOff}</div>
                  <div style={{display: 'block' , marginRight: 'auto'}}>
                    <div style={{color:'#999999', fontSize: '0.8rem'}}><PesoPrice props={matchGames[0].Price}/></div>
                    <div style={{width: '100px', color:'white', fontSize: '2rem'}}><PesoPrice props={matchGames[0].SalePrice}/></div>
                  </div>
                  <Card style={{display:'inline-flex', width: '200px' , backgroundColor: '#6e7290', color: 'white', padding: '5px 5px 5px 5px', margin: '5px', borderRadius: '5px', fontWeight: 'bold'}}><span style={{fontSize: '14px', margin: '5px'}}>Buy on eShop</span></Card>
                  <Card style={{backgroundColor: '#6e7290', color: 'white', padding: '5px', margin: '5px', borderRadius: '5px', fontWeight: 'bold'}}><span style={{fontSize: '14px', margin: '5px'}}>Buy Gift Card</span></Card>


                
            </Card.Footer>*/}
            {/*</Card>*/}
            <Card.Header style={{backgroundColor: 'white'}}>DESCRIPTION</Card.Header>
            <Card.Body>
              <Card.Text className="text-muted">
                {matchGames[0].description}
              </Card.Text>

            </Card.Body>
      </Paper>
    </div>
    );


}

export default Content;