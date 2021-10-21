import React from "react";
import games1 from "./csvjson.json";
import games2 from "./csvjsonus.json";
import { Card, Row, Col } from "react-bootstrap";
import NaviBar from "./NaviBar";
import {Paper, Link} from "@mui/material";
import styled from "styled-components";
import download  from './download.gif'

let games = games1.concat(games2);

const Content = ({ search, setSearch, match }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  var theURL =
    "https://api.exchangerate.host/latest?base=PHP&v=_" + today + "_";

  function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theURL, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.response;
  }

  let fxc = httpGet();
  const fxcp = JSON.parse(fxc);

  var phpExchange = 1 / fxcp.rates.USD;

  const matchGames = games.filter((game) => {
    return game.Slug === match.params.games;
  });

  function PesoPrice(props) {
    console.log(props.props);
    return "₱ " + Math.round(props.props * phpExchange);
  }

  function ReverseDesc(props){

    if (matchGames[0].platform === 'Playstation'){


    let input = props.props;
    let newText = input.split ('<br />').map ((item, i) => <p key={i}>{item}</p>);
    return (
        newText
      )
  } else {
    let input = props.props;
    let newText = input.split(/(?=•)/).map ((item, i) => <p key={i}>{item}</p>);
    return (
        newText
        )
  }

}


function WhichStore() {
      if (matchGames[0].platform === 'Playstation'){
    return (
        <div style={{marginLeft: '10px'}} className="logonin psstore"><img src={download} /></div>
      )
  } else {
    return (
        <div style={{marginLeft: '10px'}} className="logonin eshop"><img src={download} /></div>
        )
  }
}


function DateConvert(s) {
  var s = s.split(/\D/),
    dt = new Date(s[0], s[1] - 1, s[2]);
  return dt.toLocaleString('en-CA', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}


let x = matchGames[0].SaleEnds;



  function HasOpenCritic(props){
    if (props.props === "" || props.props === "-1"){
      return (
         <span>
           <span style={{marginLeft: 0, color: "#9c27b0" }}>OpenCritic Rating:</span> 
           <span style={{color:"black"}}><span className="opencritic-logo"> N/A</span></span>
     </span>
        )
    } else {
          return (
         <Link underline="none" hover="none" color="black" href={matchGames[0].OpenCriticURL}>
           <span style={{marginLeft: 0, color: "#9c27b0" }}>OpenCritic Rating:</span> 
           <span style={{color:"black"}}> <span className="opencritic-logo">
           <span style={{color: 'white', borderRadius: 5, backgroundColor: '#fc3e04', paddingLeft: '10px', paddingRight: '10px'}}>{matchGames[0].SCORE}</span></span></span>
         </Link>
      )
    }

  }

  const BackgroundContainer = styled.div`
    -blur-radius: 20px;
    position: absolute;
    z-index: 0;
    width: 100vw;
    height: 60vh;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #6e7290;
    z-index: -1;

    &:after {
      --color-background--rgb: 110, 114, 144;
      content: "";
      position: absolute;
      height: 50%;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      background: linear-gradient(
        0deg,
        rgba(var(--color-background--rgb), 1) 0,
        rgba(var(--color-background--rgb), 0.987) 8.1%,
        rgba(var(--color-background--rgb), 0.951) 15.5%,
        rgba(var(--color-background--rgb), 0.896) 22.5%,
        rgba(var(--color-background--rgb), 0.825) 29%,
        rgba(var(--color-background--rgb), 0.741) 35.3%,
        rgba(var(--color-background--rgb), 0.648) 41.2%,
        rgba(var(--color-background--rgb), 0.55) 47.1%,
        rgba(var(--color-background--rgb), 0.45) 52.9%,
        rgba(var(--color-background--rgb), 0.352) 58.8%,
        rgba(var(--color-background--rgb), 0.259) 64.7%,
        rgba(var(--color-background--rgb), 0.175) 71%,
        rgba(var(--color-background--rgb), 0.104) 77.5%,
        rgba(var(--color-background--rgb), 0.049) 84.5%,
        rgba(var(--color-background--rgb), 0.013) 91.9%,
        rgba(var(--color-background--rgb), 0)
      );
    }
  `;

  const Background = styled.div`
    --blur-radius: 20px;
    background-image: url(${matchGames[0].Image});
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: calc(var(--blur-radius) * -1) calc(var(--blur-radius) * -1);
    background-size: cover;
    background-position: 50%;
    mix-blend-mode: overlay;
    filter: blur(var(--blur-radius));
  `;

  // console.log(matchGames[0].description.split('\n'));
  console.log(matchGames[0].SalePrice)
  return (
    <div>
      <BackgroundContainer>
        <Background />
      </BackgroundContainer>
      <NaviBar search={search} setSearch={setSearch} />
      <div className="text-center m-3 p-auto">
        <img
          alt=""
          style={{paddingBottom: 20, height: "auto", maxWidth: "50%", borderRadius: "5px" }}
          src={matchGames[0].Image}
        />
      </div>
      <Paper elevation={2} className="content-container">
        {/*<Card className="content-container-gameinfo">*/}
        <Card.Header style={{ backgroundColor: "white", fontWeight: "bold" }}>
          {matchGames[0].Title}
        </Card.Header>
        <Card.Body style={{fontSize: 14}}>
          <Row xs={1} sm={2}>
            <Col>
              <span style={{ color: "#9c27b0" }}>Publisher:</span>{" "}
              {matchGames[0].Publisher}
            </Col>
            <Col>
              <span style={{ color: "#9c27b0" }}>Release Date:</span>{" "}
              {DateConvert(matchGames[0].ReleaseDate)}
            </Col>
          </Row>
          <Row>
            <Col>
              <HasOpenCritic props={matchGames[0].SCORE}/>
              {/*<a href={matchGames[0].OpenCriticURL}>{matchGames[0].SCORE}</a>*/}
            </Col>
          </Row>
          <Row>
            <Col>
              <span style={{ color: "#9c27b0" }}>Genre:</span>{" "}
              {matchGames[0].genre}
            </Col>
          </Row>
        </Card.Body>
        <div className="price-container" style={{margin: 'auto'}}>
        <table className="table table-align-middle item-price-table">
          <tbody>
            <tr className="item-table-best">
              <td><a href={matchGames[0].URL} target="_blank" style={{padding: 0}}><WhichStore /></a></td>
              <td className="version"><a href={matchGames[0].URL} target="_blank" style={{padding: 10}}>Sale ends<br /> {DateConvert(matchGames[0].SaleEnds)}</a></td>
              <td className="version">
              <a href={matchGames[0].URL} target="_blank">
                <div className="btn btn-block btn-secondary">
                  <PesoPrice props={matchGames[0].SalePrice} /><span className="ml-2 badge badge-danger">-{matchGames[0].PercentOff}</span>
                </div>
                </a>
              </td>
            </tr>
            <tr className="item-table-best">
              <td><div style={{marginLeft: '10px'}} className="logonin shopee"><img src={download} /></div></td>
              <td className="version">Buy with $10 Gift Card on Shopee</td>
              <td className="version">
                 <a href={matchGames[0].URL} target="_blank">
                <div className="btn btn-block btn-secondary">
                  <PesoPrice props={matchGames[0].SalePrice} /><span className="ml-2 badge badge-danger">-{matchGames[0].PercentOff}</span>
                </div>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
          </div>


        <div style={{fontSize: 14}}>
        <Card.Header style={{ backgroundColor: "white" }}>
          Description
        </Card.Header>
        <Card.Body>
            <ReverseDesc props={matchGames[0].description} />
        </Card.Body>
        </div>
      </Paper>
    </div>
  );
};

export default Content;
