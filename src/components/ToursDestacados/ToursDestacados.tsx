import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './ToursDestacados.css' // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'

const ToursDestacados = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const mobileContent = (
    <Carousel>
      <Carousel.Item>
        <div className="item-c img-1-c img-overlay">
          <div className="carousel-label"><Link to='/tours/torres-del-paine/full-day' >Full day</Link></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="item-c img-2-c img-overlay">
          <div className="carousel-label"><a href="">Base Torres</a></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="item-c img-3-c img-overlay">
          <div className="carousel-label"><a href="">Glaciar Grey</a></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="item-c img-4-c img-overlay">
          <div className="carousel-label"><a href="/tours/puerto-natales/cueva-milodon">Cueva del Milodon</a></div>
        </div>
      </Carousel.Item>
    </Carousel>
  )

  return (
    <>
      {isMobile ? (
        // Render mobile version with React Bootstrap Carousel
        <>
          <div className="carousel-mobile">
            <div className=""><h1>Tours<span>Destacados</span></h1></div>
            {mobileContent}
          </div>
        </>
      ) : (
        // Render desktop version
        <>
          <div className="desktop">
            <h1>Tours<span>Destacados</span></h1>
            <div className="grid-container">
              <div className="item img-1" onClick={() => navigate('/tours/torres-del-paine/full-day')} role='button'><a href="">Full day</a></div>
              <div className="item img-2"><a href="">Base Torres</a></div>
              <div className="item img-3"><a href="">Glaciar Grey</a></div>
              <div className="item img-4"><a href="">Cueva del Milodon</a></div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ToursDestacados
