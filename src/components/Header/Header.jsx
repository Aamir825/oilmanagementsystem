import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'

const Header = () => {
  return (
    <div className=' bg-gradient-to-r from-[#ffefef] to-[#d2fbff] text-black py-4 px-4'>
      <div className=' flex justify-between items-center'>
        <div>
          {/* <h1 className=' mb-2'>Dashboard</h1> */}
          <BreadCrumb/>
        </div>
        <div>
          <div><img src="images/fueltanker25.png" className='lg:hidden md:hidden' alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Header