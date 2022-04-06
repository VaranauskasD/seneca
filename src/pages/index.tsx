import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Form, FormProps } from '../components'

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
          props.theme.colors.dynamic.primary.minStart.r +
          props.theme.colors.dynamic.primary.rangeStart.r * props.$dynamicRatio
        }, 
        ${
          props.theme.colors.dynamic.primary.minStart.g +
          props.theme.colors.dynamic.primary.rangeStart.g * props.$dynamicRatio
        }, 
        ${
          props.theme.colors.dynamic.primary.minStart.b +
          props.theme.colors.dynamic.primary.rangeStart.b * props.$dynamicRatio
        }, 1
        ) 
        50%, 
      rgba(
        ${
          props.theme.colors.dynamic.primary.minEnd.r +
          props.theme.colors.dynamic.primary.rangeEnd.r * props.$dynamicRatio
        },
        ${
          props.theme.colors.dynamic.primary.minEnd.g +
          props.theme.colors.dynamic.primary.rangeEnd.g * props.$dynamicRatio
        }, 
        ${
          props.theme.colors.dynamic.primary.minEnd.b +
          props.theme.colors.dynamic.primary.rangeEnd.b * props.$dynamicRatio
        }, 1
        ) 
        100%
      )
    `};
`

const Home: NextPage<{ formData: FormProps }> = (props: {
  formData: FormProps
}) => {
  const [optionGroupsState, setOptionGroupsState] = useState<boolean[]>(
    Array(props.formData.optionGroups.length).fill(false)
  )
  const [isAnswered, setIsAnswered] = useState<boolean>(false)
  const [dynamicRatio, setDynamicRatio] = useState<number>(0)

  const handleOption = (optionGroupId: number, correct: boolean) => {
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

  useEffect(() => {}, [])

  return (
    <React.Fragment>
      <Head>
        <title>Seneca</title>
        <meta name="description" content="Seneca questionnaire app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StyledContent $dynamicRatio={dynamicRatio}>
          <Form
            question={props.formData.question}
            optionGroups={props.formData.optionGroups}
            handleOption={handleOption}
            isAnswered={isAnswered}
            dynamicRatio={dynamicRatio}
          />
        </StyledContent>
      </main>
    </React.Fragment>
  )
}

Home.getInitialProps = async () => {
  const formData = {
    question: 'An animal cell contains',
    optionGroups: [
      [{ option: 'Cell wall' }, { option: 'Ribosomes', correct: true }],
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
    handleOption: () => {},
    isAnswered: false,
    dynamicRatio: 0,
  }

  const randomiseOptions = (
    options: { option: string; current?: boolean }[]
  ) => {
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

  formData.optionGroups.forEach((optionGroup) => randomiseOptions(optionGroup))
  return { formData }
}

export default Home
