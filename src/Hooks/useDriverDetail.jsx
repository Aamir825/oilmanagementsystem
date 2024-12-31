import React, { useEffect, useState } from 'react'
import { format } from "date-fns"

const useDriverDetails = () => {

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
        totalAmount: '',
        date: ''
    })

    useEffect(() => {
        const { hsd, pmg, tron, previous, present, vehicleDiesel, distance, cashPump, fuelPrice } = driverDetails;
        if (hsd && pmg && tron) {
            const totalOilQuantity = parseFloat(hsd) + parseFloat(pmg) + parseFloat(tron);
            setdriverDetails((prev) => ({ ...prev, totalQuantity: totalOilQuantity}))
        }if (previous && present) {
            const totalDistance = parseFloat(present) - parseFloat(previous);
            setdriverDetails((prev) => ({ ...prev, distance: totalDistance}))
        }if (vehicleDiesel && distance) {
            const totalAverage = parseFloat(distance) / parseFloat(vehicleDiesel);
            setdriverDetails((prev) => ({ ...prev, average: totalAverage.toFixed(2) }))
        }if (cashPump && fuelPrice) {
            const totalAmountValue = parseFloat(cashPump) + parseFloat(fuelPrice);
            setdriverDetails((prev) => ({ ...prev, totalAmount: totalAmountValue}))
        }

    }, [driverDetails.hsd, driverDetails.pmg, driverDetails.tron, driverDetails.previous, driverDetails.present, driverDetails.vehicleDiesel, driverDetails.distance, driverDetails.cashPump, driverDetails.fuelPrice])

    const handleDateSelect = (selectedDate) => {
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        setdriverDetails((prev) => ({
            ...prev,
            date: formattedDate,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdriverDetails((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("drivers >>>", driverDetails)
        setdriverDetails({
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
            totalAmount: '',
            date: ''
        })
    }
    return { driverDetails, handleChange, handleDateSelect, handleSubmit }
}

export default useDriverDetails