import { useState } from "react"
import {Header} from "./header"
import { ListeCarte } from "./ListeCarte"
export function App(){
    const [afficher,setafficher] = useState("") 
    return(
        <div>
            <Header  titre="Fiche de Recettes" />
            <button onClick={()=>setafficher(!afficher)}>{(afficher==false)?"afficher les ingredients ":"Masquer les ingredients"}</button>
            <ListeCarte afficheringred={afficher} />
            <Header  titre="Footer de La page " />

        </div>
    )
}