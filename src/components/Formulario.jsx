import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";
import { useState } from "react";


const Formulario = () => {

    const {categorias,registrarDatos,datos} = useCategorias();
    const {consultarAPI} = useBebidas();
    const [alerta, setAlerta] = useState('');

    

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(Object.values(datos).includes('')){
            setAlerta('Todos los campos son obligatorios');
            return;
        }
    setAlerta('');

   consultarAPI(datos);

    }
  return (
      <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nombre">Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" name="nombre" id="nombre" onChange={registrarDatos} value={datos.nombre}/>
            </Form.Group>
          </Col>
          <Col md={6}>
          <Form.Group className="mb-3">
              <Form.Label htmlFor="categoria">Categoría</Form.Label>
              <Form.Select id="categoria" name="categoria" value={datos.categoria}  onChange={registrarDatos}>
                  <option value="">- Selecciona Categoria</option>
  
                  {categorias.map(categoria => (
                      <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option> 
                  ))}
  
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
  
        <Row className="justify-content-end">
          <Col md={3}>
              <Button variant="danger" type="submit" className="text-uppercase w-100">
                  Buscar Bebidas
              </Button>
          </Col>
        </Row>
      </Form>
      {alerta !== '' && <Alert variant="danger" className="text-center mt-3">{alerta}</Alert>}

     
      </>
  );
};

export default Formulario;
