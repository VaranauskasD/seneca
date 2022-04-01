import React from 'react'
import styled from 'styled-components'

interface FormProps {}

const StyledForm = styled.form``

const StyledInput = styled.input``

const StyledLabel = styled.label``

export const Form = (props: FormProps) => {
  return (
    <React.Fragment>
      <StyledForm>
         <input type="radio" id="html" name="fav_language" value="HTML" /> {' '}
        <label htmlFor="html">HTML</label>
      </StyledForm>
      The answer is {true ? `correct` : `incorrect`}
    </React.Fragment>
  )
}

export default Form
