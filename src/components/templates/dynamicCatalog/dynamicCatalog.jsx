import React from "react";
import { useParams } from "react-router-dom";

import "./dynamicCatalog.scss";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AdCard from "../../molecules/AdCard/AdCard";
import Footer from "../../organism/footer/footer";

const DynamicCatalog = ({ products_info, lines_info, footer_info }) => {
  const { lineName, categoryName } = useParams();

  const navigate = useNavigate();

  const handleProductClick = (productName) => {
    navigate(`/${productName}`);
  };

  const line_descripction =
    lines_info.find((element) => element.name === lineName)?.description || "";

  const filteredProducts = products_info.filter((product) => {
    const linesArray = Array.isArray(product.line)
      ? product.line
      : [product.line];
    const lineMatch = lineName === "all" || linesArray.includes(lineName);
    const categoryMatch =
      categoryName === "all" || product.category === categoryName;

    return lineMatch && categoryMatch;
  });

  return (
    <>
      <Container className="ad-dinamic-catalog-container">
        {lineName === "all" ? (
          <></>
        ) : (
          <>
            <h1>Linea: {lineName}</h1>
            <p>{line_descripction} </p>
          </>
        )}
        {categoryName === "all" ? <></> : <h2>Productos: {categoryName}</h2>}
        <Row>
          {filteredProducts.map((product, index) => (
            <Col key={index} xs={6} lg={4}>
              <AdCard
                type="product"
                src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/Gris_0.png"
                title={product.name}
                onClick={() => handleProductClick(product.name)}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer footer_Info={footer_info} />
    </>
  );
};

export default DynamicCatalog;
