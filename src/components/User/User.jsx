import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() //For dynamic routing or access url path 
  return (
    <>
      <h1 className="text-center text-4xl">User: {userid}</h1>
    </>
  )
}

export default User
