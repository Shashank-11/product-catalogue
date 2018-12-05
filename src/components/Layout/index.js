import React from 'react'

import {
  LayoutWrapper, 
  LayoutContainer, 
  NavLayout,
} from './style'

import Container from '../_global/Container'
import ProductList from '../ProductList'

const Layout = () => (
  <LayoutWrapper>
    <Container>
      <LayoutContainer>
        <NavLayout>
          <ProductList/>
        </NavLayout>
      </LayoutContainer>
    </Container>
  </LayoutWrapper>
)
export default Layout
