import { createContext, useState } from "react";
import { TaskForm } from "./components/Task";
import { TaskList } from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';

export const TacheContext = createContext({});

export default function App() {
     const [taches, setTaches] = useState([
        { id: 1, title: 'Tache 01', priority: 'Important'},        
        { id: 2, title: 'Tache 02', priority: 'Urgent'}   
     ]);

    const state = {
        taches: taches, 
        setTaches: setTaches,
    }

    return (
        <TacheContext.Provider value={state}>
            <TaskList/>
            <TaskForm />
        </TacheContext.Provider>
    );
}