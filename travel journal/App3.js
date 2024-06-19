import React from "react"
import Navbar from "./components/Navbar"
import Travel from "./components/Travel"
import data2 from "./data2"

export default function App3() {  
    const travel = data2.map(item => {
        return(
       <Travel
             key = {item.id}
              item= {item}
        /> 
      )
   }) 
                              //{travel} 
    return(
          <div>
                <Navbar /> <br />
                {travel}   <br />
                <hr />
         </div>
    ) 
}
