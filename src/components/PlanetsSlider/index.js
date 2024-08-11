import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const PlanetsSlider = ({planetsList}) => (
  <div className="slick-container">
    <h1 className="title">PLANETS</h1>
    <Slider {...settings}>
      {planetsList.map(data => (
        <PlanetItem data={data} key={data.id} />
      ))}
    </Slider>
  </div>
)

export default PlanetsSlider
