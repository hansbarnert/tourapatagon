import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Tours from './pages/Tours.tsx'
import BuyTour from './pages/BuyTour.tsx'
import { Ciudades } from './components/Links.tsx'
import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />

        {/* Ciudades con tours /tours/<ciudad> */}
        {
          Object.entries(Ciudades).map(([key, value]) => {
            return <Route path={value.href} key={key} element={
              <Tours
                ContentList={value.tours}
                Titulo={key}
              />
            }>
            </Route>
          })
        }

        {/* Tours especificos /tours/<ciudad>/<nombre-de-tour> */}
        {
          Object.values(Ciudades).map((value, index) => {
            return <React.Fragment key={index}>
              {
                value.tours.map((tour, index) => {
                  return <Route path={tour.href} key={index} element={
                    <BuyTour
                      price={tour.price}
                      titulo={tour.title}
                      tipo={tour.tipo}
                      content={tour.content}
                      backgroundPath={tour.imagen}
                      mensajeWSP={tour.mensajeWSP}
                    />
                  }>
                  </Route>
                })
              }
            </React.Fragment>
          })
        }
      </Routes>
    </BrowserRouter>
  )
}
