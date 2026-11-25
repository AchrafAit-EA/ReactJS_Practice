import { Titre } from "./titre";
import { Menu } from "./Menu";
import {list_produit,list_panier,lp2,lp3} from "./data.jsx"
import { Table} from "./table.jsx";

export function App(){
    return (
        <div>
            <Titre titre="Catalogue"/>
            <Menu titre="Produit" list={list_produit}/>
            <Table text="Produit" table={lp2}/>
            <Table text="Panier" table={lp3}/>
            <Menu titre="Panier" list={list_panier}/>
            <Titre titre="E-Commerce"/>


        </div>
)
}