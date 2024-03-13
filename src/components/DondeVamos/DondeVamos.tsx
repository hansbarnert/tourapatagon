import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CardImg from '../CardImg/CardImg'
import { Ciudades } from '../Links'
import './DondeVamos.css'
import { Element, scroller } from 'react-scroll'


const DondeVamos: React.FC = () => {

  const tours: {
    title: string,
    path: string,
    href: string | undefined,
  }[] = []

  useEffect(() => {
    // Get the current path
    const currentPath = window.location.hash

    if (currentPath === '#tours' || currentPath == '#Tours') {
      // If the current path is '/', scroll to the top
      scroller.scrollTo('ToursView', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
    }
  }, [])

  Object.entries(Ciudades).forEach(([key, value]) => {
    tours.push({ title: key, path: value.image, href: value.href })
  })

  return (
    <Element name='ToursView' >
      <Container fluid className='donde-vamos-image' >
        <Container className='text-start pt-2 pb-4'>
          <h1 className='donde-vamos-text text-start px-2 pt-3'>¿Dónde Vamos?</h1>
          <CardImg className='donde-vamos-container px-2' contentList={tours}></CardImg>

        </Container>
      </Container >

    </Element>
  )
}

export default DondeVamos
