    import { useState } from "react"

    export function ListDR({element}){
        const[type,settype]=useState("")
        const[employe,setemploye]=useState("")
        const[projet,setprojet]=useState("")
        return(
            <div>
                <div>
                    <select value={type} onChange={(e)=>settype(e.target.value)}>
                        <option value="">Choisire un Types : </option>
                        {element.types.map((e)=><option value={e}>{e}</option>)}
                    </select>
                </div><br /><br />
                <div>
                    <select value={employe} onChange={(e)=>setemploye(e.target.value)}>
                        <option value="">Choisire un Employe : </option>
                        {element.Employe.map((e)=><option value={e}>{e}</option>)}
                    </select>
                </div><br /><br />
                <div>
                    <select value={projet} onChange={(e)=>setprojet(e.target.value)}>
                        <option value="">Choisir un Projet : </option>
                        {element.projets.map((e)=><option value={e}>{e}</option>)}
                    </select>
                </div>
            </div>
        )
    }