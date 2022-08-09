import './CartItem.css'
import { MdDelete as DeleteIcon } from 'react-icons/md'
import { GrFormAdd as AddIcon } from 'react-icons/gr'
import { MdRemove as RemoveIcon } from 'react-icons/md'

type CartItemProps = {
    item: {
        pimg: string
        ptitle: string
        pprice: number
        punits: number
    }
    items: {
        pimg: string
        ptitle: string 
        pprice: number
        punits: number
    }[]
    setItems: any
}

const CartItem = ({ item, items, setItems }: CartItemProps) => {
    function addUnit():void {
        item.punits++
        setItems([...items])
    }

    function removeUnit():void {
        item.punits === 1 ? removeCartItem() : item.punits-- && setItems([...items])
    }

    function removeCartItem():void {
        setItems(items.filter((i) => i.ptitle !== item.ptitle))
    }

  return (
    <div className="cart-item">
        <div className="item-img">
            <img src={item.pimg}/>
        </div>

        <div className="item-title">{item.ptitle}</div>

        <div className="item-price">${(item.pprice*item.punits).toFixed(2)}</div>

        <div className="item-units">
            <div className="item-units-number">
                {item.punits}
            </div>
            <div className='edit-units'>
                <AddIcon className='item-units-btn' onClick={() => addUnit()}/>
                <RemoveIcon className='item-units-btn' onClick={() => removeUnit()}/>
            </div>
        </div>

        <div className="delete-item" onClick={() => removeCartItem()}>
            <DeleteIcon />
        </div>
    </div>
  )
}

export default CartItem