import React, { useState } from 'react'
import {data} from '../data/data.js'

function Food() {
  //console.log(data)
  const [foods, setFoods] = useState(data);

  //Filter type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
    data.filter((item) => item.category === category));
  };
  //Filter price $$$
  const filterPrice = (price) => {
    setFoods(
    data.filter(item => item.price === price));
  };

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center capitalize'>Top rated menu items</h1>

      {/**Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/**Filter type */}
        <div>
          <p className='font-bold text-gray-700 capitalize'>Filter type</p>
          <div className='flex flex-wrap'>
            <button onClick={()=> setFoods(data)} className='m-1 px-4 py-1 border-[1px] border-orange-600 text-orange-600 rounded-full duration-150 ease-in hover:bg-orange-600 hover:text-white capitalize' >All</button>
            <button onClick={()=> filterType('burger')} className='m-1 px-4 py-1 border-[1px] border-orange-600 text-orange-600 rounded-full duration-150 ease-in hover:bg-orange-600 hover:text-white capitalize' >Burgers</button>
            <button onClick={()=> filterType('pizza')} className='m-1 px-4 py-1 border-[1px] border-orange-600 text-orange-600 rounded-full duration-150 ease-in hover:bg-orange-600 hover:text-white capitalize'>Pizza</button>
            <button onClick={()=> filterType('salad')} className='m-1 px-4 py-1 border-[1px] border-orange-600 text-orange-600 rounded-full duration-150 ease-in hover:bg-orange-600 hover:text-white capitalize'>Salads</button>
            <button onClick={()=> filterType('chicken')} className='m-1 px-4 py-1 border-[1px] border-orange-600 text-orange-600 rounded-full duration-150 ease-in hover:bg-orange-600 hover:text-white capitalize'>Chicken</button>
          </div>
        </div>
        {/**Filter price */}
        <div>
          <p className='font-bold text-gray-700 lg:text-right capitalize'>Filter price</p>
          <div className='flex flex-wrap'>
          <button onClick={()=> filterPrice('$')} className='m-1 px-4 py-1 border-[1px] border-orange-600 text-orange-600 rounded-full duration-150 ease-in hover:bg-orange-600 hover:text-white'>$</button>
          <button onClick={()=> filterPrice('$$')} className='m-1 px-4 py-1 border-[1px] border-orange-600 text-orange-600 rounded-full duration-150 ease-in hover:bg-orange-600 hover:text-white'>$$</button>
          <button onClick={()=> filterPrice('$$$')} className='m-1 px-4 py-1 border-[1px] border-orange-600 text-orange-600 rounded-full duration-150 ease-in hover:bg-orange-600 hover:text-white'>$$$</button>
          <button onClick={()=> filterPrice('$$$$')} className='m-1 px-4 py-1 border-[1px] border-orange-600 text-orange-600 rounded-full duration-150 ease-in hover:bg-orange-600 hover:text-white'>$$$$</button>        
          </div>
        </div>
      </div>

      {/**Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div key={index} className='border shadow-lg hover:scale-110 duration-300 rounded-lg'>
            <img className='w-full h-[200px] object-cover rounded-t-lg' 
            src={item.image} alt={item.name} />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
            </div>
          </div>
        ) )}
      </div>
    </div>
  )
}

export default Food