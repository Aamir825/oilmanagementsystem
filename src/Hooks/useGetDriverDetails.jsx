import { db } from '@/Firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

const useGetDriverDetails = () => {
  const [driverList, setDriverList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDriverDetails = async () => {
      try {
        const querySnapShot = await getDocs(collection(db, 'driverDetails'));
        const driverList = querySnapShot.docs.map((doc) => doc.data());
        setDriverList(driverList);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchDriverDetails();
  }, []);
  return {driverList, loading, error}
}

export default useGetDriverDetails