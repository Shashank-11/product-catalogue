import React from 'react'
import Header from '../../components/Header'
import PrimaryHeader from '../../components/PrimaryHeader'
import Layout from '../../components/Layout'
import { MainWrapper } from './style'

const Main = () => (
  <MainWrapper>
    <Header />
    <PrimaryHeader />
    <Layout/>
  </MainWrapper>
)
export default Main