import DriverCard from '@/components/DriverCard/DriverCard'
import React from 'react'

const drivers= {
  average: 0,
  cashPump: "0",
  date: "N/A",
  distance: 0,
  fuelPrice: "0",
  hsd: "0",
  numberPlate: "CD-7292",
  pmg: "0",
  present: "0",
  previous: "0",
  pump: "N/A",
  totalAmount: 0,
  totalQuantity: 25000,
  totalShortage: "0",
  tron: "0",
  vehicleDiesel: "0"
}

const DriverRecord = () => {
  return (
    <>
      <div className=' grid lg:grid-cols-2 grid-col-1 gap-2'>
         <DriverCard drivers={drivers} />
         <DriverCard drivers={drivers} />
      </div>
    </>
  )
}

export default DriverRecord