export function Carte({recette,afficheringred}){
    return(
        <div>
            <h3>{recette.nom}</h3>
            <p>{recette.categorie}</p>
            <div>
                {(afficheringred)?<ul>{recette.ingredients.map((e)=><li>{e}</li>)}</ul>:""}
            </div>
        </div>
    )
}