import './CartSymbol.css'
import { BsCart3 as CartIcon } from 'react-icons/bs'

type CartSymbolType = {
    cart: boolean
    setCart: any
}

const CartSymbol = ({ cart, setCart }: CartSymbolType) => {
  return (
    <div className="cart-symbol" onClick={() => setCart(!cart)}>
        <CartIcon />
    </div>
  )
}

export default CartSymbol