import { useState } from "react";
export function App() {
    const[compteur,setCompture] = useState(0)

    return (
        <div>
            <h2>{compteur}</h2>

            <button onClick={() => setCompture(compteur + 1)}>
                Ajouter
            </button>
            <button type="reset" onClick={()=> setCompture(compteur = 0)}>Reset</button>
        </div>
    );
}