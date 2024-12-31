import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Truck, Calendar, DollarSign, Fuel, MapPin } from 'lucide-react'

const DriverCard = ({drivers}) => {
  return (
    <>
      {/* <Card className="w-full mx-auto bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Driver Record</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center space-x-4">
          <Truck className="h-6 w-6 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Vehicle</p>
            <p className="text-lg font-semibold">{drivers.numberPlate}</p>
          </div>
          <div className="ml-auto">
            <p className="text-sm font-medium text-gray-500">Date</p>
            <p className="text-lg font-semibold">{drivers.date}</p>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Distance</p>
            <p className="text-lg font-semibold">{drivers.distance} km</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Average</p>
            <p className="text-lg font-semibold">{drivers.average} km/l</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Previous Reading</p>
            <p className="text-lg font-semibold">{drivers.previous}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Present Reading</p>
            <p className="text-lg font-semibold">{drivers.present}</p>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-2">Fuel Information</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">HSD:</span>
              <span className="font-medium">{drivers.hsd}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">PMG:</span>
              <span className="font-medium">{drivers.pmg}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Vehicle Diesel:</span>
              <span className="font-medium">{drivers.vehicleDiesel}</span>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-2">Financial Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Amount:</span>
              <span className="font-medium">${drivers.totalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Cash Pump:</span>
              <span className="font-medium">${parseInt(drivers.cashPump).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Fuel Price:</span>
              <span className="font-medium">${parseInt(drivers.fuelPrice).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-2">Pump Information</h3>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <span>{drivers.pump}</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Fuel Quantity</h3>
          <Progress value={(drivers.totalQuantity / 50000) * 100} className="h-2 mb-2" />
          <div className="flex justify-between text-sm text-gray-500">
            <span>0</span>
            <span>{drivers.totalQuantity} / 50000 liters</span>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Shortage</p>
            <p className="text-lg font-semibold">{drivers.totalShortage}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Tron</p>
            <p className="text-lg font-semibold">{drivers.tron}</p>
          </div>
        </div>
      </CardContent>
    </Card> */}
    <Card className="flex lg:h-[210px] h-[150px] w-full mx-auto overflow-hidden bg-transparent mb-3">
      {/* Left side - Number Plate */}
      <div className="lg:w-48 w-32 bg-gradient-to-b from-[#f38c8c] to-[#67d7e9] p-6 flex items-center justify-center">
        <div className="text-center">
          <Truck className="h-8 w-8 text-white mb-2 mx-auto" />
          <h2 className="lg:text-2xl text-sm font-bold text-white break-words">
            {drivers.numberPlate}
          </h2>
          <p className="text-sm text-orange-100 mt-2">{drivers.date}</p>
        </div>
      </div>

      {/* Right side - Scrollable Content */}
      <div className="flex-1">
        <ScrollArea className="h-[400px] max-h-full w-full">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Distance</p>
                  <p className="text-lg font-semibold">{drivers.distance} km</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Average</p>
                  <p className="text-lg font-semibold">{drivers.average} km/l</p>
                </div>
              </div>

              <Separator />

              {/* Readings */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Meter Readings</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Previous</p>
                    <p className="font-medium">{drivers.previous}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Present</p>
                    <p className="font-medium">{drivers.present}</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Fuel Information */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Fuel Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">HSD:</span>
                    <span className="font-medium">{drivers.hsd}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">PMG:</span>
                    <span className="font-medium">{drivers.pmg}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">TRON:</span>
                    <span className="font-medium">{drivers.tron}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Total Quantity:</span>
                    <span className="font-medium">{drivers.totalQuantity}<span className='text-slate-400'>/Ltr</span></span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Financial Summary */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Financial Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Total Amount:</span>
                    <span className="font-medium">Rs {drivers.totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Cash Pump:</span>
                    <span className="font-medium">Rs {parseInt(drivers.cashPump).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Fuel Price:</span>
                    <span className="font-medium">Rs {parseInt(drivers.fuelPrice).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Pump Information */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Pump Information</h3>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{drivers.pump}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Total Shortage:</span>
                    <span className="font-medium">${parseInt(drivers.totalShortage).toLocaleString()}</span>
                  </div>
              </div>

              {/* Fuel Quantity */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Vehical Fuel</h3>
                <Progress value={(drivers.totalQuantity / 50000) * 100} className="h-2 mb-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>{drivers.totalQuantity} / 50000 liters</span>
                </div>
              </div>

              <Separator />

            </div>
          </CardContent>
        </ScrollArea>
      </div>
    </Card>
    </>
  )
}

export default DriverCard