import { Services } from "./data.jsx";
export default function ListService(){
    return(
        <div>
            <h2>Liste des Services :  </h2>
            <select name="" id="">
                Services {Services.map(x=><option>{x.titre}</option>)}
            </select><br/><br />
        </div>
    )
}