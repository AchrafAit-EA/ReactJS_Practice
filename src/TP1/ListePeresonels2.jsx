import { Personnels , Numservice} from "./data.jsx";
export default function ListePersonnels2(){
    const T1 = Personnels.filter((x)=>x.serviceID !== Numservice) ;
    return (
        <div>
            <h3>Listes Des Personnels de Service 100 : </h3>
            {T1.map(x=>
            <div><input type="checkbox" checked={x.actif}/>{x.nom} {x.prenom}</div>
            )} 
        </div>
    )
    
}