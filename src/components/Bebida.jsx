import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {
  const { strDrink, strDrinkThumb } = bebida;
  const { handleModalClick,consultaDetallesAPI } = useBebidas();

  return (
    <Col md={6} lg={3}>
      <Card style={{ width: "18rem" }} className="mb-4">
        <Card.Img variant="top" src={strDrinkThumb} alt={strDrink} />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Button
            variant="warning"
            className="w-100 uppercase mt-2"
            onClick={() => {
              handleModalClick();
              consultaDetallesAPI(bebida);
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
