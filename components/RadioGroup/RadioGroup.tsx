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

const StyledRadioGroup = styled.div`
  border: 2px solid #f9d29f;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
`

export const RadioGroup = (props: RadioGroupProps) => {
  return (
    <React.Fragment>
      <StyledRadioGroup>
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
      <br />
    </React.Fragment>
  )
}

export default RadioGroup
