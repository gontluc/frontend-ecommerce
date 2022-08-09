import './Cart.css'
import { TbArrowBackUp as ArrowIcon } from 'react-icons/tb'
import CartItem from "./CartItem/CartItem";

type CartType = {
  items: {
    pimg: string
    ptitle: string 
    pprice: number
    punits: number
  }[]
  setItems: any
  cart: boolean
  setCart: any
  inCheckout: boolean
  setInCheckout: any
}

const Cart = ({ items, setItems, cart, setCart, inCheckout, setInCheckout }: CartType) => {

  function sumItems(): number {
    let nitems = 0
    items.map((item) => nitems += item.punits)
    return nitems
  }

  function sumPrice(): string {
    let tprice = 0
    items.map((item) => tprice += item.pprice * item.punits)
    return tprice.toFixed(2)
  }

  return (
    <div className='cart'>
      <div className="cart-title">
        <h2>SHOPPING CART</h2>
        <div className="arrow-icon" onClick={() => setCart(!cart)}>
          <ArrowIcon />
        </div>
      </div>

      <div className="cart-items">
        {items.map((item) => 
          <CartItem item={item} key={item.ptitle} items={items} setItems={setItems}/>
        )}
      </div>

      <div className="cart-end">
        <div>
          <h3 className='subtotal'>SUBTOTAL {sumItems()} ITEM{sumItems() !== 1 && 'S'}</h3>
          <p className='final-price'>${sumPrice()}</p>
        </div>
        <div>
          <div className='checkout-btn' onClick={() => items.length !== 0 && setInCheckout(!inCheckout)}>
            Checkout
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart