import './Products.css'
import Product from './Product/Product'

type ProductsPropsType = {
  products: {
    pimg: string
    ptitle: string
    pdescription: string
    pprice: number
  }[]
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

const Products = ({ products, items, setItems, animationTrigger, setAnimationTrigger }: ProductsPropsType) => {
  return (
    <div className='products'>
      <div className='products-title'>PRODUCTS</div>
      <div className="product-items">

        {products.map((product) => 
          <Product 
            key={product.ptitle}
            pimg={product.pimg} 
            ptitle={product.ptitle} 
            pdescription={product.pdescription} 
            pprice={product.pprice} 
            items={items}
            setItems={setItems}
            animationTrigger={animationTrigger}
            setAnimationTrigger={setAnimationTrigger}
          />
        )}

      </div>
    </div>
  )
}

export default Products