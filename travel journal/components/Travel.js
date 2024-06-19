import React from "react"

export default function Travel(props){
    return(
        
       <div className = "first--travel">
          <img src={`../images/${props.item.img}`} className="travel--img" />
       <div className="travel">
       <h2 className="travel--location">{props.item.location} <img src="../images/location.png" className="img"/></h2>
      <a href ="{props.item.googlemapsurl}" className="travel--link" > View on Google Maps </a>
       </div>
       <h4 className="title"> {props.item.title} </h4>
       <h3 className="date"> {props.item.startdate} - {props.item.enddate}</h3>
      <p className="description">{props.item.description}</p>
       </div> 
      
    )
 }
    