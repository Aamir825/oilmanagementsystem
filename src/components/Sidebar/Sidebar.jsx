import React from 'react'
import { AiOutlineProduct } from 'react-icons/ai'
import { BsDatabase } from 'react-icons/bs'
import { FaFileWaveform } from 'react-icons/fa6'
import { HiOutlineCalculator } from 'react-icons/hi'
import { IoCalendarNumberOutline, IoLogoSass } from 'react-icons/io5'
import { MdAddShoppingCart } from 'react-icons/md'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { SiAlwaysdata } from 'react-icons/si'
import { GiOilPump } from "react-icons/gi";
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className=' w-60 bg-gradient-to-r from-[#fcf7f7] to-[#defbff]'>
        <div className=' py-3 px-4'>
          <NavLink><GiOilPump className=' text-black' size={70}/></NavLink>
        </div>
        <div className=' px-4'>
          <ul>
            <NavLink to="/" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-black text-[13px] rounded-md ${isActive ? "bg-[#defbff]" : ""}`}><AiOutlineProduct size={20}/>Home</NavLink>
            <NavLink to="Driverdataform" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-black text-[13px] rounded-md ${isActive ? "bg-[#defbff]" : ""}`}><FaFileWaveform size={20}/> Data Form</NavLink>
            <NavLink to="DriverRecord" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-black text-[13px] rounded-md ${isActive ? "bg-[#defbff]" : ""}`}><BsDatabase size={20}/> Records</NavLink>
            <NavLink to="installments" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-black text-[13px] rounded-md ${isActive ? "bg-[#defbff]" : ""}`}><IoCalendarNumberOutline size={20}/> Installments</NavLink>
            <NavLink to="payments" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-black text-[13px] rounded-md ${isActive ? "bg-[#defbff]" : ""}`}><SiAlwaysdata size={20}/> Payments</NavLink>
            <NavLink to="" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-black text-[13px] rounded-md`}><RiLogoutCircleLine size={20}/> Logout</NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar