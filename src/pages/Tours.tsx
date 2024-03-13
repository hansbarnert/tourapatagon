// Create simple reawct website component
import '@styles/App.css'

import TourComponent, { TourComponentProps } from '../components/Tours/Tours'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Contacto } from '@/components/Links'
import { useEffect } from 'react'



const Tours: React.FC<TourComponentProps> = ({ ContentList, Titulo }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [Titulo, ContentList])
  return (
    <>
      <div style={{ backgroundColor: '#317571' }}><Navbar showLine={false} /> </div>
      <TourComponent ContentList={ContentList} Titulo={Titulo} />
      <Footer numero={Contacto.numero} email={Contacto.email} />
    </>
  )
}

export default Tours

