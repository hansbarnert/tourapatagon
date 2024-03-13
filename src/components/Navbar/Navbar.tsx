import React, { useEffect, useState, useRef } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { Links } from '../Links'
import { scroller } from 'react-scroll'

const NavbarCustom: React.FC<{ showLine: boolean }> = ({ showLine }) => {
  const navigate = useNavigate()
  // Navigate to the path, this way the website doesn't reload
  const handleNavigate = (e: React.MouseEvent<HTMLElement, MouseEvent>, path: string) => {
    e.preventDefault()
    navigate(path)
  }

  const [navbarWidth, setNavbarWidth] = useState(0)
  const lineRef = useRef(null)


  useEffect(() => {
    const updateWidth = () => {
      const navbarContainer = document.querySelector<HTMLElement>('.custom-nv .container')
      if (navbarContainer) {
        const containerWidth = navbarContainer.offsetWidth
        const lineWidth = containerWidth * 0.87
        setNavbarWidth(lineWidth)
      }
    }

    window.addEventListener('resize', updateWidth)
    updateWidth() // Initial calculation

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return (
    <>
      <Navbar expand="md" className="bg-transparent custom-nv">
        <Container>
          <Navbar.Brand href="/" onClick={(e) => handleNavigate(e, '/')}>
            <img
              alt=""
              src="/logo.png"
              width="90"
              height="90"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-nav" className="justify-content-end">
            <Nav>
              {
                Object.values(Links).map((link, index) => {
                  if (link.scroll) {
                    return (
                      <Nav.Link href={link.href} className="text-white mx-2" key={index} onClick={(e) => {
                        e.preventDefault()
                        navigate(link.href)
                        scroller.scrollTo(link.section!, {
                          duration: 500,
                          smooth: true,
                          offset: -50
                        })
                      }}>
                        {link.name}
                      </Nav.Link>
                    )
                  } else if (link.redirect) {
                    return (
                      <Nav.Link key={index} href={link.href} className="text-white mx-2" >
                        {link.name}
                      </Nav.Link>)

                  } else {
                    return (
                      <Nav.Link key={index} href={link.href} className="text-white mx-2" onClick={(e) => handleNavigate(e, link.href)}>
                        {link.name}
                      </Nav.Link>
                    )

                  }
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showLine && <div style={{ width: navbarWidth }} className="line" ref={lineRef} />}
    </>
  )
}

export default NavbarCustom
