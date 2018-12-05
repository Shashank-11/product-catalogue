import styled from 'styled-components'

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
    -webkit-box-pack: center;
    justify-content: center;
    height: 40px;
    display: flex;
    position: absolute;
    right: 45px;
    border: 1px solid #2a3b4e;
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
  -webkit-box-pack: end;
  justify-content: flex-end;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px 0px, rgba(0, 0, 0, 0.05) 0px 10px 10px 0px;
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
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 16px;
  -webkit-box-align: center;
  align-items: center;
  padding: 1rem;
`
export const CardIndicator = styled.div`
  background: ${props => props.isExclusive ? 'red' : 'green'};
  min-width: 30px;
  margin: 10px;
  text-align: center;
  color: #fff;
  padding:15px;
  width: ${props => props.isExclusive ? '70px' : '40px'};
`
