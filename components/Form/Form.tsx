import React from 'react'
import styled from 'styled-components'

import { Radio } from '../Radio'

interface FormProps {
  question: string
  answers: string[][]
}

const StyledQuestion = styled.span``

const StyledForm = styled.form``

const Options = (options: string[], key: number) => {
  return options.map((option) => {
    return <Radio id={`option+${key}`} label={option} name={`${key}`} />
  })
}

export const Form = (props: FormProps) => {
  return (
    <React.Fragment>
      <StyledForm>
        <StyledQuestion>
          {props.question} <br />
        </StyledQuestion>
        {props.answers.map((answers, key) => (
          <React.Fragment>
            {Options(answers, key)}
            <br />
          </React.Fragment>
        ))}
      </StyledForm>
      The answer is {true ? `correct` : `incorrect`}
    </React.Fragment>
  )
}

export default Form
