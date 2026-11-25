export default function Groupe(){
    const groupes = [201,202,203] ; 
    return(
        <div>
            <h1>Liste des Groupes : </h1>
            <select name="" id="">
                <option value="">Choisire Un Groupe : </option>
                {groupes.map((groupe)=>
                (<option>{groupe}</option>
                ))}
            </select>
        </div>
    )
}