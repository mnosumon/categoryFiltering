import React, { useState } from 'react'
import Data from './Data'

const Cetagory = ({categories, filterItem, resetItems, activeButton}) => {

  return (
    <>
        <div className="flex gap-5 my-10 justify-center items-center">
            {
                categories.map(item=>(
                    <button className={`text-3xl capitalize  py-4 px-8 rounded-xl ${activeButton === item ? "bg-slate-400": "bg-orange-500"}`} onClick={() => filterItem(item)}>{item}</button>
                ))
            }
            <button className={`text-3xl capitalize  py-4 px-8 rounded-xl ${activeButton === Data ? "bg-slate-400": "bg-orange-500"}`} onClick={resetItems}>All</button>
        </div>
    
    </>
  )
}

export default Cetagory