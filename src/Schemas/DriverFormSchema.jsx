import { z } from "zod";

const driverDetailsSchema = z.object({
  numberPlate: z.string().min(1, "Number Plate is required"),
  pump: z.string().min(1, "Pump name is required"),
  hsd: z.string().optional(), // Assuming these can be empty strings
  pmg: z.string().optional(),
  tron: z.string().optional(),
  totalQuantity: z.string().optional(),
  totalShortage: z.string().optional(),
  vehicleDiesel: z.string().min(1, "Vehicle Diesel is required"),
  previous: z.string().min(1, "Previous is required"),
  present: z.string().min(1, "Present is required"),
  distance: z.string().optional(),
  average: z.string().optional(),
  cashPump: z.string().min(1, "Cash Pump is required"),
  fuelPrice: z.string().min(1, "Fuel Price is required"),
  totalAmount: z.string().optional(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
});

export default driverDetailsSchema;