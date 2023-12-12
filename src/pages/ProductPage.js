import React from 'react'
import Hero from '../components/ProductComponents/Hero/Hero'
import FeaturedProducts from '../components/ProductComponents/FeaturedProducts/FeaturedProducts'
import ProductList from '../components/HomeComponents/Products/ProductList'
// import Customizeable from '../components/ProductComponents/Customizeable/Customizeable'
const ProductPage = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <ProductList/>
    </div>
  )
}

export default ProductPage
