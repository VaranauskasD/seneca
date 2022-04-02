import React from 'react'

import styled from 'styled-components'

interface RadioProps {
  id: string
  label: string
  name: string
}

const StyledInput = styled.input``

const StyledLabel = styled.label``

export const Radio = (props: RadioProps) => {
  return (
    <React.Fragment>
      <StyledLabel>
        {props.label}
        <StyledInput id={props.id} type="radio" name={props.name}></StyledInput>
      </StyledLabel>
    </React.Fragment>
  )
}
