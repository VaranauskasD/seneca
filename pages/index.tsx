import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Form } from '../components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seneca </title>
        <meta name="description" content="Seneca test app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Form></Form>
      </main>
    </div>
  )
}

export default Home
