import React, { useState, Dispatch, SetStateAction } from 'react'

import styled from 'styled-components'

interface RadioProps {
  id: number
  optionGroupId: number
  label: string
  name: string
  correct: boolean
  checked: boolean
  handleCheck: Dispatch<SetStateAction<number>>
  handleOption: (
    event: React.ChangeEvent<HTMLInputElement>,
    optionGroupId: number,
    correct: boolean
  ) => void
}

const StyledRadio = styled.div<{ $selected: boolean }>`
  min-width: 288px;
  padding: 20px 8px;
  color: ${(props) =>
    props.$selected
      ? `${props.theme.colors.secondary}`
      : `${props.theme.colors.primary}`};
  background: ${(props) => (props.$selected ? '#F8CAA3' : 'transparent')};
  border: 2px solid transparent;
  border-color: ${(props) => (props.$selected ? '#F8CAA3' : 'transparent')};
  border-radius: 24px;

  @media (min-width: ${(props) => `${props.theme.breakpoints.sm}px`}) {
    min-width: 330px;
  }
  @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
    min-width: 450px;
  }
`

const StyledInput = styled.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`

const StyledLabel = styled.label``

export const Radio = (props: RadioProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <StyledRadio $selected={isChecked}>
      <StyledLabel>
        <StyledInput
          id={`option-${props.optionGroupId}-${props.id}`}
          type="radio"
          name={props.name}
          checked={props.checked}
          onChange={(event) => {
            props.handleCheck(props.id)
            props.handleOption(event, props.optionGroupId, props.correct)
          }}
        />
        {props.label}
      </StyledLabel>
    </StyledRadio>
  )
}

export default Radio
