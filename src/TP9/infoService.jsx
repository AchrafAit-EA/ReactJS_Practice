import { useState } from "react" ;
import { Services } from "./data" ; 
import { Personnels } from './data' ; 

export function InfoService(){
const[ser,setserv] = useState(Services[0].numero) ;
const S = Services.find((y)=>y.numero == ser && ser !== '')
    
    return(
        <div>
            Service : <select onChange={(e)=>setserv(e.target.value)}>
                <option value={''} >--Choisir un service--</option>
                {Services.map((e)=><option value={e.numero}>{e.titre}</option>
            )}
            </select> <br/>
            <div>
                <p> Numero : {S.numero}</p>
                <p> Titre: {S.titre}</p>
                <p> Description : {S.description}</p>
                <p> Nombre de Personels : {Personnels.filter((e)=>e.ServiceId == S.numero).length}</p>
            </div>
            
        </div> 
    )
}