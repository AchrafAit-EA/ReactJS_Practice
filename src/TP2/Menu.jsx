export default function Menu(props){
    return(
        <div>
            <h2>Menu {props.text}</h2>
            <ul> 
                {props.list.map(x=><li>{x}</li>)}
            </ul>
        </div>
    )
}