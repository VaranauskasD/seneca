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
  text-align: center;
`

export const Form = (props: FormProps) => {
  return (
    <React.Fragment>
      <StyledForm>
        <StyledQuestion>
          {props.question} <br />
        </StyledQuestion>
        {props.optionGroups.map((optionGroup, key) => (
          <RadioGroup
            key={`optionGroup-${key}`}
            id={key}
            options={optionGroup}
            handleOption={props.handleOption}
          />
        ))}
      </StyledForm>
      <StyledAnswer>
        The answer is {props.isAnswered ? `correct` : `incorrect`}
      </StyledAnswer>
    </React.Fragment>
  )
}

export default Form
