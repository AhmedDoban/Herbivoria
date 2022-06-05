import React from 'react';
import { Route } from 'react-router-dom';
import Home from "./Home";

class App extends React.Component {
  state ={
    Slider : [
      {id:2,url :require('./Img/slider2.jpg').default}, 
      {id:1,url :require('./Img/slider1.jpg').default},
      {id:3,url :require('./Img/slider3.jpg').default},
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
        name: "Coffe",
        price:15,
        id: 2,
        count: 0,
        isInCart: false,
        imdSrc :require('./Img/drinks/coffe.JPG').default,
      },
      {
        name: "TEA",
        price:6,
        id: 1,
        count: 0,
        isInCart: false,
        imdSrc :require('./Img/drinks/tea.jpg').default,
      },
      {
        name: "water",
        price:4,
        id: 6,
        count: 0,
        isInCart: false,
        imdSrc :require('./Img/drinks/water.jpg').default,
      },
      {
        name: "Big Cola",
        price:15,

        count: 0,
        isInCart: false,
        id: 4,
        imdSrc :require('./Img/drinks/BigCola.jpg').default,
      },
      {
        id: 3,
        name: "Cola",
        count: 0,
        price:10,
        isInCart: false,
        imdSrc :require('./Img/drinks/Cola.jpg').default,
      },
  ],
  Dessert :[
  {
    id: 1,
    name: "Cake",
    count: 0,
    price:25,
    isInCart: false,
    imdSrc :require('./Img/Dessert1.jpg').default,
  },
  {
    id: 2,
    name: "Cup Ckae",
    count: 0,
    price:30,
    isInCart: false,
    imdSrc :require('./Img/Dessert2.jpg').default,
  },
  {
    id: 3,
    name: "Fries",
    count: 0,
    price:15,
    isInCart: false,
    imdSrc :require('./Img/Dessert3.jpg').default,
  },
  {
    id: 4,
    name: "Choklet",
    count: 0,
    price:50,
    isInCart: false,
    imdSrc :require('./Img/Dessert4.jpg').default,
  },
  {
    id: 5,
    name: "Dessert",
    count: 0,
    price:40,
    isInCart: false,
    imdSrc :require('./Img/Dessert5.jpg').default,
  },
]
  }
  handelInCartChange=(parime)=>{
      const food = [...this.state.food];
      const index=food.indexOf(parime);
      food[index]={...food[index]};
      food[index].isInCart=!food[index].isInCart;

      this.setState({food});

  } 

  handelInCartChangeFroDrinks=(parime)=>{
    const Drinks=[...this.state.Drinks];
    const index=Drinks.indexOf(parime)
    Drinks[index]={...Drinks[index]};
    Drinks[index].isInCart=!Drinks[index].isInCart;
    this.setState({Drinks});
  }


  render(){
    return (
      <React.Fragment>
        <Route
        path="/Market"
        render={
          (props)=><Home 
             Slider={this.state.Slider}
             Food={this.state.food}
             Drinks={this.state.Drinks}
             Dessert={this.state.Dessert}
             handle={this.handelInCartChange}
             handleDrinks={this.handelInCartChangeFroDrinks}
             count1={this.state.food.filter(p=>p.isInCart).length}
             count2={this.state.Drinks.filter(p=>p.isInCart).length}
            {...props}
          />
        }
        />


      </React.Fragment>
    )

  }
}
export default App;