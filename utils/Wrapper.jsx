import { createContext, useState } from "react"

export const datacontex= createContext(null);

const Wrapper=(probs)=>{
       const [data,setdata]= useState("bhut important data");
       return(

        <datacontex.Provider value={[data,setdata]}>  
        {probs.children} 
         </datacontex.Provider>
       )
}