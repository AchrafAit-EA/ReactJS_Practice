
export function ListForm({ listA,envoyer }) {
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {listA.map((e) => (
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.nom}</td>
                            <td>{e.prenom}</td>
                            <td>
                                <button>
                                    Supprimer
                                </button>

                                <button>Modifier</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
