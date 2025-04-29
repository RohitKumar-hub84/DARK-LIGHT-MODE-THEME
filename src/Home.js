import React, { useEffect } from "react";
import { useState } from "react";


const Home=()=>{
    const[state,setState]=useState("light-mode");

    const change=()=>{
        if(state === "light-mode"){
            setState("dark-mode")
        }else{
            setState("light-mode")
        }
    }

    useEffect(()=>{
        document.querySelector("body").className=state
    } ,[state])
    return(
        <>
        <div>
            <nav>
                <div>
                    <h1>RELIANCE  TRENDS</h1>
                </div>
                <ul>
                    <li>STORES</li>
                    <li>CATEGORIES</li>
                    <li>ABOUT US</li>
                    <li>LOGIN</li>
                    <div className="icon" onClick={change}>{state=="light-mode" ? <i class="fa-solid fa-sun"> <span> LIGHT </span> </i>: <i class="fa-solid fa-moon"> <span> DARK </span></i>}</div>
                    
                </ul>
           </nav>
           <div className="main">
            <div className="mainText">
            <h1>Trend's With Generation</h1>
            <p>India’s largest fashion retail chain, TRENDS offers stylish, high-quality products across Women's 
               wear, Men's wear, Kids' wear and Fashion accessories through a diversified portfolio of national 
               and international brands.
               The uniqueness of the store is our core, which delivers "fashion at great value". Spread over 
               8,000 – 24,000 square feet of shopping area, each TRENDS store is designed to offer a unique 
               shopping experience for the entire family through wide aisles, coordinated displays and 
               highly trained fashion professionals offering best in class customer assistance.
               Over the years, TRENDS has developed a strong portfolio of its own brands that cater to diverse 
               tastes and preferences of the customers.
            </p>   
             <button> SHOP NOW</button>  <i class="fa-solid fa-cart-shopping fa-2xl"></i>

             </div>
             <div>
            <img src="https://media.istockphoto.com/id/1398610798/photo/young-woman-in-linen-shirt-shorts-and-high-heels-pointing-to-the-side-and-talking.jpg?s=612x612&w=0&k=20&c=JULY1xsUtiur9QPMxqrzgC2VbnhuT4dSnHWcpFQnuAQ="/>
             
             </div>
             </div>
            </div>
    </>
    
    )
} 
export default Home;