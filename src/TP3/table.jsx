export const Table = ({text,table})=>{
    const total = table.reduce((somme , x)=> somme + x.prix , 0);
    return(
        <div>
            <h2>Listes des {text}</h2>
            <table border="1">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((X)=>
                     <tr>
                        <td>{X.id}</td>
                        <td>{X.nom}</td>
                        <td>{X.prix}</td>
                    </tr> 
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>{total}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
