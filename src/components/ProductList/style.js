import styled from 'styled-components'
import { colors } from '../../constants/css'

export const ListWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  h1{
    margin:10px;
    font-size: 28px;
  }
`
export const ListHeader = styled.div`
  display: flex;
  select{
    align-items: center;
    justify-content: center;
    height: 40px;
    display: flex;
    position: absolute;
    right: 45px;
    border: 1px solid #2a3b4e;
    font-weight: 600;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ListContainer = styled.div`
  height: inherit;
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${colors.white};
  box-shadow: ${colors.cardShadow};
  max-width: 310px;
  min-width: 262px;
  height: 390px;
  border-radius: 4px;
  flex: 1 1 0%;
  transition: all 0.15s linear 0s;
`

export const ImageConatiner = styled.div`
  height: 340px;
`
export const ProductLogo = styled.img`
  min-height: 100px;
  width: 90%;
  margin: auto;
  display: block;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  align-items: center;
  padding: 1rem;
  font-weight:700;
`
export const CardIndicator = styled.div`
  background: ${props => props.isExclusive ? `${colors.brandRed}` : `${colors.brandGreen}`};
  min-width: 30px;
  margin: 10px;
  text-align: center;
  color: ${colors.white};
  padding:15px;
  width: ${props => props.isExclusive ? '70px' : '40px'};
`
