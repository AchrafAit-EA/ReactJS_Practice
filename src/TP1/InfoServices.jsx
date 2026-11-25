import {Services} from "./data.jsx";
import {Personnels} from "./data.jsx"
import {Numservice} from "./data.jsx"

export function InfoService(){
    const Num = Services.find((x)=>x.numero === Numservice); 
    const NBPersonels = Personnels.filter((x)=>x.serviceID === Numservice).length 
    return(
        <div>
            <fieldset> Info Services : 
                Numero : {Num.numero}
                Titree : {Num.titre}
                Description : {Num.description}
                Numero de Personnels : {NBPersonels}
            </fieldset>
        </div>
    )
}