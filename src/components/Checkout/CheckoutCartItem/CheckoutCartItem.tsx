import './CheckoutCartItem.css'

type CheckoutCartItemProps = {
    item: {
        pimg: string
        ptitle: string
        pprice: number
        punits: number
    }
}

const CheckoutCartItem = ({ item }: CheckoutCartItemProps) => {
  return (
    <div className="checkout-cart-item">
        <div className="checkout-item-img">
            <img src={item.pimg}/>
        </div>

        <div className="checkout-item-title">{item.ptitle}</div>

        <div className="checkout-item-units">
            <div className="checkout-item-units-number">
                {item.punits}
            </div>
        </div>

        <div className="checkout-item-price">${(item.pprice*item.punits).toFixed(2)}</div>
    </div>
  )
}

export default CheckoutCartItem