import React, { useState } from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  const [isopen, setIsOpen] = useState(true)
  return (
    <div id='navbar'>
      <div className="dev">
        <div className="title">
          <img src="https://preview.colorlib.com/theme/educature/img/logo.png.webp" alt="" />
        </div>
        <div className="links">

          <NavLink className={"navlik"} to={'/'}>HOME</NavLink>
          <Link className={"navlik"} >About</Link>
          <Link className={"navlik"} >cocntact</Link>
          <Link className={"navlik"} >blog</Link>
          <NavLink className={"navlik"}to={'/add'}>ADD</NavLink>
          <NavLink className={"navlik"}to={'/wish'}>WISH</NavLink>
        </div>
      </div>
      <div className="mobil">
        <div className="title">
          <img src="https://preview.colorlib.com/theme/educature/img/logo.png.webp" alt="" />
        </div>
        <div className="icon" onClick={()=> setIsOpen(!isopen)}><i className={`fa-solid ${isopen?'fa-bars':'fa-xmark'}`}></i></div>
        <div className={` ${isopen?'block':'links'} `}>

          <NavLink className={"navlik"} to={'/'}>HOME</NavLink>
          <Link className={"navlik"} >About</Link>
          <Link className={"navlik"} >cocntact</Link>
          <Link className={"navlik"} >blog</Link>
          <NavLink className={"navlik"}to={'/add'}>ADD</NavLink>
          <NavLink className={"navlik"}to={'/wish'}>WISH</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar