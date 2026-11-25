export function Formation({formation}){
    return(
        <div>
            <h2>{formation.titre}<span>{formation.masse_horaire}</span></h2>
            <p>{formation.niveau}</p>
            <p>{formation.url}</p>
        </div>
    )
}