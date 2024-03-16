
import { useState } from "react";
import Food from "./Food/Food";
import { useEffect } from "react";
const Foods = () => {
    const [food,setFood]=useState([])
    useEffect(()=>{
         fetch('cafe.json')
         .then(res=>res.json())
         .then(data=>setFood(data))
    },[])
    return (
        <div className="w-2/3 grid grid-cols-2">
           {
            food.map((fd,l)=> <Food 
            key={l}
            Foods={fd}></Food>)
           }
        </div>
    );
};

export default Foods;