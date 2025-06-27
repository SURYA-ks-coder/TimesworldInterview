import React from "react";
import Card from "react-bootstrap/Card";
// import image from "../assets/1723093785-89f1211cbc1a260bfc2f80c5978415f5.jpg";

export default function CardBasic({ image, Title, description }) {
  return (
    <Card
      style={{
        // width: "36rem",
        height: "100px",
        display: "flex",
        flexDirection: "row",
        zIndex: 1,
      }}
      className="responsive-card "
    >
      <Card.Img src={image} className="custom-img p-2" rounded />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
