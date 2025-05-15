import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './AllComponents/Home.jsx'
import ME from './AllComponents/ME.jsx'
import Allprojectshow from './AllComponents/Allprojectshow.jsx'


const router = createBrowserRouter([
  {

    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'/Dhruv',
        element:<ME/>
      }
      ,{
        path:'/allProject',
        element:<Allprojectshow/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
