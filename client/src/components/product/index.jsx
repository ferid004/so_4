import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
import { useWish } from '../../context/wishContext'

function Product() {
     const[wish, setWish,handlewish]=useWish()
    
    
    const [product, setProduct] = useState([])
    
    const axiosAll=async()=>{
        const res=await axios.get('http://localhost:3000/')
        const data=res.data.data
        setProduct(data)
        console.log(data);
    }
    useEffect(() => {
      axiosAll()
    }, [])
    
  return (
    <div>
        {product&& product.map((item)=>(
            <ul key={item._id}>
                <li>{item.name}</li>
                <li><div className='imgbox'><img src={item.src} alt="" /></div></li>
                <li>{item.ifno}</li>
                <li><button onClick={()=>handlewish(item)}>wish</button></li>
            </ul>
        ))}
    </div>
  )
}

export default Product