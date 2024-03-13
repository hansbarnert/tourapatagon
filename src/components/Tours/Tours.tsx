import './Tours.css'
import CardImg from '../CardImg/CardImg'
import { Container } from 'react-bootstrap'
import { ContentList } from '../Links'


export interface TourComponentProps {
  ContentList: ContentList[]
  Titulo: string
}

const ToursComponent: React.FC<TourComponentProps> = ({ ContentList, Titulo }) => {
  return (
    <Container fluid className='tours-container text-left mb-0'>
      <Container className='pb-5'>
        <h1 className='text-left py-4 my-0'>Tours en <span>{Titulo}</span></h1>
        <CardImg className='tours-container align-items-center justify-content-center' contentList={ContentList} rowClassName='mb-0' colClassName='col-12 col-md-12 col-lg-6' />
      </Container>
    </Container >
  )
}

export default ToursComponent
