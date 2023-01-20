import { Link } from '@yext/pages/components';
import * as React from 'react'
import "../assets/css/card.css"


type CardProps = {
  item: any;
  name: any;
};
const CardList=({ name, item}: CardProps)=> {
  
  return (
    <>


<div className="main-container">
  <div className="cards">
    <div className="card card-1">
      <div className="card__icon"><i className="fas fa-bolt" /></div>
      <p className="card__exit"><i className="fas fa-times" /></p>
      <h2 className="card__title">{name}</h2>
      <p className="card__apply">
       <button className='card-button'><Link className="card__link" href={item}>{"Get Details"}<i className="fas fa-arrow-right" /></Link></button> 
      </p>
    </div>
  </div></div>


    </>
  )
}

export default CardList;