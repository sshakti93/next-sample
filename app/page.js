'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

import Data from './data.json'



const Home = ()  => {

  const [data,setData] = useState([])

  const isUserLoggedIn = true

  const Username = 'Sam'

  const Age = 36


  const Products = Data.products

  const dummy = {
    name : 'Sam'
  }

  const author = Data.Library.Authors.Sam

  const result = JSON.stringify(dummy)
  JSON.parse

  console.log(Data.products.length)


  const getUsers = async () =>{

    

    const APIUrl = 'https://jsonplaceholder.typicode.com/users'
    const res =  await fetch(APIUrl)
    const response = await res.json()

    const manipulatedData = {
      id : 11,
      name : 'Sam',
      email : 'sample@gmail.com',
      username: 'Sam'
    }

    response.push(manipulatedData)

    const anotherData = {
      id : 12,
      name : 'Ravi',
      email : 'sample@gmail.com',
      username: 'Ravi'
    }

    const newData = [...response,anotherData]

    setData(newData)

    localStorage.setItem('CartItems',JSON.stringify([newData[0]]))
    console.table(localStorage.getItem('CartItems'))
    
  }

  // Definind
  return (
    <div>
    {isUserLoggedIn && <p>Welcome {Username}</p>}
    {
      data?.map((user)=>{
        return(
          <div key={user.id}>
              <h4>{user.name}</h4>
      <h6>{user.email}</h6>
      <p>{user.username}</p>
          </div>
        )
      })
    }
    <button onClick={()=> {getUsers()}} >Show Users</button>
  </div>
  )
}

export default Home
/*
proper naming conventions
proper git commands
localStorage commands
push,pop
mapping
arrays





*/
