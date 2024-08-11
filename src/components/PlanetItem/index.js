import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data
  return (
    <div className="container" data-testid="planets">
      <div className="planet-info">
        <img src={imageUrl} alt={`planet ${name}`} />
        <h2 className="planet-name">{name}</h2>
        <p className="planet-description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
