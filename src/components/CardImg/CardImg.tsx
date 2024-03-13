import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import './CardImg.css'
import { useNavigate } from 'react-router-dom'
import { CardImgComponents } from '../Links'


const CardImg: React.FC<CardImgComponents> = ({ contentList, className, rowClassName, colClassName }) => {
  const navigate = useNavigate()
  const handleNavigate = (e: React.MouseEvent<HTMLElement, MouseEvent>, path: string | undefined) => {
    if (!path) return
    e.preventDefault()
    navigate(path)
  }
  if (!colClassName) colClassName = 'col-12 col-md-6 col-xl-3'

  return (
    <Container className={className + ' justify-content-center'} >
      <Row className={rowClassName + ' justify-content-center'}>
        {contentList.map((element, index) => (
          <Col key={index} className={colClassName} onClick={(e) => handleNavigate(e, element.href)} role='button'>
            <Container className='my-2'>
              <img src={element.path} alt={element.title} className=" rounded custom-border dim-image" />
              <div className="position-absolute bottom-0 start-0 bg-none ml-4 mb-2 img-custom-text">
                {element.title}
              </div>

            </Container>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CardImg
