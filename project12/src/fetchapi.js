import React ,{useState,useEffect}from "react";

const Fetchapi=(d,n)=>{
    const [data,setData]=useState([]);
        const fetchapi=()=>{
         fetch(d)
        .then(res=>res.json())
        .then(items=>setData(items));
    }
    useEffect(()=>{
        fetchapi();
    },[n]);
    return data;
}

export default Fetchapi;