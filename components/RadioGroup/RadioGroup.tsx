import React from 'react'
import styled from 'styled-components'

import { Radio } from '../Radio'

interface RadioGroupProps {
  id: number
  options: { option: string; correct?: boolean }[]
  handleOption: (
    event: React.ChangeEvent<HTMLInputElement>,
    optionGroupId: number,
    correct: boolean
  ) => void
}

const StyledRadioGroup = styled.div<{ $quantity: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid #f9d29f;
  margin: 4px;
  text-align: center;
  text-decoration: none;
  border-radius: 16px;

  @media (min-width: ${(props) => `${props.theme.breakpoints.sm}px`}) {
    flex-direction: ${(props) => (props.$quantity > 2 ? 'column' : 'row')};
  }
`

export const RadioGroup = (props: RadioGroupProps) => {
  return (
    <React.Fragment>
      <StyledRadioGroup $quantity={props.options.length}>
        {props.options.map((option, key) => (
          <Radio
            key={`option-${props.id}-${key}`}
            id={key}
            optionGroupId={props.id}
            label={option.option}
            name={`option-${props.id}`}
            correct={option.correct || false}
            handleOption={props.handleOption}
          />
        ))}
      </StyledRadioGroup>
    </React.Fragment>
  )
}

export default RadioGroup
