import React, { useState } from 'react'
import Data from './Data'
import Product from './Product'
import Cetagory from './Cetagory'


const App = () => {
  const [items, setItems] = useState(Data);
  const [activeButton, setActiveButton] = useState(null)

  const filterItem = (category) => {
    const newItems = Data.filter((newVal) => newVal.category === category);
    setItems(newItems);
    setActiveButton(category)
  };
  const categories = [...new Set(Data.map((product) => product.category))];
  const resetItems = () => {
    setItems(Data);
    setActiveButton(Data)
  };

  return (
    <section>
      <h2 className='text-[48px] text-center font-bold text-orange-400'>Category Filter App</h2>
      <div className="max-w-container mx-auto">
        <Cetagory activeButton={activeButton} categories={categories} filterItem={filterItem} resetItems={resetItems}  />
        <Product items={items} />
      </div>
    </section>
  )
}

export default App