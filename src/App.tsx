import { useState } from "react";

import Header from "./components/Header/Header";
import Showcase from "./components/Showcase/Showcase";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CartSymbol from "./components/CartSymbol/CartSymbol";
import NewItem from "./components/NewItem/NewItem";
import Checkout from "./components/Checkout/Checkout";

import milk from './images/milk.jpg'
import pomegranate from './images/pomegranate.jpg'
import grapes from './images/grapes.jpg'
import pumpkin from './images/pumpkin.jpg'
import orange from './images/orange.jpg'
import mushroom from './images/mushroom.jpg'

function App() {

  /* Products to sell */
  const [products, setProducts] = useState([
    {
      pimg: milk, 
      ptitle: 'Cow Milk',
      pdescription: 'Organic milk produced by our family farm.',
      pprice: 3.99
    },
    {
      pimg: pomegranate, 
      ptitle: 'Pomegranate',
      pdescription: 'Mouthwatering pomegranates produced by our family grounds.',
      pprice: 4.99
    },
    {
      pimg: grapes, 
      ptitle: 'Grapes',
      pdescription: 'Delicious grapes produced by our family grounds.',
      pprice: 5.99
    },
    {
      pimg: pumpkin, 
      ptitle: 'Pumpkin',
      pdescription: 'Fresh pumpkins produced by our family grounds.',
      pprice: 6.99
    },
    {
      pimg: orange, 
      ptitle: 'Orange',
      pdescription: 'Sweet oranges produced by our family grounds.',
      pprice: 7.99
    },
    {
      pimg: mushroom, 
      ptitle: 'Mushroom',
      pdescription: 'Tasty mushrooms produced by our family grounds.',
      pprice: 8.99
    }
  ])

  /* Activate view cart */
  const [cart, setCart] = useState(false)

  /* Items to buy */
  const [items, setItems] = useState([
  ])
  /* Each element: {pimg, ptitle, pprice, punits} */

  /* Trigger adding new item animation */
  const [animationTrigger, setAnimationTrigger] = useState(false)

  /* Checkout page */
  const [inCheckout, setInCheckout] = useState(false)

  return (
    <div className="App">
      {inCheckout 
        ? <Checkout 
            inCheckout={inCheckout}
            setInCheckout={setInCheckout}
            items={items}
          /> 
        : <>
          <Header cart={cart} setCart={setCart}/>
          <Showcase />
          <Products 
            products={products} 
            items={items} 
            setItems={setItems} 
            animationTrigger={animationTrigger}
            setAnimationTrigger={setAnimationTrigger}
          />
          <Footer />

          {cart 
            ? <Cart 
                items={items}
                setItems={setItems}
                cart={cart}
                setCart={setCart}
                inCheckout={inCheckout}
                setInCheckout={setInCheckout}
              /> 
            : items.length !== 0 && 
              <>
                <CartSymbol 
                  cart={cart}
                  setCart={setCart}
                />
                {animationTrigger && <NewItem />}
              </>
          }
      </>}
      
    </div>
  );
}

export default App;
