import React from 'react'
import { AiOutlineProduct } from 'react-icons/ai'
import { BsDatabase } from 'react-icons/bs'
import { FaFileWaveform } from 'react-icons/fa6'
import { IoCalendarNumberOutline, IoLogoSass } from 'react-icons/io5'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { SiAlwaysdata } from 'react-icons/si'
import { GiOilPump } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className=' hidden lg:block w-60 bg-gradient-to-r from-[#fcf7f7] to-[#defbff]'>
        <div className=' py-6 px-4'>
          <NavLink><img src="images/fueltanker24.png" alt="" /></NavLink>
        </div>
        <div className=' px-4'>
          <ul>
            <NavLink to="/" className={({isActive})=>`flex items-center justify-between gap-2 py-3 px-2 text-black text-[13px] rounded-md ${isActive ? "bg-gradient-to-r from-[#ffe1e1] to-[#cbfbff]" : ""}`}> <div className=' flex gap-2'><AiOutlineProduct size={20}/>Home</div> <MdKeyboardArrowRight/></NavLink>
            <NavLink to="Driverdataform" className={({isActive})=>`flex items-center justify-between gap-2 py-3 px-2 text-black text-[13px] rounded-md ${isActive ? "bg-gradient-to-r from-[#ffe1e1] to-[#cbfbff]" : ""}`}><div className=' flex gap-2'><FaFileWaveform size={20}/> Data Form</div><MdKeyboardArrowRight/></NavLink>
            <NavLink to="DriverRecord" className={({isActive})=>`flex items-center justify-between gap-2 py-3 px-2 text-black text-[13px] rounded-md ${isActive ? "bg-gradient-to-r from-[#ffe1e1] to-[#cbfbff]" : ""}`}><div className=' flex gap-2'><BsDatabase size={20}/> Records</div><MdKeyboardArrowRight/></NavLink>
            <NavLink to="installments" className={({isActive})=>`flex items-center justify-between gap-2 py-3 px-2 text-black text-[13px] rounded-md ${isActive ? "bg-gradient-to-r from-[#ffe1e1] to-[#cbfbff]" : ""}`}><div className=' flex gap-2'><IoCalendarNumberOutline size={20}/> Installments</div><MdKeyboardArrowRight/></NavLink>
            <NavLink to="payments" className={({isActive})=>`flex items-center justify-between gap-2 py-3 px-2 text-black text-[13px] rounded-md ${isActive ? "bg-gradient-to-r from-[#ffe1e1] to-[#cbfbff]" : ""}`}><div className=' flex gap-2'><SiAlwaysdata size={20}/> Payments</div><MdKeyboardArrowRight/></NavLink>
            <NavLink to="" className={({isActive})=>`flex items-center gap-2 py-3 px-2 text-black text-[13px] rounded-md`}><RiLogoutCircleLine size={20}/> Logout</NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar