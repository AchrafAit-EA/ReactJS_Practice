import { useState } from "react";
export function Form(){
    const [p,setp] = useState("") ;
    const [y,sety] = useState("") ; 
    function f1(e){
        setp(e.target.value)
    }
    function f2(e){
        sety(p)
    }
    // return(



        
    // )
}
