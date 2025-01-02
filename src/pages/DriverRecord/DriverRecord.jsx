import DriverCard from '@/components/DriverCard/DriverCard'
import DriverCardSkeleton from '@/components/DriverCardSkeleton/DriverCardSkeleton'
import useGetDriverDetails from '@/Hooks/useGetDriverDetails'
import React from 'react'

const DriverRecord = () => {
  const {driverList, loading, error} = useGetDriverDetails();
  if(loading) return <DriverCardSkeleton/>
  return (
    <>
      <div className=' grid lg:grid-cols-2 grid-col-1 gap-3'>
         <DriverCard driverList={driverList}/>
      </div>
    </>
  )
}

export default DriverRecord