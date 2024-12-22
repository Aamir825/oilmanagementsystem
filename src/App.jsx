
// import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import DriverRecord from './pages/DriverRecord/DriverRecord'
import Home from './pages/Home/Home'
import DriverDataForm from './pages/DriverDataForm/DriverDataForm'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "Driverdataform",
          element: <DriverDataForm/>
        },
        {
          path: "DriverRecord",
          element: <DriverRecord/>
        }
      ]
    }
  ]) 
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
