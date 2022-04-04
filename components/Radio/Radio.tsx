import React from 'react'

import styled from 'styled-components'

interface RadioProps {
  id: number
  optionGroupId: number
  label: string
  name: string
  correct: boolean
  handleOption: (
    event: React.ChangeEvent<HTMLInputElement>,
    optionGroupId: number,
    correct: boolean
  ) => void
}

const StyledInput = styled.input``

const StyledLabel = styled.label``

export const Radio = (props: RadioProps) => {
  return (
    <StyledLabel>
      <StyledInput
        id={`option-${props.optionGroupId}-${props.id}`}
        type="radio"
        name={props.name}
        onChange={(event) =>
          props.handleOption(event, props.optionGroupId, props.correct)
        }
      />
      {props.label}
    </StyledLabel>
  )
}

export default Radio
