import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { useWish } from '../../context/wishContext'
function Wish() {
  const[wish, setWish,handlewish]=useWish()

  return (
    <div>
      <Helmet>
        <title>
          wish
        </title>
      </Helmet>
      <div className="">
        {wish&&wish.map((item)=>(
          <div className="" key={item._id}>
            <div className="">{item.name}</div>
            <div className="imgbox"><img src={item.src} alt="" /></div>
            <div className="">{item.info}</div>
            <div className=""><button onClick={()=>handlewish(item)}>delete</button></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wish