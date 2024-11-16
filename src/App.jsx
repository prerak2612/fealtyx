 import React from 'react'
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'
import Mainpage from './components/Mainpage'
import { Outlet, BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from './components/ui/Header';

 
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