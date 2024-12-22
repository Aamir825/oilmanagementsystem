import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/footer'

const Layout = () => {
  return (
    <>
            <div className=' flex h-screen'>
                <Sidebar />
                <div className=' flex flex-col flex-1'>
                    <Header />
                    <main className=' flex-1 overflow-y-auto bg-gradient-to-r from-[#fcf7f7] to-[#defbff] text-black py-3 px-4'>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
  )
}

export default Layout