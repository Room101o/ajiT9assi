import React, { useState } from "react";
import { data } from "../../data/data.js";
const Food = () => {
  console.log(data);

  const[foods,setFoods] =useState(data)

  //filter type
  const filterType = (category) => {
    setFoods(
      data.filter((item)=> {
        return item.category === category;
      })
    )
  }
  //filter by price
  const filterPrice = (price) =>{
    setFoods(
      data.filter((item) =>{
        return item.price === price;
      })
    )
  }

  return (
    <>
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className="flex flex-col mt-9 lg:flex-row justify-between">
          {/* Filter Type */}
          <div className="">
            <p className="font-bold text-gray-700">Filter Type</p>
            <div className="flex items-center justify-between flex-wrap">
              <butto onClick={()=>setFoods(data)} className="m-1 font-bold border border-orange-600 rounded-full py-2 px-8 text-orange-600 hover:bg-orange-600 hover:text-white  duration-500" >All</butto>
              <button onClick={()=>filterType('burger')} className="m-1 font-bold border border-orange-600 rounded-full py-2 px-8 text-orange-600 hover:bg-orange-600 hover:text-white  duration-500">Burgers</button>
              <button onClick={()=>filterType('pizza')} className="m-1 font-bold border border-orange-600 rounded-full py-2 px-8 text-orange-600 hover:bg-orange-600 hover:text-white  duration-500">Pizza</button>
              <button onClick={()=>filterType('salad')} className="m-1 font-bold border border-orange-600 rounded-full py-2 px-8 text-orange-600 hover:bg-orange-600 hover:text-white  duration-500">Salads</button>
              <button onClick={()=>filterType('chicken')} className="m-1 font-bold border border-orange-600 rounded-full py-2 px-8 text-orange-600 hover:bg-orange-600 hover:text-white  duration-500">Chicken</button>
            </div>
          </div>
          {/* Filter Price */}
          <div>
            <p className="font-bold text-gray-700">Filter Price</p>
            <div className="flex flex-wrap items-center justify-between max-w-[390px] w-full">
              <button onClick={()=>filterPrice('$')}  className="m-1 font-bold border border-orange-600 rounded-full py-2 px-8 text-orange-600 hover:bg-orange-600 hover:text-white  duration-500" >$</button>
              <button onClick={()=>filterPrice('$$')}  className="m-1 font-bold border border-orange-600 rounded-full py-2 px-8 text-orange-600 hover:bg-orange-600 hover:text-white  duration-500" >$$</button>
              <button onClick={()=>filterPrice('$$$')}  className="m-1 font-bold border border-orange-600 rounded-full py-2 px-8 text-orange-600 hover:bg-orange-600 hover:text-white  duration-500" >$$$</button>
              <button onClick={()=>filterPrice('$$$$')}  className="m-1 font-bold border border-orange-600 rounded-full py-2 px-8 text-orange-600 hover:bg-orange-600 hover:text-white  duration-500" >$$$$</button>
            </div>
          </div>
        </div>
        {/* Display foods */}
        <div className="grid grid-cols-2 lg:grid-col-4 gap-6 pt-4 ">
            {foods.map((item,index)=>(
                <div key={index} className="border p-4 shadow-lg rounded-lg hover:scale-105 duration-300">
                  <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
                  <div className="flex justify-between px-2 py-4">
                    <p className="font-bold">{item.name}</p>
                    <p className="">
                      <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
                    </p>
                  </div>
                </div>
            )
              
             )}
        </div>

      </div>
    </>
  );
};
export default Food;
