import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import { Links } from '../Links'
import { useNavigate } from 'react-router-dom'

interface Contacto {
  numero: string,
  email: string,
}

const Footer: React.FC<Contacto> = ({ numero, email }) => {
  const navigate = useNavigate()
  // Navigate to the path, this way the website doesn't reload
  const handleNavigate = (e: React.MouseEvent<HTMLElement, MouseEvent>, path: string) => {
    e.preventDefault()
    window.scrollTo(0, 0)
    navigate(path)
  }
  const xl = 6

  return (
    <footer className="footer">
      <Container fluid className='mt-3'>
        <Row id='main-footer' className='justify-content-center text-center mx-5'>
          <Col xs={12} xl={6} className='px-0'>
            <ul className='list-unstyled d-flex flex-column flex-md-row justify-content-xl-end align-items-center mb-0 justify-content-md-start pt-0'>
              <li><p className='text fw-bold mb-0 fs-5'> Contacto: </p></li>
              <li><a className='text nf nf-fa-whatsapp text-nowrap mx-2 mx-xl-2 fs-5 link-underline link-underline-opacity-0 text-white' href={'https://wa.me/' + numero}> +{numero} </a></li>
              <li><a className='text nf nf-cod-mail text-nowrap mx-2 mx-xl-2 fs-5 link-underline link-underline-opacity-0 text-white' href={'mailto:' + email}> {email}</a></li>
            </ul>
          </Col>

          <Col xs={12} xl={xl} className='ml-auto'>
            <ul className='list-unstyled d-flex flex-column flex-md-row justify-content-xl-start align-items-center mb-0 justify-content-md-start'>
              <li><p className='text fw-bolder mb-0 fs-5'>Quick Links: </p></li>
              {
                Object.values(Links).filter(link => link.footer).map((link, index) => {
                  if (link.redirect) {
                    return (
                      <li key={index} className='mx-2 mx-xl-2'>
                        <a className='text text-white mb-0 fs-5 link-underline link-underline-opacity-0' href={link.href}>
                          • {link.name}
                        </a>
                      </li>
                    )
                  } else {
                    return (
                      <li key={index} className='mx-2 mx-xl-2'>
                        <p className='text text-white mb-0 fs-5' role='button' onClick={(e) => handleNavigate(e, link.href)}>
                          • {link.name}
                        </p>
                      </li>
                    )

                  }
                }
                )
              }
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              © {new Date().getFullYear()} Powered by Cloud and Digital<br/>
              © Tour Patagón se hace responsable del uso de imagenes de este sitio web
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
