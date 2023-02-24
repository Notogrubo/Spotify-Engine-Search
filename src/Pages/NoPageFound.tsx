import React from 'react'
import '../Styles/NoPageFound.css'
import { Link } from 'react-router-dom'

function NoPageFound() {

  const linkStyle = {
    textDecoration: "none",
    color: 'white'
  }; 

  return (
    <div className='NoPageFoundContainer'>
      <h1>Something went wrong, sorry.</h1>
      <Link to='/' style={linkStyle} > Go to Homepage</Link>
    </div>
   
   
  )
}

export default NoPageFound