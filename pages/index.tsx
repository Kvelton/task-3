import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/header/header'
import { Sightseens } from '../components/sightseens/sightseens'
import { Tours } from '../components/tours/tours'
import { Contacts } from '../components/contacts'
import { Footer } from '../components/footer'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Sightseens />
      <Tours />
      <Contacts />
      <Footer />
    </div>
  )
}

export default Home
