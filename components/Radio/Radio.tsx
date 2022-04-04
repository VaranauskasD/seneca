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
  quantity: number
}

const StyledRadio = styled.div`
  min-width: 288px;

  @media (min-width: ${(props) => `${props.theme.breakpoints.sm}px`}) {
    min-width: 330px;
  }
  @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
    min-width: 450px;
  }
`

const StyledInput = styled.input``

const StyledLabel = styled.label``

export const Radio = (props: RadioProps) => {
  return (
    <StyledRadio>
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
    </StyledRadio>
  )
}

export default Radio
