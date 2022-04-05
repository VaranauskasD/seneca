import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Radio } from '../Radio'

interface RadioGroupProps {
  id: number
  options: { option: string; correct?: boolean }[]
  handleOption: (optionGroupId: number, correct: boolean) => void
  dynamicRatio: number
}

const StyledRadioGroup = styled.div<{
  $quantity: number
  $dynamicRatio: number
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid
    ${(props) =>
      `rgb(
        ${
          props.theme.colors.dynamic.secondary.start.r +
          props.theme.colors.dynamic.secondary.range.r * props.$dynamicRatio
        }, 
        ${
          props.theme.colors.dynamic.secondary.start.g +
          props.theme.colors.dynamic.secondary.range.g * props.$dynamicRatio
        }, 
        ${
          props.theme.colors.dynamic.secondary.start.b +
          props.theme.colors.dynamic.secondary.range.b * props.$dynamicRatio
        })`};
  margin: 4px;
  text-align: center;
  text-decoration: none;
  border-radius: 24px;

  @media (min-width: ${(props) => `${props.theme.breakpoints.sm}px`}) {
    flex-direction: ${(props) => (props.$quantity > 2 ? 'column' : 'row')};
    border-radius: ${(props) => (props.$quantity > 2 ? '24px' : '100px')};
  }
`

export const RadioGroup = (props: RadioGroupProps) => {
  // const random = Math.floor(Math.random() * props.options.length)
  const [selectedRadio, setSelectedRadio] = useState<number>(0)

  return (
    <React.Fragment>
      <StyledRadioGroup
        $quantity={props.options.length}
        $dynamicRatio={props.dynamicRatio}
      >
        {props.options.map((option, key) => (
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
            groupQuantity={props.options.length - 1}
          />
        ))}
      </StyledRadioGroup>
    </React.Fragment>
  )
}

export default RadioGroup
