import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Form } from '../components'

const FormProps = {
  // question: 'Test Question',
  // answers: [
  //   ['Test answer 1', 'Test answer 2', 'Test answer 3'],
  //   ['Test answer 4', 'Test answer 5'],
  // ],
  question: 'An animal cell contains',
  optionGroups: [
    ['Cell wall', 'Ribosomes'],
    ['Cytoplasm', 'Chloroplast'],
    ['Partially permeable membrane', 'Impermeable membrane'],
    ['Cellulose', 'Mitochondria'],
  ],
}

const randomiseOptions = (options: string[]) => {
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
  FormProps.optionGroups.forEach((optionGroup) => randomiseOptions(optionGroup))

  return (
    <React.Fragment>
      <Head>
        <title>Seneca </title>
        <meta name="description" content="Seneca test app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form {...FormProps}></Form>
      </main>
    </React.Fragment>
  )
}

export default Home
