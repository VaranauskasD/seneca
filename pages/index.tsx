import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Form } from '../components'

const FormProps = {
  question: 'Test Question',
  answers: [
    ['Test answer 1', 'Test answer 2', 'Test answer 3'],
    ['Test answer 4', 'Test answer 5'],
  ],
}

const Home: NextPage = () => {
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
