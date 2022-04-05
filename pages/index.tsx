import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Form } from '../components'

const FormData = {
  question: 'An animal cell contains',
  optionGroups: [
    [{ option: 'Cell wall', correct: true }, { option: 'Ribosomes' }],
    [{ option: 'Cytoplasm', correct: true }, { option: 'Chloroplast' }],
    [
      { option: 'Partially permeable membrane', correct: true },
      { option: 'Impermeable membrane' },
    ],
    [{ option: 'Cellulose' }, { option: 'Mitochondria', correct: true }],
    [
      { option: 'Cellulose' },
      { option: 'Mitochondria', correct: true },
      { option: 'Chroloplast' },
    ],
  ],
}

const randomiseOptions = (options: { option: string; current?: boolean }[]) => {
  // Fisher-Yates
  for (
    let currentIndex = options.length - 1;
    currentIndex > 0;
    currentIndex--
  ) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1))

    // swap
    const temp = options[currentIndex]
    options[currentIndex] = options[randomIndex]
    options[randomIndex] = temp
  }
}

const StyledContent = styled.div<{ $dynamicRatio: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: ${(props) => props.theme.primary};
  background: ${(props) =>
    `linear-gradient(
      0deg, 
      rgba(
        ${
          props.theme.colors.dynamic.minStart.r +
          props.theme.colors.dynamic.rangeStart.r * props.$dynamicRatio
        }, 
        ${
          props.theme.colors.dynamic.minStart.g +
          props.theme.colors.dynamic.rangeStart.g * props.$dynamicRatio
        }, 
        ${
          props.theme.colors.dynamic.minStart.b +
          props.theme.colors.dynamic.rangeStart.b * props.$dynamicRatio
        }, 
        ${props.theme.colors.dynamic.minStart.a}
        ) 
        50%, 
      rgba(
        ${
          props.theme.colors.dynamic.minEnd.r +
          props.theme.colors.dynamic.rangeEnd.r * props.$dynamicRatio
        },
        ${
          props.theme.colors.dynamic.minEnd.g +
          props.theme.colors.dynamic.rangeEnd.g * props.$dynamicRatio
        }, 
        ${
          props.theme.colors.dynamic.minEnd.b +
          props.theme.colors.dynamic.rangeEnd.b * props.$dynamicRatio
        }, 
        ${props.theme.colors.dynamic.minEnd.a}
        ) 
        100%
      )
    `};
`

const Home: NextPage = () => {
  const [optionGroupsState, setOptionGroupsState] = useState<boolean[]>(
    Array(FormData.optionGroups.length).fill(false)
  )
  const [isAnswered, setIsAnswered] = useState<boolean>(false)
  const [dynamicRatio, setDynamicRatio] = useState<number>(0)

  const handleOption = (
    event: React.ChangeEvent<HTMLInputElement>,
    optionGroupId: number,
    correct: boolean
  ) => {
    const temp = optionGroupsState
    temp[optionGroupId] = !!correct

    let check = true
    let correctCount = 0
    for (let optionState of temp) {
      if (!optionState) {
        check = false
      } else {
        correctCount++
      }
    }
    setIsAnswered(check)
    setDynamicRatio(correctCount / optionGroupsState.length)
    setOptionGroupsState(temp)
  }

  // FormData.optionGroups.forEach((optionGroup) =>
  //   randomiseOptions(optionGroup)

  return (
    <React.Fragment>
      <Head>
        <title>Seneca </title>
        <meta name="description" content="Seneca test app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StyledContent $dynamicRatio={dynamicRatio}>
          <Form
            question={FormData.question}
            optionGroups={FormData.optionGroups}
            handleOption={handleOption}
            isAnswered={isAnswered}
          />
        </StyledContent>
      </main>
    </React.Fragment>
  )
}

export default Home
