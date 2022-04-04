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

const StyledQuestion = styled.span``

const StyledForm = styled.form``

export const Form = (props: FormProps) => {
  return (
    <React.Fragment>
      <StyledForm>
        <StyledQuestion>
          {props.question} <br />
          {props.optionGroups.map((optionGroup, key) => (
            <RadioGroup
              key={`optionGroup-${key}`}
              id={key}
              options={optionGroup}
              handleOption={props.handleOption}
            />
          ))}
        </StyledQuestion>
      </StyledForm>
      The answer is {props.isAnswered ? `correct` : `incorrect`}
    </React.Fragment>
  )
}

export default Form
