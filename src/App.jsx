import React, { useState } from 'react'
import Data from './Data'
import Product from './Product'
import Cetagory from './Cetagory'


const App = () => {
  let [items, setItems] = useState(Data)
  let categories = [...new Set(items.map((products) => products.category))]
  console.log(categories);
  let fitlerItem = (cat) => {
    let newItems = Data.filter((newVal) => newVal.category === cat)
    setItems(newItems)
  }

  return (
    <section>
      <div className="max-w-container mx-auto">
        <Cetagory categories={categories} fitlerItem={fitlerItem} setItems={setItems}/>
        <Product items={items}/>
      </div>
    </section>
  )
}

export default App