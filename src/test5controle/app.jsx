import { useState } from "react";
import {Employe, types, projets,Taches} from './data'
import {Entete} from './entete'
import { ListDR } from "./ListDR";

export function App(){
    const elements = {Employe,types,projets};
    return(
        <div>
            <Entete nom={'achraf ait Bouiderran'} code={'TY687'} />
            <ListDR element={elements} />
        </div>
    )
}