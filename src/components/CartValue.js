import React from 'react'
import { useSelector } from "react-redux";
import Cartsvg from '../svgs/Cartsvg';


export default function CartValue() {
    const amount = useSelector((state) => state.amount);
  return (
    <a href='/' className='cart'>
       <Cartsvg/> {amount}$
        </a>
  )
}
