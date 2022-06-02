import React from 'react';
import {Card,Button,Row,Col,ToggleButton} from 'react-bootstrap';
import Cart from './cart';
import './food.css';
const Food = (props) => {
  return (
  <React.Fragment>
  <ul class="cards">
      {props.Food.map(p=>(
     <li>
    <a class="card">
      <img src={p.imdSrc} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
        <Button class="card__thumb" className='btn' onClick={()=>props.handle(p)}>
           <Cart onClick={props.handle}  CartInFood={p} />
             </Button>{''}
          <div class="card__header-text">
            <h3 class="card__title">{p.name}</h3>            
            <span class="card__status">price : {p.price} $</span>
          </div>
        </div>
        <p class="card__description">{p.Details}</p>
      </div>
    </a>      
  </li> 
      ))}
</ul>

  </React.Fragment> );
}
 
export default Food;