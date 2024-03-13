import '@styles/App.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Contacto } from '@/components/Links'
function Home() {

  return (
    <>
      <Header />
      <Footer numero={Contacto.numero} email={Contacto.email} />
    </>
  )
}

export default Home
