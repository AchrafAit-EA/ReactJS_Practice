import { liste_recettes } from "./data";
import { Carte } from "./carte";
export function ListeCarte({afficheringred}){
    return(
        <div>
            {liste_recettes.map((e)=><Carte recette={e} afficheringred={afficheringred}/>)}
        </div>
    )
}