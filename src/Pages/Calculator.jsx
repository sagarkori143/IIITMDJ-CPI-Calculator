import SPI from "../Components/SPI";
import CPI from "../Components/CPI";
import React, { useState } from "react";
import "./Calculator.css";


export const Calculator=()=>{
    const [target,setTarget]=useState(0);
    return(

        <div>
            <nav>

                
                
            </nav>

            <div>
                {
                    target?<SPI/>:<CPI/>
                }
            </div>

        </div>
    )
}