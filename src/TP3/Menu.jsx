export const Menu = ({titre,list})=>{
    return( <div>
        <h2>Menu {titre}</h2>
        <ul>
            {list.map(x=><li>{x}</li>)}
        </ul>
    </div>
    )
}