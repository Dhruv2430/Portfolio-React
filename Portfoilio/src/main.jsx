import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './AllComponents/Home.jsx'

import Allprojectshow from './AllComponents/Allprojectshow.jsx'
import Me from './AllComponents/ME.jsx'
import FullContact from './AllComponents/FullContact.jsx'


const router = createBrowserRouter([
  {

    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'/Dhruv',
        element:<Me/>
      }
      ,{
        path:'/allProject',
        element:<Allprojectshow/>
      },{
        path:'/Contact',
        element:<FullContact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
