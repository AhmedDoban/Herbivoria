import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import NavBAr from './navbar';
import Food from './food';
import LogIn from './login';
import SignUP from './signup';
import Paying from './paying';

class App extends React.Component  {
  state ={
    home : [
     {
          id :1,
          nameSlider :require('./Img/slider_482.jpg').default,
     },
     {
        id :2,
        nameSlider :require('./Img/slider2_136.jpg').default,
 }, 
    ],
    home1 : [
      {
        name: "Parma Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 17,
        imdSrc : require('./Img/food/parma_187.png').default,
        Details :"140 gr. 100% chicken fillet, mozzarella cheese, mushroom sauce with parmesan, arugula, pesto sauce, pickles, tomato, home sauce, special burger bread, french fries (approx. 140gr).",
      },
      {
        name: "Ring Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 18,
        imdSrc : require('./Img/food/ring_592.png').default,
        Details :"140 gr. 100% beef, double cheddar cheese, fresh onion slices, crispy onions, Mediterranean Greens, tomatoes, pickles, home sauce, special burger buns, french fries (avg. 140gr)",
      },
    ]
    ,  
    food : [
      {
        name: " 3 -Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 4,
        imdSrc : require('./Img/food/3-threshuthomeburger_113.png').default,
        Details :"150 gr. 100% beef, [50gr. x 3 pieces of beef], [classic, cheese, mushroom], special burger bun, french fries (approx. 140gr).",

      },{
        name: "bacon Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 5,
        imdSrc : require('./Img/food/bacon_685.png').default,
        Details :"140 gr. 100% beef, beef bacon, cheddar cheese, mixed pepper, caramelized onions, Mediterranean greens, tomatoes, pickles, fresh mint, home sauce, special burger bread, french fries (avg. 140gr).",
      },{
        name: "chefs Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 6,
        imdSrc : require('./Img/food/chefs_749.png').default,
        Details :"140 gr. 100% beef, 70gr. Beef bacon, grilled halloumi, mushrooms with special sauce, tomatoes, Mediterranean greens, fresh mint, home sauce, special burger bread, french fries (approx. 140gr).",
      },{
        name: "chicken Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 7,
        imdSrc : require('./Img/food/chicken_170.png').default,
        Details :"70 gr. 100% chicken fillet, mediterranean greens, tomatoes, pickles, home sauce special burger bread, french fries (approx. 140gr).",
      },{
        name: "diet Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 8,
        imdSrc : require('./Img/food/diet_984.png').default,
        Details :"140 gr. 100% beef, in iceberg lettuce (with wholemeal bread, if desired), fresh basil, fresh mint, grilled halloumi cheese, tomatoes, mixed peppers, pickles, home sauce, seasonal vegetables.",
      },{
        name: "egg Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 9,
        imdSrc : require('./Img/food/egg_605.png').default,
        Details :"140 gr. 100% beef, beef bacon, cheddar cheese, fried egg, tomato, pickles, home sauce, special burger bread, french fries (approx. 140gr)",
      },{
        name: "fire Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 10,
        imdSrc : require('./Img/food/fire_656.png').default,
        Details :"140 gr. 100% beef, mixed pepper, cheddar cheese, jalapeno pickles, caramelized onions, Mediterranean Greens, tomatoes, pickles, home sauce, special burger bread, french fries (avg. 140gr).",
      },{
        name: "HOME CLASSIC BURGER",
        price:0,
        count: 0,
        isInCart: false,
        id: 11,
        imdSrc : require('./Img/food/homeburger_494.png').default,
        Details :"100% beef, mediterranean greens, tomatoes, pickles, home sauce, special burger bread, french fries (approx. 140gr)",
      },{
        name: "HOME CHEESE BURGER",
        price:0,
        count: 0,
        isInCart: false,
        id: 12,
        imdSrc : require('./Img/food/homeburger_973.png').default,
        Details :"100% beef, double cheddar cheese, mediterranean greens tomatoes, pickles, caramelized onions, home sauce special burger bread, french fries (approx. 140gr)",
      },{
        name: "HOME CHEESE BURGER",
        price:0,
        count: 0,
        isInCart: false,
        id: 13,
        imdSrc : require('./Img/food/homeburger-copy_379.png').default,
        Details :"100% beef, double cheddar cheese, mediterranean greens tomatoes, pickles, caramelized onions, home sauce special burger bread, french fries (approx. 140gr)",
      },{
        name: "HOME KIDS CHICKEN BURGER",
        price:0,
        count: 0,
        isInCart: false,
        id: 14,
        imdSrc : require('./Img/food/home-kids-tavuk-burger_169.png').default,
        Details :"70 gr. 100% chicken fillet, mediterranean greens, tomatoes, pickles, home sauce special burger bread, french fries (approx. 140gr).",
      },{
        name: "kids beef Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 15,
        imdSrc : require('./Img/food/kids-et_251.png').default,
        Details :"70 gr. 100% beef, mediterranean greens tomatoes, pickles, home sauce special burger bread, french fries (approx. 140gr)",
      },{
        name: "lui Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 16,
        imdSrc : require('./Img/food/lui_402.png').default,
        Details :"140 gr. 100% beef, double cheddar cheese, coleslaw salad, tomato, pickles, match potatoes, special burger bun, french fries (approx. 140gr).",
      },{
        name: "Parma Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 17,
        imdSrc : require('./Img/food/parma_187.png').default,
        Details :"140 gr. 100% chicken fillet, mozzarella cheese, mushroom sauce with parmesan, arugula, pesto sauce, pickles, tomato, home sauce, special burger bread, french fries (approx. 140gr).",
      },
      {
        name: "Ring Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 18,
        imdSrc : require('./Img/food/ring_592.png').default,
        Details :"140 gr. 100% beef, double cheddar cheese, fresh onion slices, crispy onions, Mediterranean Greens, tomatoes, pickles, home sauce, special burger buns, french fries (avg. 140gr)",
      },
      {
        name: "town Burger",
        price:0,
        count: 0,
        isInCart: false,
        id: 19,
        imdSrc : require('./Img/food/town_207.png').default,
        Details :"140 gr. 100% beef, roasted eggplant, mozzarella, dried tomatoes, pickles, fresh basil, mediterranean greens, home sauce, special burger bread, french fries (avg. 140gr)",
      },
      
    ]
    ,Drinks :[
      {
        name: "water",
        price:0,
        id: 6,
        count: 0,
        isInCart: false,
        imdSrc :require('./Img/water.jpg').default,
      },
      {
        name: "Big Cola",
        price:0,

        count: 0,
        isInCart: false,
        id: 4,
        imdSrc :require('./Img/BigCola.jpg').default,
      },
      {
        id: 3,
        name: "Cola",
        count: 0,
        price:0,
        isInCart: false,
        imdSrc :require('./Img/Cola.jpg').default,
      },
  ],
  Dessert :[
    {
    id: 2,
    name: "Fries",
    count: 0,
    price:0,
    isInCart: false,
    imdSrc :require('./Img/Frise.jpg').default,
  },
]
  }

  handelInCartChange =(addto)=>{
    const food = [...this.state.food];
    const index = food.indexOf(addto);
    food[index] = { ...food[index] };
    //Edit
    food[index].isInCart = !food[index].isInCart;
    //Set State
    this.setState({ food });
 }
 increment=(x)=>{
  const food = [...this.state.food];
  const index = food.indexOf(x);
  food[index] = { ...food[index] };
  //Edit
  food[index].count++;
  //Set State
  this.setState({ food });
 }
 decrement=(x)=>{

  const food = [...this.state.food];
  const index = food.indexOf(x);
  food[index] = { ...food[index] };
  //Edit
  if(food[index].count>0){
    food[index].count--;
  }
  //Set State
  this.setState({ food });
 }
 handelreset =(x)=>{
  const food = [...this.state.food];
  const index = food.indexOf(x);
  food[index] = { ...food[index] };
  //Edit
  food[index].count=0;
  //Set State
  this.setState({ food });
}
handelDelete =  del =>{
  const food =this.state.food.filter(c=>c.id !== del.id);
  this.setState({food})
  }


  render() { 
    return (
      <React.Fragment>
        <NavBAr  
        Count1={this.state.home1.filter((p) => p.isInCart).length}
        Count2={this.state.food.filter((p) => p.isInCart).length}
        />
        <main>
        <Route path="/home" 
                        render={
                        (props)=><Home
                        sliders={this.state.home}
                        home={this.state.home1}
                        handle={this.handelInCartChange}
                        {...props}
                        />
                    }
                    />
        <Route path="/Food"
                        render={
                          (props)=><Food
                          Food={this.state.food}
                          handle={this.handelInCartChange}
                          {...props}
                          />
                        }/>
          <Route path="/login"
                        render={
                          (props)=><LogIn
                          {...props}
                          />
                        }/>
          <Route path="/signup"
                        render={
                          (props)=><SignUP
                          {...props}
                          />
                        }/>
            <Route path="/cart" render={
              (props)=><Paying
              Food={this.state.food.filter(p=>p.isInCart)}
              increment={this.increment}
              decrement={this.decrement}
              delete={this.handelDelete}
              reset={this.handelreset}
              {...props}
              />
            }/>
                        

          </main>
        </React.Fragment>
    );
  } 
}
 
export default App;   