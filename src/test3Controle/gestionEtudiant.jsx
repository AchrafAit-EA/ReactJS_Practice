import { useState } from "react"
import { listfilieres } from "./data"
import { listetudiant } from "./data"
export function Gestion(){
    const[nom,setnom]=useState("")
    const[prenom,setprenom]=useState("")
    const[filiere,setfiliere]=useState("")
    const[note,setnote]=useState("")
    const[list,setlist]=useState(listetudiant) ;
    
    function Ajouter(){
        const Groupe = {
            nom : nom,
            prenom : prenom,    
            filiere : filiere ,
            note : note
        }
        setlist([...list,Groupe])

    }
    function Supprimer(nom){
        setlist(list.filter((e)=>e.nom != nom))
    }
    return(
        <fieldset>
        <div>
            <h2> Ajouter un Etudiant </h2>
            Nom de l'etudiant : <input type="text" value={nom} onChange={(e)=>setnom(e.target.value)} /><br/><br/>
            Prenom de l'etudiant : <input type="text" value={prenom} onChange={(e)=>setprenom(e.target.value)} /><br/><br/>
            Filiere : <select value={filiere} onChange={(x)=>setfiliere(x.target.value)}>
                <option>CHoisir VOtre filiere :</option>
                {listfilieres.map((e)=><option value={e}>{e}</option>)}
            </select><br/><br/>
            Note : <input type="text" value={note} onChange={(e)=>setnote(e.target.value)} /><br/><br/>
            <div><button onClick={()=>Ajouter()}> Ajouter </button></div><br/>
            <div>
                <table border={1}>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Filiere</th>
                        <th>Note</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {list.map((x)=>
                        <tr>
                        <td>{x.nom}</td>
                        <td>{x.prenom}</td>
                        <td>{x.filiere}</td>
                        <td>{x.note}</td>
                        <td><button type="reset" onClick={()=>Supprimer(x.nom)}>Supprimer</button></td>
                        </tr>

                    )}
                    
                    </tbody>
                </table>
            </div>
        </div>
        </fieldset>
    )
}