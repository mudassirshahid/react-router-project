import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    console.log(`Data: ${data}`);

    // First Method
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/mudassirshahid")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // }, [])
  return (
    <>
      <div className='flex flex-col justify-center items-center m-auto'>
        <h1>Github Avatar:</h1>
        <img className='w-2/4' src={data.avatar_url} alt="Github Profile" />
      </div>
    </>
  )
}

export default Github

// Second and optimized method to fetch data using react router loader 
// We can write method in our main routes file main.jsx in route props like loader={() => {}} and write function and export it here and call by method to loader props 
// Below function should be in seperate file but anyway 

export const githubInfoLoaders = async () => {
    const response = await fetch("https://api.github.com/users/mudassirshahid")
    console.log(response);
    return response.json()
} 

// After above code we need to access value to show in ui for this we use hooke useLoaderData import { useLoaderData } from 'react-router-dom'
