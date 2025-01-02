import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import useDriverDetails from '@/Hooks/useDriverDetail'


const DriverForm = () => {
  const { driverDetails, handleChange, handleDateSelect, onSubmit, loading } = useDriverDetails(); 

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='grid md:grid-cols-2 gap-2'>
          <Input type="text" name="numberPlate" value={driverDetails.numberPlate}  placeholder="Number Plate" onChange={handleChange} required/>
          <Input type="text" name="pump" value={driverDetails.pump} placeholder="PUMP" onChange={handleChange} required/>
          <div className='grid grid-cols-3 gap-2'>
            <Input type="number" name="hsd" value={driverDetails.hsd} placeholder="HSD" onChange={handleChange} />
            <Input type="number" name="pmg" value={driverDetails.pmg} placeholder="PMG" onChange={handleChange} />
            <Input type="number" name="tron" value={driverDetails.tron} placeholder="TRON" onChange={handleChange} />
          </div>
          <Input type="number" name="totalQuantity" value={driverDetails.totalQuantity} placeholder="Total Quantity" onChange={handleChange} className=" bg-gradient-to-r from-[#e1ecff] to-[#ffd2fd]" disabled />
          <Input type="number" name="totalShortage" value={driverDetails.totalShortage} placeholder="Total Shortage" onChange={handleChange} />
          <div className='grid grid-cols-2 gap-2'>
            <Input type="number" name="vehicleDiesel" value={driverDetails.vehicleDiesel} placeholder="Vehicle Diesel" onChange={handleChange} required/>
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
            <Input type="number" name="previous" value={driverDetails.previous} placeholder="Previous" onChange={handleChange} required/>
            <Input type="number" name="present" value={driverDetails.present} placeholder="Present" onChange={handleChange} required/>
            <Input type="number" name="distance" value={driverDetails.distance} placeholder="Distance" onChange={handleChange} className=" bg-gradient-to-r from-[#e1ecff] to-[#ffd2fd]" disabled />
          </div>
          <Input type="number" name="average" value={driverDetails.average} placeholder="Average" onChange={handleChange} className=" bg-gradient-to-r from-[#e1ecff] to-[#ffd2fd]" disabled />
          <div className='grid grid-cols-2 gap-2'>
            <Input type="number" name="cashPump" value={driverDetails.cashPump} placeholder="Cash PUMP" onChange={handleChange} required/>
            <Input type="number" name="fuelPrice" value={driverDetails.fuelPrice} placeholder="Fuel Price" onChange={handleChange} required/>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <Input type="number" name="totalAmount" value={driverDetails.totalAmount} placeholder="Total" onChange={handleChange} className=" bg-gradient-to-r from-[#e1ecff] to-[#ffd2fd]" disabled />
            <Button size="lg" className="bg-[#f38c8c] text-white border border-slate-300 hover:bg-gradient-to-r from-[#f38c8c] to-[#67d7e9] duration-150" disabled={loading}>{loading ? "Submitting...": "Submit Data"}</Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default DriverForm