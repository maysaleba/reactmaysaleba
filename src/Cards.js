import React from "react";
import { Badge, Card, Col } from "react-bootstrap";
import oc from "./OpenCritic_logo.svg";
import "./Cards.css";

const Cards = ({ Title, Image, Score, SaleEnds }) => {
  var d = new Date();
  var lastd = new Date(d.setDate(d.getDate() - 3));
  var da = String(d.getDate()).padStart(2, "0");
  var mo = String(d.getMonth() + 1).padStart(2, "0"); //January is 0!
  var year = d.getFullYear();

  var daysago = year + "-" + mo + "-" + da;

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date();
  const secondDate = new Date(SaleEnds);
  const diffDays = Math.round((secondDate - firstDate) / oneDay);

  function DaysLeft(props) {
    const isExpired = props.isExpired;
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
    if (hasScore == -1 || hasScore == "") {
      return null;
    }
    return (
      <div className="d-flex justify-content-left opencritic">
        <img className="oc" src={oc} />
        <span className="card-text">{Score}</span>
      </div>
    );
  }

  return (
    <Col>
      <Card className="border-0">
        <Card.Img className="card-img" src={Image} />
        <Card.ImgOverlay className="card-img-overlay">
          <span className="img-responsive float-end nbadges nintendo"></span>
          <OpenScore hasScore={Score} />
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title className="card-title">{Title}</Card.Title>
          <Card.Text className="card-text">
            <DaysLeft isExpired={SaleEnds} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
