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
  const onRadioCheck = () => {
    console.log('checked' + props.id)
  }

  return (
    <StyledLabel>
      <StyledInput
        id={props.id}
        type="radio"
        name={props.name}
        onChange={() => onRadioCheck()}
      ></StyledInput>
      {props.label}
    </StyledLabel>
  )
}

export default Radio
