import styled from 'styled-components'
import { layoutSizes } from '../../constants/css'

export const LayoutWrapper = styled.div`
  display: block;
  margin-top: 125px;
`
export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavLayout = styled.div`
  width: 100%;
  margin: auto;
  @media only screen and (min-width: ${layoutSizes.iPadWidth}) {
    margin: auto 10px;
    width:100%;
  }
`

