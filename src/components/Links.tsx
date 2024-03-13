interface LinkValue {
  name: string,
  href: string,
  section?: string,
  redirect: boolean,
  footer: boolean,
  scroll: boolean
}

// Usado en Tours.tsx y ToursComponent.tsx y para crear las rutas en App.tsx
export interface TourInterface {
  href: string,
  price: number,
  content: string,
  title: string,
  tipo: string,
  path: string,
  mensajeWSP: string,
  imagen: string
}

export interface CiudadInterface {
  [key: string]: {
    href: string,
    tours: TourInterface[],
    image: string
  }
}

// Usado en ImgComponent y CardImg
export interface ContentList {
  title: string,
  path: string,
  href: string | undefined,
}

export interface CardImgComponents {
  contentList: ContentList[],
  className: string
  rowClassName?: string,
  colClassName?: string,
}


const Contacto = {
  numero: '56933987642',
  email: 'contacto@tourpatagon.cl'
}

const Links: { [key: string]: LinkValue } = {
  'Lenguaje': { name: 'Lenguaje', href: '#lenguaje', footer: false, scroll: false, redirect: false },
  'Home': { name: 'Home', href: '/', footer: true, scroll: false, redirect: false },
  'Nosotros': { name: 'Nosotros', href: '/#nosotros', footer: true, scroll: true, section: 'NosotrosView', redirect: false },
  'Tours': { name: 'Tours', href: '/#tours', footer: true, scroll: true, redirect: false, section: 'ToursView' },
  'Contacto': { name: 'Contacto', href: 'https://wa.me/' + Contacto.numero, footer: true, scroll: false, redirect: true },
}
// price, content, titulo, tipo, backgroundPath, mensajeWSP 
const Ciudades: CiudadInterface = {
  'Punta Arenas': {
    href: '/tours/punta-arenas', tours: [
      {
        href: '/tours/punta-arenas/city-tour-puq', price: 1000,
        content: 'Te pasaremos a buscar a tu hotel para comenzar este city tour Punta Arenas, un recorrido por la capital de la región de Magallanes y la Antártica chilena. Comenzaremos por la plaza Muñoz Gamero, donde está el monumento a Hernando de Magallanes y luego iremos al cerro de la Cruz, desde donde tendremos una vista panorámica de la ciudad y veremos a lo lejos Tierra del Fuego. Luego, visitaremos el Cementerio Municipal de Magallanes y el monumento al Ovejero, antes de trasladarnos hasta la costanera estrecho de Magallanes, donde termina el tour.',
        title: 'City Tour Punta Arenas', tipo: 'some_tipo', path: '/punta-arenas-tour.jpg', mensajeWSP: '', imagen: '/punta-arenas-tour.jpg'
      },
      {
        href: '/tours/punta-arenas/isla-magdalena', price: 1000,
        content: 'El Tour Isla Magdalena comprende la visita a un ecosistema único. Isla Magdalena es una isla chilena ubicada en el Estrecho de Magallanes, conocida por ser Monumento Natural de los Pingüinos, podrás interactuar con Pingüinos de Magallanes o también conocidos como Pingüino Patagónico. Podrás admirar y fotografiar especies maravillosas como Cormoranes, Gaviotas Australes y Palomas Antárticas, elefantes marinos y lobos de mar, especies bajo protección a la vida silvestre por lo que la interacción no es permitida, pero el desembarco en Isla Magdalena nos permitirá brindar una experiencia inolvidable con otras especies y los inigualables pingüinos. La duración del tour es de 10 horas si el inicio es en Puerto Natales y 4 horas desde Punta Arenas.',
        title: 'Pingüinera isla Magdalena', tipo: 'some_tipo', path: '/isla-magdalena.png', mensajeWSP: '', imagen: '/isla-magdalena.png'
      },
      {
        href: '/tours/punta-arenas/fuerte-bulnes', price: 1000,
        content: 'Comenzaremos esta actividad con la recogida en el hotel para dirigirnos hacia el Parque del Estrecho de Magallanes y comenzar este tour Fuerte Bulnes. Primero, visitaremos el centro geográfico de Chile, hito que marca el centro del país, considerando el territorio antártico. Luego, visitaremos el fuerte, que fue el primer asentamiento chileno en la Patagonia, que sufrió las inclemencias climáticas del duro invierno, lo que obligó a sus habitantes a trasladarse a lo que hoy es Punta Arenas. En el fuerte, pasaremos por el centro de visitantes para conocer más sobre la historia natural y humana del estrecho de Magallanes.',
        title: 'Fuerte Bulnes', tipo: 'some_tipo', path: '/fuerte-bulnes.png', mensajeWSP: '', imagen: '/fuerte-bulnes.png'
      }
    ], image: '/punta-arenas.png'
  },
  'Puerto Natales': {
    href: '/tours/puerto-natales', tours: [
      {
        href: '/tours/puerto-natales/city-tour-pnt', price: 1000,
        content: 'Recorre los atractivos culturales y naturales más relevantes de la ciudad. Se visitará el bello mirador Villa Cariño, inigualable punto de vista de la ciudad y su geografía circundante, el muelle de Pescadores Artesanales, lugar de faenas de recursos marinos e importante fuente de trabajo para gran parte de la población, el antiguo Frigorífico Puerto Bories, importante industria manufacturera que significó el surgimiento de la ciudad a comienzos de siglo XX, hoy en día, Monumento Histórico Nacional, entre muchos otros puntos atractivos.',
        title: 'City Tour Puerto Natales', tipo: 'some_tipo', path: '/puerto-natales.png', mensajeWSP: '', imagen: '/puerto-natales.png'
      },
      {
        href: '/tours/puerto-natales/cabalgata-dorotea', price: 1000,
        content: 'Cabalga en Puerto Natales hasta la cumbre de la sierra Dorotea. Esta sierra sirve de frontera natural entre Chile y Argentina y desde lo alto es posible observar todo el entorno de la zona, en especial la ciudad de Natales con el golfo Almirante Montt y fiordo de Última Esperanza. La aventura hasta el mirador es guiada por un baqueano local entre bosques y praderas. El nivel físico que se requiere así como la experiencia del jinete es bajo. Los caballos son ejemplares patagónicos acostumbrados en estos paseos de turismo. Un gran imperdible de medio día en Puerto Natales.',
        title: 'Cabalgata cerro Dorotea', tipo: 'some_tipo', path: '/dorotea.png', mensajeWSP: '', imagen: '/dorotea.png'
      },
      {
        href: '/tours/puerto-natales/cabalgata-sofia', price: 1000,
        content: 'Visitaremos uno de los sectores más bellos en las cercanías de Puerto Natales, la hermosa laguna Sofía, ubicada a escasos 25 minutos de la ciudad. {<br/>}Realizaremos una cabalgata de 3 horas en donde llegaremos al Mirador Cóndor, ubicado en la Sierra Señoret. Durante la excursión recorreremos  bosques de Lenga cruzando ríos y gran diversidad de fauna. Al llegar al mirador podremos avistar al majestuoso Cóndor Andino junto a la espectacular geografía esculpida por la era glaciar.',
        title: 'Cabalgata laguna Sofía', tipo: 'some_tipo', path: '/laguna-sofia.png', mensajeWSP: '', imagen: '/laguna-sofia.png'
      },
      {
        href: '/tours/puerto-natales/cueva-milodon', price: 1000,
        content: 'A solo 30 minutos de Puerto Natales se ubica este importante monumento natural, donde podrá conocer uno de los sitios arqueológicos y paleontológicos más importantes de Patagonia.  Visitaremos el bello mirador de la cueva principal, desde donde obtendrá una de las mejores vistas de la provincia, por sobre los 350 metros sobre el nivel del mar. Se observarán los rasgos geológicos e hidrográficos que hablan del gélido pasado regional, además de observar el paisaje patagónico en gran plenitud. Posterior a esto se hará un recorrido por las tres cuevas de la reserva, dirigiéndonos primeramente hacia  la denominada “Cueva Chica”. A esta caverna, interesante por sus dimensiones, se puede acceder hasta casi su fondo para divisar las extraordinarias formaciones producto del goteo entre las rocas y los sedimentos carbonatados. Visitada esta cueva, seguiremos nuestra ruta esta vez hacia la Cueva del Medio, lugar donde se encontró el fechado más antiguo del poblamiento humano primitivo de la Patagonia hace 12.000 años aproximadamente, siendo uno de los sitios arqueológicos más importantes del cono sur. Para finalmente dirigirnos a la más grande y famosa de estas, la Cueva del Milodón. Esta gran caverna de 200 metros de profundidad donde fueron encontrados a fines del siglo XIX restos orgánicos del extinto animal, posee en su interior un gran circuito con paneles informativos y réplica en tamaño real para el interés de los visitantes.',
        title: 'Cueva del milodón', tipo: 'some_tipo', path: '/cueva-milodon.png', mensajeWSP: '', imagen: '/cueva-milodon.png'
      },
      {
        href: '/tours/puerto-natales/navegacion-balmaceda', price: 1000,
        content: 'Este es un imperdible si visitas Puerto Natales. Te invitamos a navegar por los fiordos  australes del confín del mundo. Durante el día podrás apreciar la flora y fauna nativa, visitar los Glaciares Balmaceda & Serrano, y disfrutar de un rico Whisky con hielo milenario. Por último en el retorno hacia puerto natales se detendrán en estancia perales para disfrutar de un rico asado de cordero Magallánico en un ambiente incomparable.',
        title: 'Navegación glaciar Balmaceda y Serrano', tipo: 'some_tipo', path: '/balmaceda-serrano.png', mensajeWSP: '', imagen: '/balmaceda-serrano.png'
      }
    ], image: '/image2.png'
  },
  'Torres del Paine': {
    href: '/tours/torres-del-paine', tours: [
      {
        href: '/tours/torres-del-paine/full-day', price: 1000,
        content: 'Este tour inicia desde Puerto Natales en direccion al Parque Nacional Torres del Paine. En el recorrido se realizaran paradas en bellos miradores tales como Lago Sarmiento, Laguna Amarga, Cascada Paine,Lago Nordenskjold, Lago Pehoe, Puente weber,realizando pequeñas caminatas a los miradores Salto Grande y Playa Lago Grey, para finalizar en el Monumento Natural Cueva del Milodón. Aquí vistaremos la gran caverna que da nombre a la reserva para finalmente regresar a Puerto Natales.',
        title: 'Full Day', tipo: 'some_tipo', path: '/full-day.png', mensajeWSP: '', imagen: '/full-day.png'
      },
      {
        href: '/tours/torres-del-paine/base-torres', price: 1000,
        content: 'Trekking Mirador bases Torres. En este  Tour podrás disfrutar de increíbles ríos, laguna  de color turquesa, bosques vírgenes, majestuosos macizos y  glaciares. Saliendo de Puerto Natales, rumbo al Parque Nacional Torres del Paine, tras un viaje que dura alrededor de 2:30 horas se llega hasta el centro de bienvenida  para dar inicio al trekking. El sendero tiene un recorrido de 11 kilómetros, ascendiendo a través del hermoso  valle Asencio junto al río de igual nombre, internándose en densos bosques nativos y teniendo en todo momento en frente  imponentes montañas y glaciares; después de cuatro horas, se llega al famoso mirador Base de las Torres. Una vez aquí se tendrá la oportunidad de disfrutar de una de las mejores vistas de esta reserva de la biósfera, los 3 gigantes de granito junto la laguna y glaciar Torres, el Monte Almirante Nieto, Cordón Oggioni y la biodiversidad característica de la zona. Siendo de esta manera un destino imperdible si eres amante de la naturaleza y el trekking. ',
        title: 'Trekking base torres', tipo: 'some_tipo', path: '/base-torres.png', mensajeWSP: '', imagen: '/base-torres.png'
      },
      {
        href: '/tours/torres-del-paine/navegacion-grey', price: 1000,
        content: 'En el lado oeste del Parque Nacional, visitarás uno de los glaciares más famosos de Patagonia, el bello Glaciar Grey. Según el periodo de la temporada , existen 4 posibilidades de navegación teniendo que hacer un checkin una hora antes de cada sarpe. El tour tiene  tres horas de duración navegando  por todo el lago, surcado por medio de gigantes témpanos de hielo que flotan a la deriva, y con la imponente cordillera Paine de telón de fondo. Junto a un buen whisky con hielo milenario, estarán en  el frontis mismo del glaciar, donde se podrá apreciar increíbles desprendimiento de hielo y avistar el Campo de Hielo Sur, la tercera reserva de agua dulce más grande del Planeta. Una vez regresando a nuestra Van, se inicia el retorno a Puerto Natales por la costa del Lago Toro, el lago más grande de la región de Magallanes.',
        title: 'Navegación glaciar Grey', tipo: 'some_tipo', path: '/glaciar-grey.png', mensajeWSP: '', imagen: '/glaciar-grey.png'
      }
    ], image: '/image1.png'
  },
  'Argentina': {
    href: '/tours/argentina', tours: [
      {
        href: '/tours/argentina/perito-moreno-fd', price: 1000,
        content: 'saliendo desde Puerto Natales a las 07:00 am y retornando alrededor de las 22:00hrs. Posterior a cruzar las fronteras chilena y argentina en Cerro Castillo y Cancha Carrera, la ruta recorre la inmensidad de la estepa patagónica argentina, para llegar a la pintoresca ciudad de El Calafate, a unos 270 kilómetros al norte de Puerto Natales. Durante el trayecto se pueden avistar especies de fauna local como guanacos y ñandúes, y apreciar también el lago Argentino y el río Santa Cruz en su camino al océano Atlántico. Desde acá restan 45 minutos a 1 hora para ingresar al Parque Nacional Los Glaciares, con su principal gran atractivo, el Glaciar Perito Moreno. Este ofrece un espectáculo de imágenes y sonidos, los ligeros desprendimientos de hielo ocurren permanentemente, por lo que es muy posible presenciar este particular fenómeno de la naturaleza. La singularidad del glaciar no sólo recae en sus 30 km de largo y su fácil acceso, sino también en que es uno de los pocos que se encuentra avanzando, mientras la mayoría de los glaciares del mundo se encuentran retrocediendo. Las pasarelas, balcones y miradores instalados en el parque nacional permite acercarse al Perito Moreno sin peligro incluso a personas mayores o con alguna discapacidad física. Posterior a dos horas en el Parque Nacional, la excursión concluye con el regreso a Puerto Natales por la misma ruta.',
        title: 'Glaciar Perito Moreno full day', tipo: 'some_tipo', path: '/perito-moreno-fd.png', mensajeWSP: '', imagen: '/perito-moreno-fd.png'
      },
      {
        href: '/tours/argentina/perito-moreno-td', price: 1000,
        content: 'En este tour es posible visitar durante la tarde la ciudad de El Calafate para el día siguiente salir temprano hacia el glaciar Perito Moreno, pudiendo así incorporar la navegación en el lago para acercarse al Glaciar Perito Moreno. Esta modalidad, permite estar en el parque desde temprano hasta las 16:00 horas pudiendo tener mucho más tiempo para disfrutar esta maravilla perteneciente a campos de hielo sur y todos sus encantos.',
        title: 'Glaciar Perito Moreno full tour', tipo: 'some_tipo', path: '/perito-moreno-tc.png', mensajeWSP: '', imagen: '/perito-moreno-tc.png'
      }
    ], image: '/argentina.png'
  },
}

Object.values(Ciudades).forEach(ciudad => {
  ciudad.tours.forEach(tour => {
    tour.mensajeWSP = `Hola! Me gustaría cotizar el tour: ${tour.title}`
  })
})


export {
  Links,
  Contacto,
  Ciudades,
}


