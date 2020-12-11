import React from "react";
import "./style.css";

let weatherReport=(lat,month)=>{
    if(month >=2 && month <=9)
    {
        return lat < 1 ? "summer" :" monsoon"
    }
    else{
        return lat > 1 ? "winter":"summer"
    }
}

const Geoloc =(props)=>{
    let season=weatherReport(props.lati, new Date().getMonth());
    if(season === "summer")
    return(
           <div className={`new summer`}>
               <div className="container" style={{padding:'20px'}}>
                   <div className="row">
               its hot,{props.lati}
               </div>
               </div>
           </div>
    )
    if(season === "monsoon")
    return(
        <div className={`new monsoon`}>
        <div className="container" style={{padding:'20px'}}>
            <div className="row">
        its rainy,{props.lati}
        </div>
        </div>
    </div>
    )
    else if(season === "winter")
    return(
        <div className={`new winter`}>
        <div className="container" style={{padding:'20px'}}>
            <div className="row">
        its winter,{props.lati}
        </div>
        </div>
    </div>
    )
}
export default Geoloc;