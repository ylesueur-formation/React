import { useForm } from "react-hook-form";

export function Login() {
    // Creation d'un formulaire coté React
    const formulaire = useForm();
    // register: la fonction qui permet de créer un objet pour lier le champ JSX avec le formulaire React
    const register = formulaire.register;
    // handleSubmit: la fonction qui permet de gerer les données lorsqu'on soumet le formulaire.
    const handleSubmit = formulaire.handleSubmit;
    // formState: c'est un objet qui représente l'etat du formulaire
    const formState = formulaire.formState;
    // On recupere l'objet errors dans l'etat du formulaire: formState
    const errors = formState.errors;

    const validationOptions = {
        password: {
            required: "Le mot de passe est obligatoire.",
            minLength: {
                value: 6,
                message: "Le mot de passe doit contenir au moins 6 caractères"
            },
            // pattern: {
            //     value: /[a-zA-z][0-9]{8,15}/, 
            //     message: 'Le mot de passe ...'
            // }
        },
        userName: {
            required: "Le nom d'utilisateur est obligatoire.",
            maxLength: {
                value: 15,
                message: "Le nom d'utilisateur doit contenir maximum 15 caractères"
            }
        }
    }
    // On utilise la fonction register pour un créer un objet qu'on va lier avec le champ JSX.
    const usernameInput = register("userName", validationOptions.userName);
    const passwordInput = register("password", validationOptions.password);


    const onSubmitHanlder = (data) => {
        // Data est un objet qui contient les valeurs des champs du formulaire
        console.log(data);
    }

    const onErrorHandler = (error) => {
        console.error(error);
    }

    return (
        <>
            <h1>Login</h1>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmitHanlder, onErrorHandler)}>
                    <div className="form-group">
                        <label htmlFor="userName">Nom d'utilisateur</label>
                        <input type="text" name={usernameInput.name}  onChange={usernameInput.onChange} onBlur={usernameInput.onBlur} ref={usernameInput.ref} className="form-control" id="userName" placeholder="Nom d'utilisateur" />
                        {
                            errors.userName && 
                            <p className="form-text alert alert-danger">
                                {errors.userName.message}
                            </p>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" {...passwordInput} className="form-control" id="password" placeholder="Mot de passe" />
                        {
                            errors.password && 
                            <p className="form-text alert alert-danger">
                                {errors.password.message}
                            </p>
                        }
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}