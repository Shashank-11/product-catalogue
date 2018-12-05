import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layoutSizes } from '../../constants/css'

const Wrapper = styled.div`
  max-width: ${layoutSizes.containerWidth};
  margin: 0 auto;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
`

// Container wrapper
// Example of implementing function as child pattern
const Container = (props) => {
  return (
    <Wrapper
      {...props}
    >
      {props.children}
    </Wrapper>
  )
}

//Example of proptypes
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Container
