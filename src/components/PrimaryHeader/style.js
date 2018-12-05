import styled from 'styled-components'
import {colors} from '../../constants/css'
import BrandLogo from '../../static/amazon-logo.png'

export const SecondaryHeader = styled.div`
  background: #fdfeff;
  height: 65px;
  border-bottom: 1px solid ${colors.gray79};
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 20;
`
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.p`
  height: 50px;
  vertical-align: middle;
  background: url(${BrandLogo}) no-repeat;
  background-size: contain;
  width: 175px;
  cursor: pointer;
`