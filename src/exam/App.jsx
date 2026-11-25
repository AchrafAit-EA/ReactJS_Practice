import { Header } from "./header"
import {medecins,specialites} from "./data"
import {Medcin} from "./Medcin"
import { useState } from "react"
export function App(){
    const [specialite,setspecialite] = useState("Tout les Speciallites")
    return(
        <div>
            <Header titre="Liste des Medecins "/><br/>
            <label>Specialite :</label>
            <select value={specialite} onChange={(e)=>setspecialite(e.target.value)}>
                <option >Tout les Speciallites</option>
                {specialites.map((x)=>(<option>{x}</option>))}
            </select><br /><br />
            {medecins.filter((y) => (specialite=="Tout les Speciallites")?true:y.Spécialité === specialite).map((z)=>
                <Medcin 
                    N = {z.nom}
                    S = {z.Spécialité}
                    A = {z.Adresse}
                    T = {z.Tèl}
                />
            )}
        </div>
    )
}