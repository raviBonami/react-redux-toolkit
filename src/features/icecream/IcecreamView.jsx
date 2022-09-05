
import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyIcecream, restockIcecream } from './icecreamSlice'

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  const [value, setValue] =  useState(1)
  return (
    <div>
        <h2>Number of ice creams : {numOfIcecreams}</h2>
        <button onClick={() => dispatch(buyIcecream(3))} >Order ice creams</button>
        <input value={value} 
         type="number"
         onChange={(e) => setValue(parseInt(e.target.value))} ></input>
        <button onClick={() => dispatch(restockIcecream(value))} >Restock ice creams</button>
    </div>
  )
}
