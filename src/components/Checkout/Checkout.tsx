import './Checkout.css'
import CheckoutCartItem from './CheckoutCartItem/CheckoutCartItem';

import logo from '../../images/logo.png';
import payment1 from '../../images/payment4.png';
import payment2 from '../../images/payment2.png';
import payment3 from '../../images/payment3.png';

import { AiOutlineRight as RightArrow } from 'react-icons/ai'
import { BsCheckLg as CheckIcon } from 'react-icons/bs'

type CheckoutProps = {
    inCheckout: boolean
    setInCheckout: any
    items: {
        pimg: string 
        ptitle: string 
        pprice: number 
        punits: number
    }[]
}

const Checkout = ({ inCheckout, setInCheckout, items }: CheckoutProps) => {

    function sumPrice(): string {
        let tprice = 0
        items.map((item) => tprice += item.pprice * item.punits)
        return tprice.toFixed(2)
      }

  return (
    <div className='checkout-page'>
        <div className="left-checkout">
            <div className='checkout-header'>
                <img src={logo} alt="logo" className='checkout-img'/>
                <h2>Organic eCommerce</h2>
            </div>

            <div className="checkout-map">
                <div className="map-cart" onClick={() => setInCheckout(!inCheckout)}>
                    Cart
                </div>
                <RightArrow className='right-arrow-icon'/>
                <div className="map-customer">Customer Information</div>
                <RightArrow className='right-arrow-icon'/>
                <div className="map-shipping">Shipping Method</div>
                <RightArrow className='right-arrow-icon'/>
                <div className="map-payment">Payment Method</div>
            </div>

            <div className="payment-options">
                <div className="payment-option">
                    <img src={payment1} className='payment1'/>
                </div>
                <div className="payment-option">
                    <img src={payment2} className='payment2'/>
                </div>
                <div className="payment-option">
                    <img src={payment3} className='payment3'/>
                </div>
            </div>

            <div className="or-other">
                <div className="line-left"></div>
                <div>OR</div>
                <div className="line-right"></div>
            </div>

            <div className="contact-info">
                <h3>Contact information</h3>
                <h4>Already have an account? <strong>Log in</strong></h4>
            </div>

            <div className="info-box">Email</div>

            <div className="notifications">
                <div className="box-notifications">
                    <CheckIcon />
                </div>
                <h4>Keep me up to date on news and exclusive offers</h4>
            </div>

            <div className="shipping-info">
                <h3>Shipping address</h3>
            </div>

            <div className="info-box">Name</div>

            <div className="info-box">Address</div>

            <div className="info-box">Country</div>

            <div className="info-box">Phone (optional)</div>

            <div className="bottom-info">
                <div onClick={() => setInCheckout(!inCheckout)}>
                    <RightArrow className='left-arrow-icon'/>
                    <h3>Return to cart</h3>
                </div>
                <h4>Continue to shipping method</h4>
            </div>
        </div>

        <div className="right-checkout">
            <div className="checkout-cart-items">
                {items.map((item) => <CheckoutCartItem item={item} key={item.ptitle}/>)}
            </div>

            <div className="gift-card">
                <p>Gift card or discount code</p>
                <div>Apply</div>
            </div>

            <div className="subtotal-checkout">
                <p>Subtotal</p>
                <div>${sumPrice()}</div>
            </div>

            <div className="shipping-checkout">
                <p>Shipping</p>
                <div>-</div>
            </div>

            <div className="total-checkout">
                <p>Total</p>
                <div><strong>USD</strong> ${sumPrice()}</div>
            </div>
        </div>
    </div>
  )
}

export default Checkout