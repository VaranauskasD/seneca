import React from 'react'
import styled from 'styled-components'

import { Radio } from '../Radio'

interface RadioGroupProps {
  id: number
  options: string[]
}

const StyledRadioGroup = styled.div``

export const RadioGroup = (props: RadioGroupProps) => {
  return (
    <React.Fragment>
      <StyledRadioGroup>
        {props.options.map((option, key) => (
          <React.Fragment>
            <Radio
              id={`option+${props.id}+${key}`}
              label={option}
              name={`option+${props.id}`}
            />
          </React.Fragment>
        ))}
      </StyledRadioGroup>
      <br />
    </React.Fragment>
  )
}

export default RadioGroup
