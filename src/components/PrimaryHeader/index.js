import React from 'react'
import {SecondaryHeader, HeaderContent, Logo} from './style'
import Container from '../_global/Container'

const PrimaryHeader = () => (
  <SecondaryHeader>
    <Container>
      <HeaderContent>
        <Logo/>
      </HeaderContent>
    </Container>
  </SecondaryHeader>
)
export default PrimaryHeader
