import React, { useState } from 'react'
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
  dynamicRatio: number
}

const StyledRadioGroup = styled.div<{ $quantity: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid #ffffff;
  margin: 4px;
  text-align: center;
  text-decoration: none;
  border-radius: 24px;

  @media (min-width: ${(props) => `${props.theme.breakpoints.sm}px`}) {
    flex-direction: ${(props) => (props.$quantity > 2 ? 'column' : 'row')};
  }
`

export const RadioGroup = (props: RadioGroupProps) => {
  const [selectedRadio, setSelectedRadio] = useState<number>(0)

  return (
    <React.Fragment>
      <StyledRadioGroup $quantity={props.options.length}>
        {props.options.map((option, key) => {
          return (
            <Radio
              key={`option-${props.id}-${key}`}
              id={key}
              optionGroupId={props.id}
              label={option.option}
              name={`option-${props.id}`}
              checked={key === selectedRadio}
              correct={option.correct || false}
              handleCheck={setSelectedRadio}
              handleOption={props.handleOption}
              dynamicRatio={props.dynamicRatio}
            />
          )
        })}
      </StyledRadioGroup>
    </React.Fragment>
  )
}

export default RadioGroup
