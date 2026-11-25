import { useState } from 'react'
import {Etudiant} from './data'
export function GestionEtudiant({}){
    const [nomA,setnomA]=useState('');
    const[prenomA,setprenomA] = useState('');
    const[list,setlist] = useState(Etudiant);
    const[nomM,setnomM]=useState('');
    const[prenomM,setprenomM] = useState('');
    const[idM,setidM] = useState('');
    const ajouter = (e)=>{e.preventDefault()
        math.max(...list.map(x=>x.id))+1
        const Groupe = {
            nom : nomA ,
            prenom : prenomA
        }
        setlist([...list,Groupe]) ;
        setnomA(''); setprenomA('')
    }

    return(
        <div>
            <div>
                <form onSubmit={ajouter}>
                Nom : <input type="text" value={nomA} onChange={(e)=>setnomA(e.target.value)} /> <br /><br />
                Prenom : <input type="text" value={prenomA} onChange={(e)=>setprenomA(e.target.value)} /> <br />
                
                <input type="submit" value="ajouter" /><br />
                </form>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((e)=><tr>
                        <td>{e.id}</td>
                        <td>{e.nom}</td>
                        <td>{e.prenom}</td>
                        <td>
                            <button>Supprimer</button>
                            <button>Modifier</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}