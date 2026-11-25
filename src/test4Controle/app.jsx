import { Header } from "./header";
import { Formation } from "./Formation";
import { useState } from "react";
import {formations,niveaux} from './data'
export function App(){
    const[niveaue,setniveau]=useState(niveaux[0])
    return(
        <div>
            <Header title={"Liste des Formations "} />
            <fieldset>
            Niveau : <select onChange={(e)=>setniveau(e.target.value)}>
                {niveaux.map((e)=><option value={e}>{e}</option>)}
            </select>
            
            {formations.filter((e)=>e.niveau == niveaue).map((y)=><Formation formation={y}/>)}
            </fieldset>
        </div>
    )
}