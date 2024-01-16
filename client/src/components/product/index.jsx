import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Product() {
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
                <li><img src={item.src} alt="" /></li>
                <li>{item.ifno}</li>
            </ul>
        ))}
    </div>
  )
}

export default Product