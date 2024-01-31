import  Navbar  from '../components/home/Nabar'
import React from 'react'
import Main from '../components/home/Main'
import FooterNav from '../components/base/FooterNav'
import { Page } from 'konsta/react'

function Home() {
  return (
    <Page>
        <Navbar/>
        <Main/>
        <FooterNav/>
    </Page>
  )
}

export default Home