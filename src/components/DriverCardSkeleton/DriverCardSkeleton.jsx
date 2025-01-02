import React from 'react'
import CardSkeleton from '../CardSkeleton/CardSkeleton'

const DriverCardSkeleton = () => {
  return (
    <>
      <div className=' grid lg:grid-cols-2 grid-col-1 gap-3'>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </div>
    </>
  )
}

export default DriverCardSkeleton