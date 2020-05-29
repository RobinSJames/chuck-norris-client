import React from 'react'
import { StyledButton } from '../styles'
import { Link } from 'react-router-dom'

export const AppButton = (props) => {
  return (
    <StyledButton>
        <Link to={props.path}>
          <button>{props.label}</button>
        </Link>
    </StyledButton>
  )
}
