import { Element, scroller } from 'react-scroll'
import './CardNosotros.css'
import { useEffect } from 'react'

const NosotrosTest = () => {
  useEffect(() => {
    // Get the current path
    const currentPath = window.location.hash

    if (currentPath === '#nosotros' || currentPath == '#Nosotros') {
      // If the current path is '/', scroll to the top
      scroller.scrollTo('NosotrosView', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
    }
  }, [])

  return (
    <>
      <Element className="container-nosotros" name="NosotrosView" id="NosotrosView">
        <div className="left-side">
          <h4>La mejor agencia de viajes.</h4>
          <h1>
            DESCUBRE LA <span>PATAGONIA</span> CON NOSOTROS
          </h1>
          <p>
            Herbert es los fundadores de Tour Patagón. Se dedica a entregar de los mejores tours en la zona desde hace más
            de 5 años, llevando viajeros a lo largo de la región de Magallanes, patagonia chilena y argentina e incluso los lugares más remotos
            como lo es Ushuaia.<br />
            Con la vasta y exitosa experiencia a la espalda de Turismo Travesía Paine queremos dejar a vuestra disposición, viajero amante de la
            naturaleza nuestra hospitalidad y conocimiento adquiridos en estos años de servicio, con ello, te invitamos a conocer nuestra maravillosa
            patagonia.<br />
            Si lo que buscas es confiabilidad, seriedad y calidad de servicio, atrévete y aventura con nosotros.
          </p>
        </div>
        <div className="right-side">
          <img src="/tour_torres.png" alt="Your Image Description" />
        </div>
      </Element>
    </>
  )
}

export default NosotrosTest
