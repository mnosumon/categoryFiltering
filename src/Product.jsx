import React from 'react'

const Product = ({items}) => {
  return (
    
    <>
    <div className=" my-12 ">
      
    </div>
      <div className="flex gap-10 justify-between flex-wrap">
        {
          items.map((item, index)=>(

            <div key={index} className="w-[370px] h-[465px] shadow-lg">
                <div className="h-[370px] overflow-hidden relative group">
                  <a to='#' className=''>
                    <img className="h-full w-full object-cover" src={item.image}/>
                  </a>
                    
                  <div className="w-full h-[156px] bg-white absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 p-6">
                    <ul className='flex flex-col gap-5'>
                      <li className="flex gap-4 items-center justify-end cursor-pointer">
                        <a className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Wish List</a>
    
                      </li>
                      <li className="flex gap-4 items-center justify-end cursor-pointer">
                        <a className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Compare</a>
    
                      </li>
                      <li className="flex gap-4 items-center justify-end cursor-pointer">
                        <a className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Cart</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between items-center my-4">
                    <h5 className='text-[#262626] font-bold font-dm text-xl'>{item.title}</h5>
                    <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>${item.price}</span>
                  </div>
                  <div className="">
                    <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>color</span>
                  </div>
                </div>
            </div>

          ))
        }
      </div>
    </>
  )
}

export default Product