import React from 'react';
import axios from 'axios';

export class AxiosAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            utilisateur: null
        }
        // this.onDeleteAxiosHandler = this.onDeleteAxiosHandler.bind(this);
    }

    onGetAxiosHandler = () => {

        // 1- axios(url) : renvoie une promesse avec les données.
        // 2- pour acceder à ces données; on doit utiliser la methode then.
        //       La methode prend en parametre la fonction de success: 
        //       qu'est ce que vous voulez faire avec le resultat ?
        axios('https://jsonplaceholder.typicode.com/users').then(
            (reponse) => {
                console.log(reponse);
                console.log(reponse.statusText);
                console.log(reponse.data);
                let utilisateurs = reponse.data; // <- tableau d'utilisateurs
                this.setState({utilisateur: utilisateurs[0] });
            }
        );
    }

    onPostAxiosHandler = () => {
        // Le POST pour les requetes HTTP permet de créer un élément

        // L'objet data dépend de votre serveur ou de l'API que vous utilisez.
        let data = {
            userId: 99,
            title: "Super Article !",
            body: "Lorem Ipsum"
        }
        axios.post("https://jsonplaceholder.typicode.com/posts", data).then(
            reponse => console.log(reponse.statusText, reponse.data)
        );
    }


    onPatchAxiosHandler = () => {
        // Le PATCH pour les requetes HTTP permet de mettre à jour partiellement un objet.
        // axios("https://jsonplaceholder.typicode.com/posts/99").then(r=>console.log(r.data));

        // L'objet data dépend de votre serveur ou de l'API que vous utilisez.
        let data = {
            title: "Super Article !",
        }
        axios.patch("https://jsonplaceholder.typicode.com/posts/99", data).then(
            reponse => console.log(reponse.statusText, reponse.data)
        );
    }

    onDeleteAxiosHandler = () => {
        // Le PATCH pour les requetes HTTP permet de mettre à jour partiellement un objet.
        // axios("https://jsonplaceholder.typicode.com/posts/99").then(r=>console.log(r.data));


        axios.delete("https://jsonplaceholder.typicode.com/posts/99").then(
            reponse => console.log(reponse.statusText, reponse.data)
        );
    }

    renderUtilisateur = () => {
        if (this.state.utilisateur !== null) {
            return (
                <div class="card">
                    <div class="card-header">
                        Personne
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{this.state.utilisateur.name}</h5>
                        <p class="card-text">{this.state.utilisateur.email}</p>
                        <a href={this.state.utilisateur.website} class="btn btn-primary">Visiter mon site</a>
                    </div>
                </div>
            )
        }
        return null;
    }

    render() {
        return (
        <>
            {/* CRUD */}
            <button onClick={this.onGetAxiosHandler} className="btn btn-success m-3">
                Axios GET (Read)
            </button>
            { this.renderUtilisateur() }

            <button onClick={this.onPostAxiosHandler} className="1btn btn-warning m-3">
                Axios POST (Create)
            </button>

            <button onClick={this.onPatchAxiosHandler} className="btn btn-info m-3">
                Axios PATCH (Update)
            </button>

            <button onClick={this.onDeleteAxiosHandler} className="btn btn-danger m-3">
                Axios DELETE (Delete)
            </button>
        </>
        )
    }
}