import { useForm } from "react-hook-form";
import { FormulaireValidation } from "./FormulaireValidation";

export function Formulaires() {
    const form = useForm();
    // console.log("Form: ", form);
    const email = form.register("email");
    // console.log("Register: ", email);
    const password = form.register("password", {required: "Le mot de passe est obligatoire."});
    const errors = form.formState.errors;
    // console.log("Errors: ", errors);
    const onSubmit = (data) => console.log("Data: ", data, data.email); 
    const onError = (error) => console.error("Error: ", error);

    return (
        <>
            <h2>Formulaires</h2>
            <form action="" onSubmit={form.handleSubmit(onSubmit, onError)}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name={email.name} onChange={email.onChange} onBlur={email.onBlur} ref={email.ref}className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" {...password} className="form-control" id="password" placeholder="Password" />
                    {
                        errors.password && <span className="alert alert-danger">{errors.password.message}</span>
                    }
                </div>
                <button type="submit" className="btn btn-primary">Connexion</button>
            </form>
            <hr/>
            <FormulaireValidation/>
        </>
    );
}