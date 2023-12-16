import React from 'react'
import ReactDOM from 'react-dom/client' 
import Heading from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';
import About from './Component/About';
import Contact from './Component/Contact';
import ErrorRoute from './Component/ErrorRoute';
import { RestuarantMenuCard } from './Component/RestuarantMenuCard';
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom';

/*
  -- Working on react routes 
    - need to use createBrowserRouter from react don
    -- need to define paths and elements in createBrowserRouter
    -- In order to handle error case , we can use errorElement 
    -- we get hook useRouteError() from react-router-dom that can help to get error object defining 
    -- need to understand concept of Outlet and how to render child component based on the path 
*/

/*
# 3 major component of our app 
# Header 
    - Logo
    - Nav Items 
        - Home 
        -About Us
        - Contact Us 
        - Cart 
# Body 
    - Searh Bar 
        -Input Box 
        - Search Button
    - Resturant Card 
        - Resturant Logo 
        - Name 
        - Cusine 
        - rating 
        - ETA
        - Price for two 

-- Resturant Menu Card 
    -- When user click on any restaurant , we need to display manu 
    -- RestaurantMenuCard - > Basic card that will dynamically show menu of restaurant 


*/

/* Main App component */    
const App = ()=> (
    <div className='app'>
        <Heading />
        {/* <Body /> */}
        <Outlet/>
        <Footer/>
    </div>
)

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    errorElement : <ErrorRoute/>,
    children : [
      {
        path:"/",
        element:<Body/>

      },
      {
        path :"/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
    
      },
      {
        path : "/restaurants/:resId",
        element : <RestuarantMenuCard/>
      }

    ]

  },
  
])

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);