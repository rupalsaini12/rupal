import React, { useState } from 'react'

export default function Counter() {
    const[Num,setNum]=useState(6);
    function add(){
        setNum (Num+1)
    }
    function sub() {
        setNum(Num-1)
    }
  return (
   <>
    <div>{Num}</div>
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    </>
  )
}
