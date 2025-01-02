import React from 'react'
import { Skeleton } from '../ui/skeleton'

const CardSkeleton = () => {
  return (
    <>
      <div className="flex lg:h-[210px] h-[150px] w-full mx-auto overflow-hidden bg-transparent">
      {/* Left side - Skeleton for Number Plate */}
      <div className="lg:w-48 w-32 bg-gradient-to-b from-[#f38c8c] to-[#67d7e9] p-6 flex items-center rounded-tl-lg rounded-bl-lg justify-center">
        <div className="text-center">
          <Skeleton className="h-8 w-8 mb-2 mx-auto rounded-full" />
          <Skeleton className="lg:h-6 h-4 lg:w-24 w-16 mb-1 mx-auto" />
          <Skeleton className="h-3 w-12 mx-auto" />
        </div>
      </div>

      {/* Right side - Skeleton for Scrollable Content */}
      <div className="flex-1 border border-slate-300 rounded-tr-lg roubded-br-lg">
        <div className="h-[400px] max-h-full w-full overflow-y-hidden">
          <div className="p-6 space-y-6">
            {/* Basic Info Skeleton */}
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-4 w-24 bg-teal-100" />
              <Skeleton className="h-4 w-20 bg-teal-100" />
            </div>

            <Skeleton className="h-px w-full bg-gray-300 my-3" />

            {/* Meter Readings Skeleton */}
            <div>
              <Skeleton className="h-4 w-32 mb-2 bg-teal-100" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-4 w-16 bg-teal-100" />
                <Skeleton className="h-4 w-16 bg-teal-100" />
              </div>
            </div>

            <Skeleton className="h-px w-full bg-gray-300 my-3" />

            {/* Fuel Information Skeleton */}
            <div>
              <Skeleton className="h-4 w-40 mb-2 bg-teal-100" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>

            <Skeleton className="h-px w-full bg-gray-200 my-3" />

            {/* Financial Summary Skeleton */}
            <div>
              <Skeleton className="h-4 w-40 mb-2" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-36" />
              </div>
            </div>

            <Skeleton className="h-px w-full bg-gray-200 my-3" />

            {/* Pump Information Skeleton */}
            <div>
              <Skeleton className="h-4 w-40 mb-2" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-36" />
            </div>

            {/* Fuel Quantity Skeleton */}
            <div>
              <Skeleton className="h-4 w-40 mb-2" />
              <Skeleton className="h-2 w-full bg-gray-300 rounded" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardSkeleton