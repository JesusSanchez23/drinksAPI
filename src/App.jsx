import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Formulario from './components/Formulario';
import { CategoriasProvider } from './context/CategoriasProvider';
import { BebidasProvider } from './context/BebidasProvider';
import ListadoBebidas from './components/ListadoBebidas';
import ModalBebida from './components/ModalBebida';

function App() {


  return (
    <>
    <header className='py-5'>
      <h1>Buscador de Bebidas</h1>
    </header>

<CategoriasProvider>
  <BebidasProvider>

    <Container>

    <Formulario />

    <ListadoBebidas/>
    
    <ModalBebida/>
    
    </Container>

  </BebidasProvider>
</CategoriasProvider>
    </>
  )
}

export default App
