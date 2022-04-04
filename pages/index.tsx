import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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

const Home: NextPage = () => {
  const [optionGroupsState, setOptionGroupsState] = useState<boolean[]>(
    Array(FormData.optionGroups.length).fill(false)
  )
  const [isAnswered, setIsAnswered] = useState<boolean>(false)

  const handleOption = (
    event: React.ChangeEvent<HTMLInputElement>,
    optionGroupId: number,
    correct: boolean
  ) => {
    const temp = optionGroupsState
    temp[optionGroupId] = !!correct

    let check = true
    for (let optionState of temp) {
      if (!optionState) {
        check = false
        break
      }
    }
    setIsAnswered(check)
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
        <Form
          question={FormData.question}
          optionGroups={FormData.optionGroups}
          handleOption={handleOption}
          isAnswered={isAnswered}
        ></Form>
      </main>
    </React.Fragment>
  )
}

export default Home
