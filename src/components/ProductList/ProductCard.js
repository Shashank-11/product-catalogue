import React from 'react'

import { ProductImage } from './productListUtils'

import {
  ListContainer,
  ProductLogo,
  CardFooter,
  CardIndicator,
  ImageConatiner
} from './style'

const ProductCard = ({ productData }) => (
  <ListContainer>
    <ImageConatiner>
      <ProductLogo src={ProductImage(productData.productImage)}/>
    </ImageConatiner>
    {(productData.isExclusive || productData.isSale) &&
      <CardIndicator isExclusive={productData.isExclusive}>
        {productData.isExclusive ? 'Exclusive' : 'Sale'}
      </CardIndicator> 
    }
    <CardFooter>
      <div>{productData.productName}</div>
      <div>{productData.price}</div>
    </CardFooter>  
  </ListContainer>
)
export default ProductCard
