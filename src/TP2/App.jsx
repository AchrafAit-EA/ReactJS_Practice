import {Titre} from './titre.jsx'
import Menu from './Menu.jsx'
import Table from './Table.jsx'
import {list_produit,list_panier,lp3,lp2} from './data.jsx'
export function App(){
    return (
        <div>
            <Titre text="Catalogue"/>
            <Titre text="Site E-commerce"/><br/> <br />
            <Menu text="Produit" list={list_produit}/>
            <Menu text="Panier" list={list_panier}/>
            <Table text="Produits" table={lp2}/>
            <Table text="Panier" table={lp3}/>

        </div>
    )
}