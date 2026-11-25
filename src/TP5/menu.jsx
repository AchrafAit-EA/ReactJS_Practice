import { useState } from "react";
import { Personnel, services} from "./data";
import "./style.css"
  export  function FormY(){
    const[nom,setNom] = useState("");
    const[id,setID] = useState();
    const[P,setP] = useState(Personnel)
    const[valeur,setValeur] = useState('')
    const[prenom,setprenom] = useState('')
    const[serviceId,SetserviceId] = useState('')
    function Rechercher(e){
        setValeur(e.target.value)
        
    }
    function supp(id){
        setP(P.filter((x)=>x.id != id))
    }
    function ajouter(id){
        const Noveau = {
            id : id ,
            nom : nom ,
            Prenom : prenom ,
            serviceId : serviceId
        };
        setP([...P,Noveau]) ;
    }
       
        return(
            <div>
                <div className="Form">
                <form >
                    <fieldset>
                        <legend>Vos Infos </legend>
                    ID    : <input type="text" value={id} onChange={(e)=>setID(e.target.value)}/><br/><br/>
                    Nom : <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/><br/><br/>
                    Prenom : <input type="text" value={prenom} onChange={(e)=>setprenom(e.target.value)}/><br/><br/>
                    Service : <select value={serviceId} onChange={(e)=>SetserviceId(e.target.value)}>
                        <option value="">Choisir un Service </option>
                        <option value="1"> Devloppement </option>
                        <option value="2"> infrastructure </option>
                        <option value="3"> Gestion </option>
                    </select><br /><br />
                    <button type="button" onClick={()=>ajouter()}> Ajouter </button>
                     
                     </fieldset>
                </form><br/><br/>
                </div>
                
                <div>
                    Nom : <input type="text" onChange={Rechercher}/><br/><br />
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>ServiceID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {P.filter((x)=>x.nom.includes(valeur)).map(y=>(
                                <tr>
                                    <td>{y.nom}</td>
                                    <td>{y.Prenom}</td>
                                    <td>{y.ServiceId}</td>
                                    <td><button type="reset" onClick={()=>supp(y.id)}>Supprimer</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}