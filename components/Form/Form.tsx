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
}

const StyledQuestion = styled.h1``

const StyledAnswer = styled.h2``

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
