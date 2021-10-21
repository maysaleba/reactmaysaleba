import React from "react";
import games1 from "./csvjson.json";
import games2 from "./csvjsonus.json";
import { Card, Row, Col } from "react-bootstrap";
import NaviBar from "./NaviBar";
import Paper from "@mui/material/Paper";
import Link from '@mui/material/Link';
import styled from "styled-components";

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
    let newText = input.split(/(?=\•)/).map ((item, i) => <p key={i}>{item}</p>);
    return (
        newText
        )
  }

}

  function HasOpenCritic(props){
    console.log(props.props)
    if (props.props === "" || props.props === "-1"){
      return (
         <span>
           <span className="opencritic-logo" style={{marginLeft: 0, color: "#9c27b0" }}>OpenCritic Rating:</span> 
           <span style={{color:"black"}}> N/A</span>
     </span>
        )
    } else {
          return (
         <Link underline="none" hover="none" color="black" href={matchGames[0].OpenCriticURL}>
           <span className="opencritic-logo" style={{marginLeft: 0, color: "#9c27b0" }}>OpenCritic Rating:</span> 
           <span style={{color:"black"}}> {matchGames[0].SCORE}</span>
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
  // console.log(matchGames[0].Image)
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
          <Row>
            <Col>
              <span style={{ color: "#9c27b0" }}>Publisher:</span>{" "}
              {matchGames[0].Publisher}
            </Col>
            <Col>
              <span style={{ color: "#9c27b0" }}>Release Date:</span>{" "}
              {matchGames[0].ReleaseDate}
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

        <Row xs={2}>
          <Col
            sm={1}
            style={{
              display: "block",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          ></Col>
          <Col
            sm={3}
            style={{
              display: "block",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Row></Row>
            <Row>
              <span
                style={{
                  lineHeight: "30px",
                  paddingBottom: "5px",
                  color: "white",
                  fontSize: "1.5rem",
                }}
              >
                <PesoPrice props={matchGames[0].SalePrice} />
              </span>
            </Row>
          </Col>
        </Row>
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
