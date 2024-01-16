import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useWish } from '../../context/wishContext'
function Detail() {
  const [wish, setWish, handlewish] = useWish()

  const [product, setProduct] = useState([])
  const { id } = useParams()
  const axiosAll = async () => {
    const res = await axios.get(`http://localhost:3000/${id}`)
    const data = res.data.data
    setProduct(data)
    // console.log(data);
  }
  useEffect(() => {
    axiosAll()
  }, [])

  console.log(product)
  return (
    <div>
      <Helmet>
        <title>detail</title>
      </Helmet>
      <div className="detail container">
        {product && (
          <ul key={product._id}>
            <li>{product.name}</li>
            <li><div className='imgbox'><img src={product.src} alt="" /></div></li>
            <li>{product.ifno}</li>
            <li><button onClick={() => handlewish(product)}>wish</button></li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Detail