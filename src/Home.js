import React from 'react'
import Nav from './Nav'
import alpha from './image/abc.png'
import './Home.css'
import PropsSample from './PropsSample'
import MyApi from './MyApi'
export default function Home() {
  return (
    <>
    <Nav/>
    <MyApi/>
    <PropsSample/>
    <h1>Home</h1>
    <img src={alpha}></img>

    
    </>
  )
}
