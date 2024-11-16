 import React from 'react'
import Dashboard from './Components/Dashboard'
import SignIn from './Components/SignIn'
import Mainpage from './Components/Mainpage'
import { Outlet, BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from './Components/ui/Header';

 
 function App() {
  const Layout = ()=>{
    return(
      <>
      {/* <Header/> */}
      <Outlet/>
      </>
    )
  }
  const AppLayout = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[{
      path:'/',
      element:<Dashboard/>
    },{
      path:'/signin',
      element:<SignIn/>
    },{
      path:'/mainpage',
      element:<Mainpage/>
    }]
  }])
   return (
    <RouterProvider router={AppLayout}/>
   )
 }
 
 export default App