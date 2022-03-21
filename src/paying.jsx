import React, { Component } from 'react';
import './paying.css';
import {Button, Card,ListGroup,ListGroupItem,Row} from 'react-bootstrap';
// const Paying = (props) => {
//     return ( 
//         <React.Fragment>
//              <Row xs={3} md={6} className="g-3" style={{padding :'5px',margin:'auto'}} >
//                 {props.Food.map(p=>
//                     <Card style={{ width: '18rem' ,margin:'6px'}}>
//                     <Card.Img variant="top" src={p.imdSrc} />
//                     <Card.Body>
//                       <Card.Title>{p.name}</Card.Title>
//                       <Card.Text>{p.Details}</Card.Text>
//                     </Card.Body>
//                     <ListGroup className="list-group-flush">
//                       <ListGroupItem>price : {p.price}</ListGroupItem>
//                       <ListGroupItem>Count : {p.count}</ListGroupItem>
//                       <Button onClick={()=> props.increment(p) }>+</Button> 
//                       <br/>
//                         <Button onClick={()=> props.decrement(p) }>-</Button>
//                     </ListGroup>
//                     <Card.Body>
//                       <Card.Link onClick={()=>props.delete(p)} style={{cursor:'pointer'}}>

//                       <i class="fas fa-trash"> Delete</i>
//                       </Card.Link>
//                       <Card.Link onClick={()=>props.reset(p)} style={{cursor:'pointer'}}>
                          
//                       <i class="fas fa-retweet">
//                           Reset Count
//                       </i>
//                       </Card.Link>
//                     </Card.Body>
//                   </Card>
                    
//                     )}
//                     </Row>
//         </React.Fragment>
//      );
// }
 
// export default Paying;


const Paying = (props) => {
  return ( 
    <React.Fragment>
      <Row xs={3} md={6} className="g-3" style={{padding :'5px',margin:'auto'}} >

      {props.Food.map(p=>
      
<div id="container">

<div class="product-details">

  <h1>{p.name}</h1>
  <p class="information">{p.count}</p>
  <span class="hint-star star">
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
  </span>

  

  <div class="control">
  <button class="btno"onClick={()=> props.increment(p) }>
  
      <span class="shopping-cart"><i class="fa fa-plus" aria-hidden="true"></i></span>
      <span class="buy">Add</span>
    </button>
    <button class="btno"onClick={()=> props.decrement(p) }>
  <span class="shopping-cart"><i class="fa fa-minus" aria-hidden="true"></i>
</span>
  <span class="buy">Sub</span>
</button>

    <button class="btno"onClick={()=>props.delete(p)}>
 
      <span class="shopping-cart"><i class="fa fa-trash" aria-hidden="true"></i></span>
      <span class="buy">Delete</span>
    </button>
    
    <button class="btno" onClick={()=>props.reset(p)}>
      <span class="shopping-cart"> <i class="fas fa-retweet"></i></span>
      <span class="buy">Reset Count</span>
    </button>

    <button class="btno">
      <span class="price">${p.price}</span>
      <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
      <span class="buy">Get now</span>
    </button>

  </div>

</div>

<div class="product-image">

  <img src={p.imdSrc} alt="" />

  <div class="info">
    <h2> Description</h2>
    <ul>
      <li>{p.Details}</li>

    </ul>
  </div>
</div>

</div>

)}

      </Row>
    </React.Fragment>
   );
}
 
export default Paying;