import React, { useState, Dispatch, SetStateAction, useEffect } from 'react'

import styled from 'styled-components'
// import { motion } from 'framer-motion'

interface RadioProps {
  id: number
  optionGroupId: number
  label: string
  name: string
  correct: boolean
  checked: boolean
  handleCheck: Dispatch<SetStateAction<number>>
  handleOption: (optionGroupId: number, correct: boolean) => void
  dynamicRatio: number
  groupQuantity: number
  isAnswered: boolean
}

const StyledRadio = styled.div<{
  $id: number
  $selected: boolean
  $dynamicRatio: number
  $groupQuantity: number
}>`
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
  border-radius: ${(props) => {
    if (props.$id === 0) {
      return `20px 20px 0px 0px`
    } else if (props.$id === props.$groupQuantity) {
      return `0px 0px 20px 20px`
    } else {
      return `100px`
    }
  }};

  @media (min-width: ${(props) => `${props.theme.breakpoints.sm}px`}) {
    border-radius: ${(props) => {
      if (props.$groupQuantity < 2) return `100px`
    }};

    min-width: 330px;
  }
  @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
    min-width: 450px;
  }
`

// Animations To Be Completed

// const StyledRadioSelect = styled(motion.div)<{
//   $selected: boolean
//   $dynamicRatio: number
// }>`
//   position: relative;
//   width: 100%;
//   height: 100%;
// `

const StyledInput = styled.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`

const StyledLabel = styled.label<{ isAnswered: boolean }>`
  ${(props) =>
    props.isAnswered
      ? `cursor: auto;`
      : `cursor: pointer;
        :hover {
        opacity: 0.8;
        }`}
`

export const Radio = (props: RadioProps) => {
  useEffect(() => {
    if (props.checked) {
      props.handleCheck(props.id)
      props.handleOption(props.optionGroupId, props.correct)
    }
  }, [])

  return (
    <React.Fragment>
      <StyledRadio
        $id={props.id}
        $selected={props.checked}
        $dynamicRatio={props.dynamicRatio}
        $groupQuantity={props.groupQuantity}
      >
        <StyledLabel isAnswered={props.isAnswered}>
          <StyledInput
            id={`option-${props.optionGroupId}-${props.id}`}
            type="radio"
            name={props.name}
            checked={props.checked}
            onChange={(event) => {
              props.handleCheck(props.id)
              props.handleOption(props.optionGroupId, props.correct)
            }}
            disabled={props.isAnswered}
          />
          {props.label}
        </StyledLabel>

        {/* <StyledRadioSelect /> */}
      </StyledRadio>
    </React.Fragment>
  )
}

export default Radio
