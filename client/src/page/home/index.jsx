import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import Product from '../../components/product'
import Header from '../../components/header'
function Home() {
  return (
    <div>
      <Helmet>
        <title>home</title>
      </Helmet>
      <Header></Header>
      <Product></Product>
      <div className="over">
        
      </div>
    </div>
  )
}

export default Home