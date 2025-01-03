'use client'

import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { FaFileAlt } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { SiAlwaysdata } from 'react-icons/si'

const MobileNavigation = () => {
  const navItems = [
    { to: "/", icon: AiOutlineHome, label: "Home" },
    { to: "/Driverdataform", icon: FaFileAlt, label: "Form" },
    { to: "/DriverRecord", icon: BsDatabase, label: "Records" },
    { to: "/installments", icon: IoCalendarNumberOutline, label: "Installments" },
    { to: "/payments", icon: SiAlwaysdata, label: "Payments" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0  bg-gradient-to-r from-[#ffd8d8] to-[#c1f8ff] shadow-lg lg:hidden rounded-tl-xl rounded-tr-xl">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-16 h-16 ${
                  isActive
                    ? 'text-[#67d7e9]'
                    : 'text-black hover:text-blue-500'
                }`
              }
            >
              <item.icon className="text-2xl mb-1" />
              <span className="text-xs">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNavigation

