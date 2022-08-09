import { useEffect } from 'react'
import './Product.css'

type ProductType = {
    pimg: string
    ptitle: string
    pdescription: string
    pprice: number
    items: {
        pimg: string
        ptitle: string
        pprice: number
        punits: number
    }[]
    setItems: any
    animationTrigger: boolean
    setAnimationTrigger: any
}

const Product = ({ 
    pimg, ptitle, pdescription, pprice, items, setItems, animationTrigger, setAnimationTrigger 
}: ProductType) => {
    let newItem = true

    type itemType = {
        pimg: string
        ptitle: string
        pprice: number
        punits: number
    }

    const existingItem = (item: itemType) => {
        item.punits++
        setItems([...items])
        newItem = false
    }

    useEffect(() => {
        setAnimationTrigger(true)
    },[animationTrigger])

  return (
    <div className='product'>
        <img src={pimg} className="product-img"/>

        <div className="product-title">
            {ptitle}
        </div>

        <div className="product-description">
            {pdescription}
        </div>

        <div className="product-price">
            $ {pprice}
        </div>

        <div className="add-cart" onClick={() => {
            const itemToAdd = {
                pimg: pimg,
                ptitle: ptitle,
                pprice: pprice,
                punits: 1
            }

            items.map((item) => {
                item.ptitle === itemToAdd.ptitle && existingItem(item)
            })

            newItem && setItems([...items, itemToAdd])

            /* Trigger adding new item animation */
            setAnimationTrigger(!animationTrigger)
        }}>
            Add to Cart
        </div>
    </div>
  )
}

export default Product