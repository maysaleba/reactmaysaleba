import React from "react";
import { Badge, Card, Col } from "react-bootstrap";
import OpenCriticLogo from "./OpenCritic_logo.svg";
import "./Cards.css";
import {  Link
} from "react-router-dom";


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
            var mexExchange = 1 / fxcp.rates.MXN;

            console.log(phpExchange);

const Cards = ({ Title, Image, Score, SaleEnds, Genre, Slug, SalePrice, Discount, URL }) => {
  console.log(SalePrice);
  // var d = new Date();
  // var lastd = new Date(d.setDate(d.getDate() - 3));
  // var da = String(d.getDate()).padStart(2, "0");
  // var mo = String(d.getMonth() + 1).padStart(2, "0"); //January is 0!
  // var year = d.getFullYear();

  // var daysago = year + "-" + mo + "-" + da;

            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            const firstDate = new Date();
            const secondDate = new Date(SaleEnds);
            // const diffDays = Math.round((secondDate - firstDate) / oneDay);

            function DaysLeft(props) {
              // const isExpired = props.isExpired;
              const diffDays = Math.round((secondDate - firstDate) / oneDay);

              if (diffDays > 0) {
                return (
                  <Badge bg="warning" text="dark">
                    {diffDays} days left
                  </Badge>
                );
              }
              return (
                <Badge bg="secondary" text="light">
                  Expired
                </Badge>
              );
            }

            function OpenScore(score) {
              const hasScore = score.hasScore;
              if (hasScore === -1 || hasScore === "") {
                return null;
              }
              return (
                <div className="d-flex justify-content-left opencritic-container">
                  <img className="opencritic-logo" src={OpenCriticLogo} alt=''/>
                  <span className="score-text">{Score}</span>
                </div>
              );
            }

            function PercentOff(props) {
              return (
                <Badge bg="danger">
                  {"-"+Discount}
                </Badge>
              );
            }

            function PesoPrice(props){
              return (
                  <>
                  {"₱"+Math.round((SalePrice * phpExchange)*100)/100}
                  </>
                )
            }


  return (
    
    <Col>
    <Link to={`/games/${Slug}`} className="linkto" style={{color: 'black', textDecoration: 'none'}}>
      <Card className="border-0">
        <Card.Img className="card-img" src={Image} />
        <Card.ImgOverlay className="card-img-overlay">
          <span className="img-responsive float-end nbadges nintendo"></span>
          <OpenScore hasScore={Score} />
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title className="card-title">{Title}</Card.Title>
          <Card.Text className="card-text">
            <DaysLeft isExpired={SaleEnds} /> <PercentOff /> <PesoPrice />
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </Col>
    
  );
};

export default Cards;
