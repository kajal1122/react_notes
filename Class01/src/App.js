import React from 'react'
import ReactDOM from 'react-dom/client' 
import Heading from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';

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



*/

/* Main App component */    
const App = ()=> (
    <div className='app'>
        <Heading />
        <Body />
        <Footer/>
    </div>
)

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);