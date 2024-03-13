import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './BuyTour.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Contacto } from '@/components/Links'

type BuyTourProps = {
  // Define any props here if needed, for example:
  price: number;
  content: string;
  titulo: string;
  tipo: string;
  backgroundPath: string;
  mensajeWSP: string;
};

const BuyTour: React.FC<BuyTourProps> = ({ content, titulo, backgroundPath, mensajeWSP }) => {
  return (
    <>
      <div style={{ backgroundColor: '#317571' }}><Navbar showLine={false} /> </div>
      <Container fluid className='buy-tour-container'>
        <Row className="justify-content-md-center">
          <Col md={12}>
            <div className="tour-image" style={{ 'backgroundImage': `url(${backgroundPath})` }} />
          </Col>
        </Row>
        <Row className=' justify-content-center'>
          <Col md={12} className="justify-content-center pb-4">
            <h2 className='mb-3' id='title'>{titulo}</h2>
            <Container className='text-left'>
              <p>
                {content}
              </p>

            </Container>

            <a href={`https://wa.me/${Contacto.numero}?text=${mensajeWSP}`} target="_blank" rel="noopener noreferrer" className='primary buy-button btn'>Cotizar</a>
          </Col>
        </Row>
      </Container>
      <Footer numero={Contacto.numero} email={Contacto.email} />
    </>
  )
}

export default BuyTour
