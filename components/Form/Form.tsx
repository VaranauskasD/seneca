import React from 'react'
import styled from 'styled-components'

import { RadioGroup } from '../RadioGroup'

interface FormProps {
  question: string
  optionGroups: string[][]
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
            />
          ))}
        </StyledQuestion>
      </StyledForm>
      The answer is {true ? `correct` : `incorrect`}
    </React.Fragment>
  )
}

export default Form
