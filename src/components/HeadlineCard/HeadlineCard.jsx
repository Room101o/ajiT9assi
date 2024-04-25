import React from 'react'
import cardImg from './../../assets/imgs/cardImg.png'
import cardImg2 from './../../assets/imgs/cardImg2.png'
import cardImg3 from './../../assets/imgs/cardImg3.png'

 const HeadlineCard = () => {
  return (
    <>
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className='rounded-2xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full px-4 py-1'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={cardImg} alt="" />
            </div>
            <div className='rounded-2xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full px-4 py-1'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={cardImg2} alt="" />
            </div>
            <div className='rounded-2xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full px-4 py-1'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={cardImg3} alt="" />
            </div>
        </div>
    </>
  )
}
export default HeadlineCard;