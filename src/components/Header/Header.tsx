import logo from '../../images/logo.png';
import './Header.css'
import { BsCart3 as CartIcon } from 'react-icons/bs'

type HeaderType = {
  cart: boolean
  setCart: any
}

const Header = ({ cart, setCart }: HeaderType) => {
  return (
    <div className='header'>
        <a href="/">
            <div className='header-section'>
                <img src={logo} alt="logo" className='logo-img'/>
                <div className='logo-title'>Organic eCommerce</div>
            </div>
        </a>
        
        <div className='header-section' onClick={() => setCart(!cart)}>
            <CartIcon className='cart-icon'/>
            <div className='cart-header-title'>CART</div>
        </div>
    </div>
  )
}

export default Header