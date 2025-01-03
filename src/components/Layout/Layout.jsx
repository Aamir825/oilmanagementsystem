import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MobileNavigation from '../MobileNavigation/MobileNavigation'

const Layout = () => {
  return (
    <>
            <div className=' flex h-screen'>
                <Sidebar />
                <div className=' flex flex-col flex-1'>
                    <Header />
                    <main className=' flex-1 overflow-y-auto bg-gradient-to-r from-[#fcf7f7] to-[#defbff] text-black py-3 pb-6 px-4'>
                        <Outlet />
                    </main>
                    <Footer />
                    <MobileNavigation />
                </div>
            </div>
        </>
  )
}

export default Layout