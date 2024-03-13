import '@styles/App.css'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import DondeVamos from '../DondeVamos/DondeVamos'
import CardNosotros from '../CardNosotros/CardNosotros'
import ToursDestacados from '../ToursDestacados/ToursDestacados'

function Header() {
  return (
    <>
      <div className="header">
        <Navbar showLine={true} />
        <h1>Vive <span>PAINE</span>
          <br />Explora lo <span>SALVAJE</span></h1>
      </div>
      <CardNosotros />
      <DondeVamos />
      <ToursDestacados />
    </>
  )
}

export default Header
