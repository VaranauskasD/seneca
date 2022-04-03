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
        <StyledInput id={props.id} type="radio" name={props.name}></StyledInput>
        {props.label}
      </StyledLabel>
    </React.Fragment>
  )
}

export default Radio
