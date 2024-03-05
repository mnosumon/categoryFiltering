import React, { useState } from 'react'
import Data from './Data'

const Cetagory = ({categories, filterItem, setItems}) => {

  return (
    <>
        <div className="flex gap-5 my-10 justify-center items-center">
            {
                categories.map(item=>(
                    <button className='text-3xl capitalize bg-orange-500 py-4 px-8 rounded-xl' onClick={() => filterItem(item)}>{item}</button>
                ))
            }
            <button className='text-3xl capitalize bg-orange-500 py-4 px-8 rounded-xl'onClick={() => setItems(Data)}>All</button>
        </div>
    
    </>
  )
}

export default Cetagory