import '../styles/card.css'
const Card = ({ flags, name }) => {
  return (
    <div className='card bg-dark text-light'>
      <img src={flags?.svg} className='card-img-top cardImg' alt={name?.common} />
      <div className='card-body'>
        <h5 className='card-title m-0'>{name?.common}</h5>
      </div>
    </div>

  )
}

export default Card
