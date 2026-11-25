import { Entete } from "./entete"
import './style.css'
import { Gestion } from "./gestionEtudiant"
export function App(){
    return(
        <div>
            <Entete titre={"Gestion des Etudiants"} />
            <Gestion />
        </div>
    )
}