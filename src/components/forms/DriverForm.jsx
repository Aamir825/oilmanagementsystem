import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"

const DriverForm = () => {

  const [driverDetails, setdriverDetails] = useState({
    numberPlate: '',
    pump: '',
    hsd: '',
    pmg: '',
    tron: '',
    totalQuantity: '',
    totalShortage: '',
    vehicleDiesel: '',
    previous: '',
    present: '',
    distance: '',
    average: '',
    cashPump: '',
    fuelPrice: '',
    total: '',
    date: ''
  })

  const handleDateSelect = (selectedDate) => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd"); // format the date to a suitable format
    setProduct((prev) => ({
      ...prev,
      prdate: formattedDate, // Add the date to the product state directly
    }));
  };

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setdriverDetails((prev)=>({...prev, [name]: value}))
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("drivers >>>",driverDetails)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='grid md:grid-cols-2 gap-2'>
          <Input type="text" name="numberPlate" value={driverDetails.numberPlate} placeholder="Number Plate" onChange={handleChange} />
          <Input type="text" name="pump" value={driverDetails.pump} placeholder="PUMP"  onChange={handleChange}/>
          <div className='grid grid-cols-3 gap-2'>
            <Input type="number" name="hsd" value={driverDetails.hsd} placeholder="HSD" onChange={handleChange}/>
            <Input type="number" name="pmg" value={driverDetails.pmg} placeholder="PMG"  onChange={handleChange}/>
            <Input type="number" name="tron" value={driverDetails.tron} placeholder="TRON"  onChange={handleChange}/>
          </div>
          <Input type="number" name="totalQuantity" value={driverDetails.totalQuantity} placeholder="Total Quantity"  onChange={handleChange} Disabled/>
          <Input type="number" name="totalShortage" value={driverDetails.totalShortage} placeholder="Total Shortage"  onChange={handleChange}/>
          <div className='grid grid-cols-2 gap-2'>
          <Input type="number" name="vehicleDiesel" value={driverDetails.vehicleDiesel} placeholder="Vehicle Diesel"  onChange={handleChange}/>
          <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      " w-full justify-start text-left font-normal bg-transparent border-slate-300 h-12 text-black",
                      !driverDetails.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {driverDetails.date ? format(new Date(driverDetails.date), "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={driverDetails.date ? new Date(driverDetails.date) : null}
                    onSelect={handleDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              </div>
          <div className='grid grid-cols-3 gap-2'>
            <Input type="number" name="previous" value={driverDetails.previous} placeholder="Previous"  onChange={handleChange}/>
            <Input type="number" name="present" value={driverDetails.present} placeholder="Present"  onChange={handleChange}/>
            <Input type="number" name="distance" value={driverDetails.distance} placeholder="Distance"  onChange={handleChange}/>
          </div>
          <Input type="number" name="average" value={driverDetails.average} placeholder="Average"  onChange={handleChange}/>
          <div className='grid grid-cols-2 gap-2'>
            <Input type="number" name="cashPump" value={driverDetails.cashPump} placeholder="Cash PUMP"  onChange={handleChange}/>
            <Input type="number" name="fuelPrice" value={driverDetails.fuelPrice} placeholder="Fuel Price"  onChange={handleChange}/>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <Input type="number" name="total" value={driverDetails.total} placeholder="Total"  onChange={handleChange}/>
            <Button size="lg" className="bg-gradient-to-r from-[#ffd5d5] to-[#aff8ff] text-black">Submit Data</Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default DriverForm