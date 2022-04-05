import React from 'react'
import styled from 'styled-components'

import { RadioGroup } from '../RadioGroup'

interface FormProps {
  question: string
  optionGroups: { option: string; correct?: boolean }[][]
  handleOption: (
    event: React.ChangeEvent<HTMLInputElement>,
    optionGroupId: number,
    correct: boolean
  ) => void
  isAnswered: boolean
  dynamicRatio: number
}

const StyledQuestion = styled.h1`
  color: ${(props) => `${props.theme.colors.primary}`};
`

const StyledAnswer = styled.h2`
  color: ${(props) => `${props.theme.colors.primary}`};
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const RadioWrapper = styled.div``

export const Form = (props: FormProps) => {
  return (
    <React.Fragment>
      <StyledForm>
        <StyledQuestion>{props.question}</StyledQuestion>
        {props.optionGroups.map((optionGroup, key) => (
          <RadioWrapper>
            <RadioGroup
              key={`optionGroup-${key}`}
              id={key}
              options={optionGroup}
              handleOption={props.handleOption}
              dynamicRatio={props.dynamicRatio}
            />
          </RadioWrapper>
        ))}
      </StyledForm>
      <StyledAnswer>
        The answer is {props.isAnswered ? `correct` : `incorrect`}
      </StyledAnswer>
    </React.Fragment>
  )
}

export default Form
