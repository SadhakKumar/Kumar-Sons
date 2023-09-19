import { React, useNavigate } from 'react'
// import Rupee from '@mui/icons-material/CurrencyRupee'
// import Location from '@mui/icons-material/LocationOn'


function Card(props) {


  return (
    <div >
      <div className='card'>
        <img src={props.src} className='card__image' />
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__description'>{props.desc}</p>
        <div className='card__price'>Rs. {props.price}</div><div className='card__location'>{props.location}</div>
        <button className='card__btn'>View</button>
      </div>

    </div>
  )
}

export default Card