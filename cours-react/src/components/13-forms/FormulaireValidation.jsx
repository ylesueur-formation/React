import { useState } from "react";
import { useForm } from "react-hook-form";

export function FormulaireValidation() {
    /** Affectation par decomposition de l'objet. On vient extraire la propriété pour la stocker dans une variable
     *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
     *  
     *  const form = useForm();
     *  const register = form.register;
     *  const handleSubmit = form.rehandleSubmitgister;
     *  const formState = form.formState;
     */
    const {register, handleSubmit, formState} = useForm();
    const { errors } = formState;
    // const [count, setCount] = useState(0);
    console.log("Register: ", register);
    console.log("Errors: ", errors);

    const nom = register("nom", {maxLength: 5});

    const reussite = (data) => {
        console.log(data);
    }

    const echec = (error) => {
        console.error(error);
    }
    return (
        <>
            <form onSubmit={handleSubmit(reussite, echec)}>
                <input type="text" id="firstname" {...register("prenom", {minLength: 3, maxLength: 5})} />
                <input type="text" id="lastname" {...nom}/>
                <input type="submit" value="Valider" />
            </form>
        </>
    );
}