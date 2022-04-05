import React, { useState, Dispatch, SetStateAction } from 'react'

import styled from 'styled-components'

interface RadioProps {
  id: number
  optionGroupId: number
  label: string
  name: string
  correct: boolean
  checked: boolean
  handleCheck: Dispatch<SetStateAction<number>>
  handleOption: (
    event: React.ChangeEvent<HTMLInputElement>,
    optionGroupId: number,
    correct: boolean
  ) => void
  dynamicRatio: number
}

const StyledRadio = styled.div<{ $selected: boolean; $dynamicRatio: number }>`
  min-width: 288px;
  padding: 20px 8px;
  color: ${(props) =>
    props.$selected
      ? `${props.theme.colors.secondary}`
      : `${props.theme.colors.primary}`};
  background: ${(props) =>
    props.$selected
      ? `rgb(
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
        })`
      : 'transparent'};
  border: 2px solid
    ${(props) =>
      props.$selected
        ? `rgb(
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
        })`
        : 'transparent'};
  border-radius: 24px;

  @media (min-width: ${(props) => `${props.theme.breakpoints.sm}px`}) {
    min-width: 330px;
  }
  @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
    min-width: 450px;
  }
`

const StyledInput = styled.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`

const StyledLabel = styled.label`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

export const Radio = (props: RadioProps) => {
  return (
    <StyledRadio $selected={props.checked} $dynamicRatio={props.dynamicRatio}>
      <StyledLabel>
        <StyledInput
          id={`option-${props.optionGroupId}-${props.id}`}
          type="radio"
          name={props.name}
          checked={props.checked}
          onChange={(event) => {
            props.handleCheck(props.id)
            props.handleOption(event, props.optionGroupId, props.correct)
          }}
        />
        {props.label}
      </StyledLabel>
    </StyledRadio>
  )
}

export default Radio
