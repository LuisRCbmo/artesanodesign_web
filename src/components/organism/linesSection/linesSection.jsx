import React from "react";

import "./lineSection.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AdCard from "../../molecules/AdCard/AdCard";

const linesSection = ({ lines }) => {
  return (
    <Container>
      <h1>Lineas de productos</h1>
      <Row>
        {lines.map((line, index) => (
          <Col className="add-col-center-contend" key={index} xs={12} xl={6}>
            <AdCard
              type="line"
              src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/Gris_0.png"
              title={line.line}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default linesSection;