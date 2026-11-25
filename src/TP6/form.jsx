import { useState } from "react";
import { Personnel , services } from "./data";
export default function FormX(){
    const [id,setid] = useState() ;
    const [nom , setnom ] = useState("");
    const [Prenom , setprenom ] = useState("");
    const [ser , setSer ] = useState("");
    // const [service,setService] = useState(Personnel)
    const [Personne ,setPersonne] = useState(()=>{
       const infos = localStorage.getItem("personnel");
        return infos ? JSON.parse(infos):Personnel ;
    });
    // const affichage = useState(Personne)
    function ajouter_Personne(){
        const Groupe =
        {
            id : id ,
            nom : nom ,
            Prenom : Prenom,
            ser : ser 
        };
        setPersonne=[...Personne,Groupe];
        // localStorage.setItem("personnel", JSON.stringify(NouvelListe));
    }   
    function supprimer(id){
        setPersonne(Personne.filter((e)=>e.id != id));
    }
    return(
        <div>
            <div className="Formulaire">
                <form>
                    <fieldset>
                        <legend>Votre Informations : </legend>
                        ID : <br/><input type="number" value={id} onChange={(e)=>setid(e.target.value)}/><br />
                        Nom :<br/> <input type="text" value={nom} onChange={(e)=>setnom(e.target.value)} /><br />
                        Prenom :<br/> <input type="text" value={Prenom} onChange={(e)=>setprenom(e.target.value)} /><br />
                        Services : <br/><select value={ser} onChange={(e)=>setSer(e.target.value)}>
                            <option value="0"> Choisir Votre Services : </option>
                            <option value="Cyber Securite"> Cyber Securite </option>
                            <option value="IA Enginer"> IA Enginer </option>
                            <option value="Full Stack"> Full Stack </option>
                            <option value="Full Back-end"> Full Back-end </option>
                        </select><br/><br />
                        <button type="button" onClick={()=> ajouter_Personne()}> Ajouter </button>
                    </fieldset>
                </form><br />
            </div>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Services</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Personne.map((x)=>(
                            <tr>
                                <td>{x.id}</td>
                                <td>{x.nom}</td>
                                <td>{x.Prenom}</td>
                                <td>{x.ser}</td>
                                <td><button type="reset" onClick={()=>supprimer(x.id)}> Supprimer </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}