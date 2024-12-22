import Chart from '@/components/Chart/Chart'
import React from 'react'
import { AiOutlineProduct } from 'react-icons/ai'
import { SiAlwaysdata, SiTraefikproxy } from 'react-icons/si'

const Home = () => {
  return (
    <div className=' grid grid-cols-4 gap-2'>
      <div className=' bg-white bg-opacity-5 border border-slate-300 p-4 rounded-lg text-black flex gap-3'>
        <div>
          <AiOutlineProduct className=' bg-gradient-to-r from-[#ffe6e6] to-[#d2fbff] p-1 rounded-md' size={32} />
        </div>
        <div>
          <h1 className='mb-3 text-[14px]'>Total Drivers</h1>
          <h2 className=' text-2xl mb-1'>25,860</h2>
          <p className=' text-[12px] text-slate-500'>All running and completed products</p>
        </div>
      </div>
      <div className=' bg-white bg-opacity-5 border border-slate-300 p-4 rounded-lg text-black flex gap-3'>
        <div>
          <SiAlwaysdata className=' bg-gradient-to-r from-[#ffe6e6] to-[#d2fbff] p-1 rounded-md' size={32} />
        </div>
        <div>
          <h1 className='mb-3 text-[14px]'>Total Profit</h1>
          <h2 className=' text-2xl mb-1'>1.5M</h2>
          <p className=' text-[12px] text-slate-500'>completion rate this month</p>
        </div>
      </div>
      <div className=' bg-white bg-opacity-5 border border-slate-300 p-4 rounded-lg text-black flex gap-3'>
        <div>
          <SiTraefikproxy className=' bg-gradient-to-r from-[#ffe6e6] to-[#d2fbff] p-1 rounded-md' size={32} />
        </div>
        <div>
          <h1 className='mb-3 text-[14px]'>Total Investment</h1>
          <h2 className=' text-2xl mb-1'>9,5000</h2>
          <p className=' text-[12px] text-slate-500'>completion rate increases</p>
        </div>
      </div>
      <div className=' bg-white bg-opacity-5 border border-slate-300 p-4 rounded-lg text-black col-span-1 row-span-3'>
        <p className=" bg-gradient-to-r from-[#ffe6e6] to-[#d2fbff] inline-block py-1 px-2 text-[11px] mb-4 text-[#ff3300] rounded-lg">
          Team Review
        </p>
        <h1 className=" font-[500]">Oil Project Team</h1>
        <p className=" text-[11px] text-gray-500 mt-1 mb-3">
          MS is built for every user of your project team to plan, manage
        </p>
        <p className=" text-[11px]">
          06 . 11 . 24{" "}
          <span className={` bg-slate-100 text-black py-1 px-2 rounded-md ml-3`}>
            15 Members
          </span>
        </p>
        <div className=" flex justify-between mt-5 pb-1">
          <div>
            <p className={`text-[12px] bg-slate-100 font-[500] text-black py-1 px-3 rounded-md`}>
              Notion File
            </p> 
          </div>
          <div className="flex items-center">
            <img src="/images/image-avatar.png" alt='' className=" w-6" />
            <img src="/images/image-avatar.png" alt='' className=" w-6 -mx-2" />
            <img src="/images/image-avatar.png" alt='' className=" w-6" />
          </div>
        </div>
      </div>
      <div className=' bg-white bg-opacity-5 border border-slate-300 p-4 rounded-lg text-black col-span-3 row-span-4'>
        {/* <Chart/> */}
      </div>
    </div>
  )
}

export default Home