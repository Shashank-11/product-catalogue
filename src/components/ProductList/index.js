import React, { Component } from 'react';

import ProductCard from './ProductCard'
import { Products } from './productListUtils'
import { ListWrapper, CardContainer, ListHeader } from './style'


const initialState = {
  error: false,
  result: null,
  loading: true,
  productsList: Products,
  filteredProducts: Products
}

class ProductList extends Component {
  
  //Set initial states
  state = initialState

  filterProducts(e){
    const sizeValue = e.target.value
    const { productsList } = this.state
    if(sizeValue !== ""){
      const filteredResult = productsList.filter(key => key.size.includes(sizeValue))
      this.setState({filteredProducts: filteredResult })
    } else{
      this.setState({filteredProducts: productsList })
    }
  }  

  render(){
    const { filteredProducts } = this.state

    return(
      <ListWrapper>
        <ListHeader>
          <h1>Women's tops</h1>
          <select onChange={(e) => this.filterProducts(e)}>
            <option value="">Filter by size</option>
            <option value="XS">Extra small</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </ListHeader>
        {filteredProducts && 
          <CardContainer>
            {filteredProducts.map((data, index) =>
              <ProductCard key={index} productData={data} tabIndex="0" />
            )}
          </CardContainer>  
        }
      </ListWrapper>
    )
  }
}

export default ProductList
