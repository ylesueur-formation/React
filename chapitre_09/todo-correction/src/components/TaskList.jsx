import { useContext } from "react";
import { TacheContext } from "../App";

export function TaskList() {
    // const { taches } = useContext(TacheContext);
    const contexte = useContext(TacheContext);
    const taches = contexte.taches;
    return (
        <>
            <h1>Liste des taches</h1>
            {
                taches.map((tache) => (
                    <div key={tache.id}>
                            <h2>{tache.title}</h2>
                            <p>{tache.priority}</p>
                    </div>
                    )
                )
            }
        </>
    );
}