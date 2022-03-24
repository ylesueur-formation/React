import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TacheContext } from "../App";

export function TaskForm() {
    const { register, handleSubmit} = useForm();
    const {taches, setTaches } = useContext(TacheContext);

    const onSubmitHandler = (data) => {
        console.log("Data: ", data);
        const copyTaches = [...taches];
        const dernierID = copyTaches[copyTaches.length - 1].id;
        const tache = {
            id: dernierID + 1,
            title: data.task,
            priority: data.priority
        }
        copyTaches.push(tache);
        setTaches(copyTaches);
    }

    return (
        <>
            <h1>Ajouter une Tache</h1>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Nom de la Tache</label>
                    <input type="text" {...register("task")} className="form-control" id="task" />
                </div>
                <select className="form-select"  {...register("priority")} id="priotity" >
                    <option>Pas important</option>
                    <option>Important</option>
                    <option>Urgent</option>
                    </select>
                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>
        </>
    );
}